import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Response } from "express";
import { CreateTransaction, TransactionDto, TransactionPatchDto } from "./dto/transaction.dto";
import { TransactionService } from "./transaction.service";

@ApiTags('Mile-APP')
@Controller('package')
export class TransactionController {
    constructor(
        private readonly transactionService: TransactionService
    ){}    

    /**
     * This function will handle about creating a data with parameters:
     * @param body : CreateTransactionDto     
     */
    @Post()
    async createPackageTransactions(@Body() body: CreateTransaction, @Res() res: Response){
      const create_transaction = await this.transactionService.createTransaction(body)
      return res.send(create_transaction)
    }

    /**
     * This functions will handle about get all the data
     * and not required any function
     */
    @Get()
    async getAll(@Res() res: Response){
        return res.send(await this.transactionService.getAll())
    }

    /**
     * This function will return a specific data with parameter transaction id
     * @param id     
     */
    @Get('/:id')
    async findOne(@Param('id') id: string, @Res() res: Response){
      return res.send(await this.transactionService.findOne(id));
    }

    /**
     * The differences between put and patch functions is, if you want to update just a specific field
     * not a whole entity, you can use put.
     * 
     * Patch is required you to send a whole of the object to update the data.
     * In this case i'll just make a different at validations flow
     * 
     * If you choose call patch endpoint there's no problem is you just send a specific field
     * @param id 
     * @param body 
     * @param res 
     */
    @Put('/:id')
    async update(
      @Param('id') id: string,
      @Body() body: TransactionDto,
      @Res() res: Response
    ){
      return res.send(await this.transactionService.update(id, body));
    }
    
    @Patch('/:id')    
    async Patch(
      @Param('id') id: string,
      @Body() body: TransactionPatchDto,
      @Res() res: Response
    ){
      return res.send(await this.transactionService.update(id, body));
    }

    /**
     * This function is handle to delete a data with parameter:
     * @param id       
     */
    @Delete('/:id')
    async deleteData(
      @Param('id') id: string,      
      @Res() res: Response
    ){
      return res.send(await this.transactionService.deleteData(id));
    }

}