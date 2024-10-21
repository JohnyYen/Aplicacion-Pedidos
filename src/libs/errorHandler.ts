import { HttpException } from "@nestjs/common";

export class errorHandler{
    private error : Error;
    constructor(error:Error){
        this.error = error;
    }

    throw(){
        let message;
        let code;


        throw new HttpException(message, code);
    }
}