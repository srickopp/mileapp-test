import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, isNumber, IsNumber, IsString } from "class-validator";
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
  @IsNumber()
  @ApiProperty()
  koli_length: number;

  @IsNumber()
  @ApiProperty()
  koli_chargeable_weight: number;

  @IsNumber()
  @ApiProperty()
  koli_width: number;

  @ApiProperty()
  koli_surcharge: [number];

  @IsNumber()
  @ApiProperty()
  koli_height: number;

  @ApiProperty()
  koli_description: string;

  @ApiProperty()
  koli_formula_id: string;    
  
  @IsNumber()
  @ApiProperty()
  koli_volume: number;
  
  @IsNumber()
  @ApiProperty()
  koli_weight: number;
  
  @ApiProperty()
  koli_custom_field: {};
}
  

class CustomField{}
    
export class CreateTransaction {
  @IsString()
  @ApiProperty()
  customer_name: string;

  @IsString()
  @ApiProperty()
  customer_code: string;

  @IsNumber()
  @ApiProperty()
  transaction_amount: number;

  @IsNumber()
  @ApiProperty()
  transaction_discount: number;

  @IsString()
  @ApiProperty()
  transaction_additional_field: string;

  @IsString()
  @ApiProperty()
  transaction_payment_type: string;

  @IsString()
  @ApiProperty()
  transaction_state: string;

  @IsString()
  @ApiProperty()
  transaction_code: string;

  @IsNumber()
  @ApiProperty()
  transaction_order: number;

  @IsString()
  @ApiProperty()
  location_id: string;

  @IsNumber()
  @ApiProperty()
  organization_id: number;
  
  @IsString()
  @ApiProperty()
  transaction_payment_type_name: string;

  @IsNumber()
  @ApiProperty()
  transaction_cash_amount: number;

  @IsNumber()
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

// Update Field
class Connote {
  @IsString()
  @ApiProperty()
  connote_id: string;
  
  @IsNumber()
  @ApiProperty()
  connote_number: number;

  @IsString()
  @ApiProperty()
  connote_service: string;

  @IsNumber()
  @ApiProperty()
  connote_service_price: number;

  @IsNumber()
  @ApiProperty()
  connote_amount: number;
  
  @IsString()
  @ApiProperty()
  connote_code: string;
  
  @IsString()
  @ApiProperty()
  connote_booking_code: string;
  
  @IsNumber()
  @ApiProperty()
  connote_order: number;

  @IsString()
  @ApiProperty()
  connote_state: string;

  @IsNumber()
  @ApiProperty()
  connote_state_id: number;

  @IsString()
  @ApiProperty()
  zone_code_from: string;

  @IsString()
  @ApiProperty()
  zone_code_to: string;
  
  @ApiProperty()
  surcharge_amount: number;

  @IsString()
  @ApiProperty()
  transaction_id: string;

  @IsNumber()
  @ApiProperty()
  actual_weight: number;

  @IsNumber()
  @ApiProperty()
  volume_weight: number;

  @IsNumber()
  @ApiProperty()
  chargeable_weight: number;

  @IsNumber()
  @ApiProperty()    
  organization_id: number;

  @IsString()
  @ApiProperty()
  location_id: string;

  @IsString()
  @ApiProperty()
  connote_total_package: string;

  @IsString()
  @ApiProperty()
  connote_surcharge_amount: string;

  @IsString()
  @ApiProperty()
  connote_sla_day: string;

  @IsString()
  @ApiProperty()
  location_name: string;

  @IsString()
  @ApiProperty()
  location_type: string;

  @IsString()
  @ApiProperty()
  source_tariff_db: string;

  @IsString()
  @ApiProperty()
  id_source_tariff: string;

  @ApiProperty()
  pod: string;

  @ApiProperty()
  history: string[]
}
class Koli {
  @IsNumber()
  @ApiProperty()
  koli_length: number;
  
  @IsString()
  @ApiProperty()
  awb_url: string;
  
  @IsNumber()
  @ApiProperty()
  koli_chargeable_weight: number;
  
  @IsNumber()
  @ApiProperty()
  koli_width: number;
    
  @ApiProperty()
  koli_surcharge: [];
  
  @IsNumber()
  @ApiProperty()
  koli_height: number;  
  
  @IsString()
  @ApiProperty()
  koli_description: string;
  
  @ApiProperty()
  koli_formula_id: string;
  
  @IsString()
  @ApiProperty()
  connote_id: string;
  
  @IsNumber()
  @ApiProperty()
  koli_volume: number;
  
  @IsNumber()
  @ApiProperty()
  koli_weight: number;
  
  @IsString()
  @ApiProperty()
  koli_id:  string;
  
  @ApiProperty()
  koli_custom_field: {};

  @IsString()
  @ApiProperty()
  koli_code: string;    
}
export class TransactionDto {    
  @IsString()
  @ApiProperty()
  customer_name?: string;
  
  @IsString()
  @ApiProperty()
  customer_code: string;

  @ApiProperty()
  transaction_amount: number;

  @ApiProperty()
  transaction_discount: number;
  
  @IsString()
  @ApiProperty()
  transaction_additional_field: string;
  
  @IsString()
  @ApiProperty()
  transaction_payment_type: string;

  @IsString()
  @ApiProperty()
  transaction_state: string;

  @IsString()
  @ApiProperty()
  transaction_code: string;

  @IsNumber()
  @ApiProperty()
  transaction_order: number;

  @IsString()
  @ApiProperty()
  location_id: string;

  @ApiProperty()
  organization_id: number;
  
  @IsString()
  @ApiProperty()
  transaction_payment_type_name: string;
  
  @IsNumber()
  @ApiProperty()
  transaction_cash_amount: number;

  @IsNumber()
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

// Patch
class ConnotePatch {  
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
  connote_booking_code: string;
    
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
class KoliPatch {  
  @ApiProperty()
  koli_length: number;
    
  @ApiProperty()
  awb_url: string;
    
  @ApiProperty()
  koli_chargeable_weight: number;
    
  @ApiProperty()
  koli_width: number;
      
  koli_surcharge: [];
    
  @ApiProperty()
  koli_height: number;  
    
  @ApiProperty()
  koli_description: string;
    
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
export class TransactionPatchDto {    
  @ApiProperty()
  customer_name?: string;
  
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

  @ApiProperty({ type: () => [KoliPatch]})
  koli_data: [KoliPatch];

  @ApiProperty()
  custom_field: CustomField;

  @ApiProperty()
  currentLocation: CustomField;

  @ApiProperty()
  connote: ConnotePatch;
}
