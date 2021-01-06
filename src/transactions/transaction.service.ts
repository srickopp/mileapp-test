import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import { CreateTransaction } from "./dto/transaction.dto";
import { Connote, ConnoteDocument } from "./schema/connote.schema";
import { Transaction, TransactionDocument, Koli } from "./schema/transaction.schema";

@Injectable()
export class TransactionService {

    constructor(
        @InjectModel(Transaction.name)
        private transactionModel: Model<TransactionDocument>,

        @InjectModel(Connote.name)
        private connoteModel: Model<ConnoteDocument>
    ){}
    
    async createTransaction(data){
        let actual_weight: number = 0;    
        let volume_weight: number = 0;
        let chargeable_weight: number = 0;
        
        
        const awb = await this.createAWB();
        
        for await (let koli of data.koli_data){        
            actual_weight += koli.koli_weight;
            volume_weight += koli.koli_volume;
            chargeable_weight += koli.koli_chargeable_weight;                        
        }
        
        const createMail = new this.transactionModel(data);
        let saved_data:any = await createMail.save();
        
        // Create connote
        const connote_total_package = data.koli_data.length;
        const create_connote_payload = {
            transaction_id: saved_data._id,
            connote_state: data.transaction_state,
            connote_service_price: data.transaction_amount,
            connote_amount: data.transaction_amount,
            connote_code: awb,
            location_id: data.location_id,
            organization_id: data.organization_id,
            actual_weight: actual_weight,
            volume_weight: volume_weight,
            chargeable_weight: chargeable_weight,
            connote_total_package     
        };
        
        let save_connote = await this.createConnote(create_connote_payload);
        
        let koli_data = [];
        let index = 0 // For iteration Index
        for await (let koli of data.koli_data){        
            koli_data.push({
                koli_length: koli.koli_length,
                awb_url: `https://tracking.mile.app/label/${awb}.${index}`,
                created_at: saved_data.createdAt,
                koli_chargeable_weight: koli.koli_chargeable_weight,
                koli_width: koli.koli_width,
                koli_surcharge: koli.koli_surcharge,
                koli_height: koli.koli_height,
                updated_at: saved_data.updatedAt,
                koli_description: koli.koli_description,
                koli_formula_id: koli.koli_formula_id,
                connote_id: save_connote._id,
                koli_volume: koli.koli_volume,
                koli_weight: koli.koli_weight,
                koli_id: uuidv4(),
                koli_custom_field: {
                  awb_sicepat: null,
                  harga_barang: null
                },
                koli_code: `${awb}.${index}`
            })
        }

        // Update add Connote
        await this.transactionModel.updateOne({_id:saved_data._id},
        {
                connote_id: save_connote._id,
                koli_data: koli_data
        });                

        return await this.findOne(saved_data._id);
    }

    async createConnote(data){
        const save_connote = new this.connoteModel({            
            connote_number: 1,
            connote_service: 'ECO',
            connote_service_price: data.connote_amount,
            connote_amount: data.connote_amount,
            connote_code: 'AWB00100209082020',
            connote_booking_code: '',
            connote_order: 326931,
            connote_state: data.connote_state,
            connote_state_id: 2,
            zone_code_from: 'CGKFT',
            zone_code_to: 'SMG',
            surcharge_amount: null,
            transaction_id: data.transaction_id,
            actual_weight: data.actual_weight,
            volume_weight: data.volume_weight,
            chargeable_weight: data.chargeable_weight,            
            organization_id: data.organization_id,
            location_id: data.location_id,
            connote_total_package: data.connote_total_package,
            connote_surcharge_amount: '0',
            connote_sla_day: '4',
            location_name: 'Hub Jakarta Selatan',
            location_type: 'HUB',
            source_tariff_db: 'tariff_customers',
            id_source_tariff: '1576868',
            pod: null,
            history: []
          });
          
          return save_connote.save();
    }

    async getAll(){
        let transaction_data = await this.transactionModel.find();
        if( transaction_data.length > 0 ){
            for await(let transaction of transaction_data){
                transaction.connote = await this.connoteModel.findOne({ transaction_id : transaction._id });
                transaction.connote.connote_id = transaction.connote_id;
                transaction.transaction_id = transaction._id;
            }
        }
        return transaction_data;
    }

    async findOne(id){
        let connote_data = await this.connoteModel.findOne({
            transaction_id: id
        });

        connote_data.connote_id = connote_data._id;
        delete connote_data._id;
        delete connote_data.__v;

        let transaction_data: any = await this.transactionModel.findOne({_id: id}).populate(Connote.name);
    
        transaction_data.transaction_id = transaction_data._id
        transaction_data.connote = connote_data;
        delete transaction_data._id;
        delete transaction_data.__v;

        return transaction_data;
    }

    async deleteData(id){
        // Delete transaction data
        await this.transactionModel.deleteOne({
            _id: id
        });

        // Delete connote
        await this.connoteModel.deleteOne({
            transaction_id: id
        });

        return {

        }
    }

    // Create AWB
    async createAWB(){
        const time = new Date();
        return 'AWB'+time.getTime();
    }
    
}