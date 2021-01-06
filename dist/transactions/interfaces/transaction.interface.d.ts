import { Document } from "mongoose";
import { ICustomerAttribute } from "./customer_attribute.interface";
export interface ITransaction extends Document {
    readonly customer_name: String;
    readonly customer_code: String;
    readonly transaction_amount: String;
    readonly transaction_discount: String;
    readonly transaction_additional_field: String;
    readonly transaction_payment_type: String;
    readonly transaction_state: String;
    readonly transaction_code: String;
    readonly transaction_order: Number;
    readonly location_id: String;
    readonly organization_id: Number;
    readonly transaction_payment_type_name: String;
    readonly transaction_cash_amount: Number;
    readonly transaction_cash_change: Number;
    readonly customer_attribute: ICustomerAttribute;
}
