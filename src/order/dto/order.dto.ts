import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsDateString, IsDecimal, IsInt, IsString } from "class-validator"

export class Order {

    @ApiProperty({type:String, description:"Ubicación del Pedido", example: "New York"})
    @IsString()
    ubication:string

    @ApiProperty({type:String, description:"Nombre del operador encargado del pedido", example: "Juan Carlo Batista"})
    @IsString()
    name_op:string

    @ApiProperty({type:Number, description:"Distancia de la entrega del pedido", example: 10.7})
    @IsDecimal()
    distance:number

    @ApiProperty({type:String, description:"Fecha de inicio para la entrega del producto", example: "10/18/2024", pattern: 'MM/DD/YYYY'})
    @IsDateString()
    begin_date_string:string

    @ApiProperty({type:String, description:"Fecha de llegada del producto", example: "10/22/2024", pattern: 'MM/DD/YYYY'})
    @IsDateString()
    arrive_date_string:string

    @ApiProperty({type:Number, description:"Estado del Pedido, solo se muestra su id", example: 1})
    @IsInt()
    id_state:number
}