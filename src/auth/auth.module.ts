import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtStrategy } from './jwtStrategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService,jwtStrategy],
  imports: [PrismaModule, JwtModule.register({
    secret: 'thisSecretOfTest',
    signOptions: {expiresIn: '20h'}
  }) ],
})
export class AuthModule {}
