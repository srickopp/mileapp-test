import { ApiProperty } from "@nestjs/swagger";
class CustomerAttribute {
    @ApiProperty()
    nama_sales: string;  

    @ApiProperty()
    TOP: string;  

    @ApiProperty()
    jenis_pelanggan: string;
}

class OriginDestinationData {  
    @ApiProperty()
    customer_name: string;

    @ApiProperty()
    customer_address: string;

    @ApiProperty()
    customer_email: string;

    @ApiProperty()
    customer_phone: string;

    @ApiProperty()
    customer_address_detail: string | null;

    @ApiProperty()
    customer_zip_code:  string;

    @ApiProperty()
    zone_code: string;

    @ApiProperty()
    organization_id: number;

    @ApiProperty()
    location_id: string;  
}

class CreateKoli {  
  @ApiProperty()
  koli_length: number;

  @ApiProperty()
  koli_chargeable_weight: number;

  @ApiProperty()
  koli_width: number;

  @ApiProperty()
  koli_surcharge: [number];

  @ApiProperty()
  koli_height: number;

  @ApiProperty()
  koli_description: string;

  @ApiProperty()
  koli_formula_id: string;    
  
  @ApiProperty()
  koli_volume: number;
  
  @ApiProperty()
  koli_weight: number;

  @ApiProperty()
  koli_custom_field: {};
}
  
class CustomField{}

class Connote {
  @ApiProperty()
    connote_id: string;
    
    @ApiProperty()
    connote_number: number;

    @ApiProperty()
    connote_service: string;

    @ApiProperty()
    connote_service_price: number;

    @ApiProperty()
    connote_amount: number;
    
    @ApiProperty()
    connote_code: string;

    @ApiProperty()
    connote_booking_code: '';
    
    @ApiProperty()
    connote_order: number;

    @ApiProperty()
    connote_state: string;

    @ApiProperty()
    connote_state_id: number;

    @ApiProperty()
    zone_code_from: string;

    @ApiProperty()
    zone_code_to: string;

    @ApiProperty()
    surcharge_amount: number;

    @ApiProperty()
    transaction_id: string;

    @ApiProperty()
    actual_weight: number;

    @ApiProperty()
    volume_weight: number;

    @ApiProperty()
    chargeable_weight: number;

    @ApiProperty()    
    organization_id: number;

    @ApiProperty()
    location_id: string;

    @ApiProperty()
    connote_total_package: string;

    @ApiProperty()
    connote_surcharge_amount: string;

    @ApiProperty()
    connote_sla_day: string;

    @ApiProperty()
    location_name: string;

    @ApiProperty()
    location_type: string;

    @ApiProperty()
    source_tariff_db: string;

    @ApiProperty()
    id_source_tariff: string;

    @ApiProperty()
    pod: string;

    @ApiProperty()
    history: string[]
}

class Koli {
  @ApiProperty()
  koli_length: number;
  
  @ApiProperty()
  awb_url: string;
  
  @ApiProperty()
  created_at: string;
  
  @ApiProperty()
  koli_chargeable_weight: number;
  
  @ApiProperty()
  koli_width: number;
  
  @ApiProperty()
  koli_surcharge: [];
  
  @ApiProperty()
  koli_height: number;
  
  @ApiProperty()
  updated_at: string;
  
  @ApiProperty()
  koli_description: string;
  
  @ApiProperty()
  koli_formula_id: string;
  
  @ApiProperty()
  connote_id: string;
  
  @ApiProperty()
  koli_volume: number;
  
  @ApiProperty()
  koli_weight: number;
  
  @ApiProperty()
  koli_id:  string;
  
  @ApiProperty()
  koli_custom_field: {};
  
  @ApiProperty()
  koli_code: string;  
  
}
    
export class CreateTransaction {        
  @ApiProperty()
  customer_name: string;

  @ApiProperty()
  customer_code: string;

  @ApiProperty()
  transaction_amount: number;

  @ApiProperty()
  transaction_discount: number;

  @ApiProperty()
  transaction_additional_field: string;

  @ApiProperty()
  transaction_payment_type: string;

  @ApiProperty()
  transaction_state: string;

  @ApiProperty()
  transaction_code: string;

  @ApiProperty()
  transaction_order: number;

  @ApiProperty()
  location_id: string;

  @ApiProperty()
  organization_id: number;
  
  @ApiProperty()
  transaction_payment_type_name: string;

  @ApiProperty()
  transaction_cash_amount: number;

  @ApiProperty()
  transaction_cash_change: number;  
  
  @ApiProperty()
  customer_attribute: CustomerAttribute;

  @ApiProperty()
  origin_data: OriginDestinationData;

  @ApiProperty()
  destination_data: OriginDestinationData;

  @ApiProperty({ type: () => [CreateKoli]})
  koli_data: [CreateKoli];

  @ApiProperty()
  custom_field: CustomField;

  @ApiProperty()
  currentLocation: CustomField;      
}

export class TransactionDto {
  @ApiProperty()
  customer_name: string;

  @ApiProperty()
  customer_code: string;

  @ApiProperty()
  transaction_amount: number;

  @ApiProperty()
  transaction_discount: number;

  @ApiProperty()
  transaction_additional_field: string;

  @ApiProperty()
  transaction_payment_type: string;

  @ApiProperty()
  transaction_state: string;

  @ApiProperty()
  transaction_code: string;

  @ApiProperty()
  transaction_order: number;

  @ApiProperty()
  location_id: string;

  @ApiProperty()
  organization_id: number;
  
  @ApiProperty()
  transaction_payment_type_name: string;

  @ApiProperty()
  transaction_cash_amount: number;

  @ApiProperty()
  transaction_cash_change: number;  
  
  @ApiProperty()
  customer_attribute: CustomerAttribute; 

  @ApiProperty()
  connote_id: string;

  @ApiProperty()
  origin_data: OriginDestinationData;

  @ApiProperty()
  destination_data: OriginDestinationData;

  @ApiProperty({ type: () => [Koli]})
  koli_data: [Koli];

  @ApiProperty()
  custom_field: CustomField;

  @ApiProperty()
  currentLocation: CustomField;

  @ApiProperty()
  connote: Connote;
}
