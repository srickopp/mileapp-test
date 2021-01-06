import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Transaction } from './transaction.schema';

export type ConnoteDocument = Connote & Document;

@Schema({ timestamps: true })
export class Connote {  
    @Prop()
    connote_id: string;
    
    @Prop()
    connote_number: number;

    @Prop()
    connote_service: string;

    @Prop()
    connote_service_price: number;

    @Prop()
    connote_amount: number;
    
    @Prop()
    connote_code: string;

    @Prop()
    connote_booking_code: '';
    
    @Prop()
    connote_order: number;

    @Prop()
    connote_state: string;

    @Prop()
    connote_state_id: number;

    @Prop()
    zone_code_from: string;

    @Prop()
    zone_code_to: string;

    @Prop()
    surcharge_amount: number;

    @Prop()
    transaction_id: string;

    @Prop()
    actual_weight: number;

    @Prop()
    volume_weight: number;

    @Prop()
    chargeable_weight: number;

    @Prop()    
    organization_id: number;

    @Prop()
    location_id: string;

    @Prop()
    connote_total_package: string;

    @Prop()
    connote_surcharge_amount: string;

    @Prop()
    connote_sla_day: string;

    @Prop()
    location_name: string;

    @Prop()
    location_type: string;

    @Prop()
    source_tariff_db: string;

    @Prop()
    id_source_tariff: string;

    @Prop()
    pod: string;

    @Prop()
    history: string[]

    // @Prop({ type: Types.ObjectId, ref: Transaction.name })
    // transaction: Transaction;
}



export const ConnoteSchema = SchemaFactory.createForClass(Connote);