import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterUser } from './dto/register.dto';
import { LoginUser } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @ApiOperation({summary:"Registrar un nuevo usuario"})
    @ApiBody({type:RegisterUser, description: "Revisar la documentación del dto RegisterUser"})
    @Post('/register')
    async register(@Body() registerUser: RegisterUser){
        return await this.authService.register(registerUser);
    }

    @ApiOperation({summary:"Loguear un usuario"})
    @ApiBody({type:LoginUser, description: "Revisar la documentación del dto LoginUser"})
    @Post('/login')
    async login(@Body() loginUser: LoginUser){
        return await this.authService.login(loginUser);
    }
}
