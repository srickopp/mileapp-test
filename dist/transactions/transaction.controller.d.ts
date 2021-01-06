import { Response } from "express";
import { CreateTransaction } from "./dto/transaction.dto";
import { TransactionService } from "./transaction.service";
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    createPackageTransactions(body: CreateTransaction, res: Response): Promise<Response<any>>;
    getAll(res: Response): Promise<Response<any>>;
    findOne(id: string, res: Response): Promise<Response<any>>;
    update(id: string, body: any, res: Response): Promise<void>;
    Patch(id: string, body: any, res: Response): Promise<void>;
    deleteData(id: string, res: Response): Promise<void>;
}
