import { OmitType, PartialType } from "@nestjs/swagger";
import { RegisterUser } from "./register.dto";


export class LoginUser extends PartialType(OmitType(RegisterUser, ['phone_number'])){}