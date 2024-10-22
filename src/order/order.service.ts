import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PartialOrder } from './dto/partialOrder.dto';
import { Order } from './dto/order.dto';
import { ErrorHandler } from 'src/libs/errorHandler';

@Injectable()
export class OrderService {
    constructor(private prisma : PrismaService){}

    async getOrders(){
        return this.prisma.order.findMany({include:{state:true}});
    }

    async getState(){
        return await this.prisma.state.findMany();
    }

    async createOrder(order : Order){
        const {arrive_date_string,begin_date_string,distance,id_state,name_op,ubication} = order;
        const arrive_date : Date = new Date(arrive_date_string);
        const begin_date : Date = new Date(begin_date_string);
       try {
        return await this.prisma.order.create({data: {
            arrive_date,
            begin_date,
            name_op,
            ubication,
            id_state,
            distance
        }})
       } catch (error) {
        throw new ErrorHandler(error).throw();
       }
    }

    async createState(state: string){
        try {
            return await this.prisma.state.create({data:{state}});
        } catch (error) {
            throw new ErrorHandler(error).throw();
        }
    }

    async updateOrder(order : PartialOrder, id : number){
        const {arrive_date_string,id_state,name_op,ubication} = order;
        const arrive_date : Date = new Date(arrive_date_string);
        try {
            return await this.prisma.order.update({data: {
                arrive_date,
                name_op,
                ubication,
                id_state
            }, where:{id_order:id}})

        } catch (error) {
            throw new ErrorHandler(error).throw();
        }
    }

    async deleteOrder(id: number){
       try {
        return await this.prisma.order.delete({where:{id_order:id}});
       } catch (error) {
        throw new ErrorHandler(error).throw();
       }
    }

    async deleteState(id : number){
       try{
        return await this.prisma.state.delete({where:{id_state:id}});
       } catch(error) {
        throw new ErrorHandler(error).throw();
       }
    }
}
