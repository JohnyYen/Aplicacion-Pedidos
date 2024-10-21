import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from './dto/product.dto';
import { PartialProduct } from './dto/partialProduct.dto';
import { ErrorHandler } from '@nestjs/common/interfaces';

@Injectable()
export class ProductService {
    constructor(private prisma : PrismaService){}

    async getProducts(){
        return await this.prisma.product.findMany({include:{category:true}})
    }

    async getCategories(){
        return await this.prisma.category.findMany();
    }

    async createProduct(product : Product){
        const {expire_date_string, id_cat, name_prod, in_stock} = product;
        const newDate : Date = new Date(expire_date_string);
       // product = {...product, expire_date:newDate};
        return await this.prisma.product.create({data:{
            expire_date:newDate,
            name_prod,
            in_stock,
            id_cat,
        }});
    }

    async createCategory(category: string){
        return await this.prisma.category.create({data:{name_cat:category}})
    }

    async updateProduct(product : PartialProduct, id:number){
        const {expire_date_string,sold_unit, name_prod, in_stock} = product;

        const newDate : Date = new Date(expire_date_string);
        
        return await this.prisma.product.update({data:{
            expire_date:newDate,
            in_stock,
            name_prod,
            sold_unit
        }, where:{id_product:id}});
    }

    async deleteProduct(id:number){
        return await this.prisma.product.delete({where:{id_product:id}});
    }

    async deleteCategory(id:number){
       try {
        return await this.prisma.category.delete({where:{id_cat:id}});
       } catch (error) {
        console.log(error)
       }
    }
}
