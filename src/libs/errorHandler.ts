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

        // meta: { modelName: 'User', target: [ 'phone_number' ] }
        if(code === 'P2003'){
            message = 'RELATION_KEY_NOT_FOUND';
            codeHttp = '401';
        }
        else if(code === 'P2002'){
            codeHttp = '401';
            switch (this.error.meta.target[0]) {
                case 'phone_number':
                    message = 'THIS_PHONE_NUMBER_EXIST';
                    break;
                case 'user_name':
                    message = 'THIS_USER_EXIST';
                    break;

                case 'email':
                    message = 'THIS_EMAIL_EXIST';
                    break;

                case 'state': 
                    message = 'THIS_STATE_EXIST';
                    break;
                    
                case 'name_cat': 
                    message = 'THIS_CATEGORY_EXIST';
                    break;        

                 case 'name_prod': 
                    message = 'THIS_PRODUCT_EXIST';
                    break;  
                    
                default:
                    break;
            }
        }

        else if(code === 'P2025'){
            message = 'ELEMENT_NOT_FOUND';
            codeHttp = '401';
        }

        throw new HttpException(message, codeHttp);
    }
}