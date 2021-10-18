import {Body, Controller, Post} from '@nestjs/common';
import {ApiProperty, ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "../../dto/CreateUserDto";
import {AuthService} from "./auth.service";
import {Connection} from "typeorm";


@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(
            private authService: AuthService
        ) {
    }

    @Post('/login')
    login(@Body() userDto: CreateUserDto){
        return this.authService.login(userDto);
    }

    @Post('/register')
    register(@Body() userDto: CreateUserDto){
        return this.authService.register(userDto);
    }
}
