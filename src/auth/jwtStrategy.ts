import { PassportStrategy } from "@nestjs/passport";
import {Strategy, ExtractJwt} from 'passport-jwt'

export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
            ignoreExpiration: false,
            secretOrKey: 'thisSecretOfTest',
            algorithm: ['RS256']
        })
    }

    async validate(payload : any){
        return {id:payload.id, name:payload.name}
    }
}