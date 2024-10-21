import { ApiProperty } from "@nestjs/swagger"
import { IsDateString, IsInt, IsString, Min } from "class-validator"

export class Product {

    @ApiProperty({type:String, description:"Nombre del Producto", example: "Laptop"})
    @IsString()
    name_prod:string

    @ApiProperty({type:Number, description:"Cantidad del producto en los almacenes", example: 10, minimum:1})
    @IsInt()
    @Min(1)
    in_stock:number

    @ApiProperty({type:String, description:"String de la fecha de expiración del producto", example: "10/22/2024", pattern: 'MM/DD/YYYY'})
    @IsDateString()
    expire_date_string:string

    @ApiProperty({type:Number, description:"El id de la categoria", example: "10", minimum:0})
    @IsInt()
    @Min(0)
    id_cat:number
}