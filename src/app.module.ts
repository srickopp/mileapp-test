import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { TransactionModule } from './transactions/transaction.module';
dotenv.config();

@Module({
  imports: [
    TransactionModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}` 
    ,{      
      "authSource": "admin",
      "auth":{
        "user": process.env.MONGO_USERNAME,
        "password": process.env.MONGO_PASSWORD,
      },
      "useNewUrlParser": true,
      "useUnifiedTopology": true
    }),
  ],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
