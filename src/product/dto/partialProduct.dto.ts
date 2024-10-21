import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { Product } from "./product.dto";
import { Min } from "class-validator";

export class PartialProduct extends PartialType(OmitType(Product, ['id_cat'])){

    @ApiProperty({type:Number, description:"La cantidad de productos que se vendieron", example:10, minimum:0})
    @Min(0)
    sold_unit:number
}