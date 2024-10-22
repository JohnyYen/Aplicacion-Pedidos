import { HttpException } from "@nestjs/common";

export class ErrorHandler{
    private error;
    constructor(error){
        this.error = error;
    }

    throw(){
        const code = this.error.code; 
        let message;
        let codeHttp;
        console.log(this.error);
        if(code === 'P2003'){
            message = 'RELATION_KEY_NOT_FOUND';
            codeHttp = '401';
        }

        if(code === 'P2025'){
            message = 'ELEMENT_NOT_FOUND';
            codeHttp = '401';
        }

        throw new HttpException(message, codeHttp);
    }
}