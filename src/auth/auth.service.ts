import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterUser } from './dto/register.dto';
import { LoginUser } from './dto/login.dto';
import {hash, compare} from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private prisma:PrismaService, private jwtService:JwtService){}

    async register(user : RegisterUser){
        const {email, password} = user;
        // const userFind = await this.prisma.user.findFirst({where:{email}})
        // if(userFind)
        //     throw new HttpException('EMAIL_EXIST', 401);

        const toHast = await hash(password, 10);
        user = {...user, password:toHast.toString()};
        
        return await this.prisma.user.create({data:user});
    }

    async login(user : LoginUser){
        const {email, user_name, password} = user;
        const userFind = await this.prisma.user.findFirst({where:{email, user_name}})
        if(!userFind)
            throw new HttpException('USER_NOT_FOUND', 403);

        const comparePassword = compare(password, userFind.password);
        if(!comparePassword)
            throw new HttpException('PASSWORD_INCORRECT', 401);

        const payload = {id:userFind.id_user, name:userFind.user_name};
        const token = this.jwtService.sign(payload);
        const data = {
            user: userFind,
            token
        }

        return data;
    }
}
