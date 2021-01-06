import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { Transaction, TransactionSchema } from "./schema/transaction.schema";
import { TransactionController } from "./transaction.controller";
import { TransactionService } from "./transaction.service";
import { Connote, ConnoteSchema } from "./schema/connote.schema";

@Module({
    imports:[      
      MongooseModule.forFeature([
        { name: Transaction.name, schema: TransactionSchema },
        { name: Connote.name, schema: ConnoteSchema }
      ])
    ],
    providers: [TransactionService],
    controllers: [TransactionController]
  })
  export class TransactionModule {}