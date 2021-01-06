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
  
  class Koli {  
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
  
    @ApiProperty({ type: () => [Koli]})
    koli_data: [Koli];
  
    @ApiProperty()
    custom_field: CustomField;
  
    @ApiProperty()
    currentLocation: CustomField;      
  }
  