import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Order } from './dto/order.dto';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PartialOrder } from './dto/partialOrder.dto';
import { OrderService } from './order.service';

@ApiTags('Order')
@Controller('api/order')
export class OrderController {

    constructor(private orderService : OrderService){}

    @ApiOperation({summary:"Obtener todos los pedidos"})
    @Get()
    async getOrders(){
        return await this.orderService.getOrders();
    }

    @ApiOperation({summary:"Obtener todos los estados"})
    @Get('/state')
    async getState(){
        return await this.orderService.getState();
    }

    @ApiOperation({summary:"Crear un nuevo pedido"})
    @ApiBody({type:Order, description:'Revisar la documentación del dto Order'})
    @Post()
    async createOrder(@Body() order:Order){
        return await this.orderService.createOrder(order);
    }

    @ApiOperation({summary:"Crear un nuevo estado de pedido"})
    @ApiBody({type:String, description:'Revisar la documentación del dto Order'})
    @Post('/state')
    async createState(@Body('state') state: string){
        return await this.orderService.createState(state);
    }

    @ApiOperation({summary:"Modificar un pedido"})
    @ApiBody({type:PartialOrder, description:'Revisar la documentación del dto Order'})
    @ApiParam({name:'id', description:"El serial id del pedido", example:1, type:String})
    @Patch('/:id')
    async updateOrder(@Body() order: PartialOrder, @Param('id') id: string){
        return await this.orderService.updateOrder(order, +id);
    }

    @ApiOperation({summary:"Eliminar un pedido"})
    @ApiParam({name:'id', description:"El serial id del pedido", example:1, type:String})
    @Delete('/:id')
    async deleteOrder(@Param('id') id:string){
        return await this.orderService.deleteOrder(+id);
    }

    @ApiOperation({summary:"Eliminar un estado de pedido"})
    @ApiParam({name:'id', description:"El serial id del estado de pedido", example:1, type:String})
    @Delete('/state/:id')
    async deleteState(@Param('id') id:string){
        return await this.orderService.deleteState(+id);
    }
}
