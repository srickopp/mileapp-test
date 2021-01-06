import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Connote } from './connote.schema';
export declare type TransactionDocument = Transaction & Document;
export declare class CustomerAttribute {
    nama_sales: string;
    TOP: string;
    jenis_pelanggan: string;
}
export declare class OriginDestinationData {
    customer_name: string;
    customer_address: string;
    customer_email: string;
    customer_phone: string;
    customer_address_detail: string | null;
    customer_zip_code: string;
    zone_code: string;
    organization_id: number;
    location_id: string;
}
export declare class Koli {
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
    koli_id: string;
    koli_custom_field: {};
    koli_code: string;
}
declare class CustomField {
}
export declare class Transaction {
    transaction_id: string;
    customer_name: string;
    customer_code: string;
    transaction_amount: number;
    transaction_discount: number;
    transaction_additional_field: string;
    transaction_payment_type: string;
    transaction_state: string;
    transaction_code: string;
    transaction_order: number;
    location_id: string;
    organization_id: number;
    transaction_payment_type_name: string;
    transaction_cash_amount: number;
    transaction_cash_change: number;
    customer_attribute: CustomerAttribute;
    connote_id: string;
    origin_data: OriginDestinationData;
    destination_data: OriginDestinationData;
    koli_data: [Koli];
    custom_field: CustomField;
    currentLocation: CustomField;
    connote: Connote;
}
export declare const TransactionSchema: mongoose.Schema<any, mongoose.Model<any>>;
export {};
