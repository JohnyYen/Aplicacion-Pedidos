import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator"

export class RegisterUser{

    @ApiProperty({type:String, description: "Nombre del usuario", example: "John"})
    @IsString()
    user_name:string

    @ApiProperty({type:String, description: "Correo electronico del usuario", example: "john@gmail.com"})
    @IsEmail()
    email:string 

    @ApiProperty({type:String, description: "Contraseña del usuario", example: "1234Asd*"})
    @IsStrongPassword()
    password:string

    @ApiProperty({type:String, description: "Nombre de telefono del usuario", example: "55002025"})
    @IsPhoneNumber()
    phone_number:string
}