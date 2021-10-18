import { Injectable } from '@nestjs/common';
import {UserEntity} from "../../models/User.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {StaffEntity} from "../../models/Staff.entity";

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {
    }

    async getUserByEmail(email: string): Promise<UserEntity[]> {
        return await this.userRepository.find({
            relations: ['StaffEntity'],
            where: {StaffEntity: {email}
            },
        });
    }
}
