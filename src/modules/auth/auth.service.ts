import {Body, Injectable, Post} from '@nestjs/common';
import {CreateUserDto} from "../../dto/CreateUserDto";
import {JwtService} from "@nestjs/jwt";
import {Connection} from "typeorm";
import {UserEntity} from "../../models/User.entity";
import {UserService} from "../../services/user/user.service";

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
        private connect: Connection,
        private userService: UserService) {
    }

    async login(userDto: CreateUserDto){

    }

    async register(userDto: CreateUserDto){

    }

    async getUserByName(name: string): Promise<UserEntity[]>{
        return await this.userService.getUserByEmail(name);
    }

}
