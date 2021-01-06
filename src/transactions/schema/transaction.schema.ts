import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Connote } from './connote.schema';

export type TransactionDocument = Transaction & Document;

class CustomerAttribute {
  nama_sales: string;  
  TOP: string;  
  jenis_pelanggan: string;
}

class OriginDestinationData {  
    customer_name: string;
    customer_address: string;
    customer_email: string;
    customer_phone: string;
    customer_address_detail: string | null;
    customer_zip_code:  string;
    zone_code: string;
    organization_id: number;
    location_id: string;  
}

class Koli {  
    koli_length: number;
    awb_url: string;
    created_at: string;
    koli_chargeable_weight: number;
    koli_width: number;
    koli_surcharge: [];
    koli_height: number;
    updated_at: string;
    koli_description: string;
    koli_formula_id: null;
    connote_id: string;
    koli_volume: number;
    koli_weight: number;
    koli_id:  string;
    koli_custom_field: {};
    koli_code: string;  
}

class CustomField{}

@Schema({ timestamps: true })
export class Transaction {  
  @Prop()
  transaction_id: string;

  @Prop()
  customer_name: string;

  @Prop()
  customer_code: string;

  @Prop()
  transaction_amount: string;

  @Prop()
  transaction_discount: string;

  @Prop()
  transaction_additional_field: string;

  @Prop()
  transaction_payment_type: string;

  @Prop()
  transaction_state: string;

  @Prop()
  transaction_code: string;

  @Prop()
  transaction_order: Number;

  @Prop()
  location_id: string;

  @Prop()
  organization_id: Number;
  
  @Prop()
  transaction_payment_type_name: string;

  @Prop()
  transaction_cash_amount: Number;

  @Prop()
  transaction_cash_change: Number;  
  
  @Prop()
  customer_attribute: CustomerAttribute; 

  @Prop()
  connote_id: string;

  @Prop()
  origin_data: OriginDestinationData;

  @Prop()
  destination_data: OriginDestinationData;

  @Prop()
  koli_data: [Koli];

  @Prop()
  custom_field: CustomField;

  @Prop()
  currentLocation: CustomField;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Connote' })
  connote: Connote;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);