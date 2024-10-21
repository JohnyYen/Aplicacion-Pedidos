import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PartialOrder } from './dto/partialOrder.dto';
import { Order } from './dto/order.dto';

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
        return await this.prisma.order.create({data: {
            arrive_date,
            begin_date,
            name_op,
            ubication,
            id_state,
            distance
        }})
    }

    async createState(state: string){
        return await this.prisma.state.create({data:{state}});
    }

    async updateOrder(order : PartialOrder, id : number){
        const {arrive_date_string,id_state,name_op,ubication} = order;
        const arrive_date : Date = new Date(arrive_date_string);
        return await this.prisma.order.update({data: {
            arrive_date,
            name_op,
            ubication,
            id_state
        }, where:{id_order:id}})
    }

    async deleteOrder(id: number){
        return await this.prisma.order.delete({where:{id_order:id}});
    }

    async deleteState(id : number){
        return await this.prisma.state.delete({where:{id_state:id}});
    }
}
