declare class CustomerAttribute {
    nama_sales: string;
    TOP: string;
    jenis_pelanggan: string;
}
declare class OriginDestinationData {
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
declare class Koli {
    koli_length: number;
    koli_chargeable_weight: number;
    koli_width: number;
    koli_surcharge: [number];
    koli_height: number;
    koli_description: string;
    koli_formula_id: string;
    koli_volume: number;
    koli_weight: number;
    koli_custom_field: {};
}
declare class CustomField {
}
export declare class CreateTransaction {
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
    origin_data: OriginDestinationData;
    destination_data: OriginDestinationData;
    koli_data: [Koli];
    custom_field: CustomField;
    currentLocation: CustomField;
}
export {};
