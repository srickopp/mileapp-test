import { MongooseModule } from "@nestjs/mongoose";
import { Module } from '@nestjs/common';
import { Transaction, TransactionSchema } from "./schema/transaction.schema";
import { TransactionController } from "./transaction.controller";

@Module({
    imports:[      
      MongooseModule.forFeature([
        { name: Transaction.name, schema: TransactionSchema }
      ])
    ],
    providers: [],
    controllers: [TransactionController]
  })
  export class TransactionModule {}