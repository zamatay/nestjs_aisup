import {Module} from "@nestjs/common";
import {AppController} from "../contollers/app.controller";
import {AppService} from "../services/app.service";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {SysService} from "../services/sys.service";
import {TaskService} from "../services/task/task.service";
import {Connection} from "typeorm";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        TypeOrmModule.forRoot(require('../config/db').db)
        //TypeOrmModule.forRoot()
    ],
    controllers: [AppController],
    providers: [AppService, SysService, TaskService]
})
export class AppModule {
    constructor(private connection: Connection) {}
}