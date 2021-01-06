import { Model } from "mongoose";
import { ConnoteDocument } from "./schema/connote.schema";
import { TransactionDocument } from "./schema/transaction.schema";
export declare class TransactionService {
    private transactionModel;
    private connoteModel;
    constructor(transactionModel: Model<TransactionDocument>, connoteModel: Model<ConnoteDocument>);
    createTransaction(data: any): Promise<any>;
    createConnote(data: any): Promise<ConnoteDocument>;
    getAll(): Promise<TransactionDocument[]>;
    findOne(id: any): Promise<any>;
    createAWB(): Promise<string>;
}
