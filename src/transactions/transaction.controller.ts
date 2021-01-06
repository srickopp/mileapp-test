import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Res } from "@nestjs/common";
import { Response } from "express";
import { CreateTransaction } from "./dto/transaction.dto";
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

    /**
     * The differences between put and patch functions is, if you want to update just a specific field
     * not a whole entity, you can use put.
     * 
     * Patch is required you to send a whole of the object to update the data.
     * @param id 
     * @param body 
     * @param res 
     */
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