import { Injectable } from '@nestjs/common';
import {Connection} from "typeorm";

@Injectable()
export class TaskService {

    // @ts-ignore
    constructor(private connect: Connection) {
    }

    async getTask(){
        const tasks = await this.connect
            .createQueryBuilder()
            .select()
            .from('_users', 'u')
            .limit(10)
            .getRawMany();
        return tasks;
    }
}
