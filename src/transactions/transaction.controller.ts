import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Res } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Response } from "express";
import { Model } from "mongoose";
import { CreateTransaction } from "./dto/transaction.dto";
import { Transaction, TransactionDocument } from "./schema/transaction.schema";
import { TransactionService } from "./transaction.service";

@Controller('package')
export class TransactionController {
    constructor(
        private readonly transactionService: TransactionService
    ){}    

    @Post()
    async createPackageTransactions(@Body() body: CreateTransaction, @Res() res: Response){
      const create_transaction = await this.transactionService.createTransaction(body)
      return res.send(create_transaction)
    }

    @Get()
    async getAll(@Res() res: Response){
        return res.send(await this.transactionService.getAll())
    }

    @Get('/:id')
    async findOne(@Param('id') id: string, @Res() res: Response){
      return res.send(await this.transactionService.findOne(id));
    }

    @Put('/:id')
    async update(
      @Param('id') id: string,
      @Body('body') body: any,
      @Res() res: Response
    ){

    }

    @Patch('/:id')
    async Patch(
      @Param('id') id: string,
      @Body('body') body: any,
      @Res() res: Response
    ){

    }

    @Delete('/:id')
    async deleteData(
      @Param('id') id: string,      
      @Res() res: Response
    ){
      
    }

}