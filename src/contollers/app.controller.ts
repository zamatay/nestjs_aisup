import {Controller, Get} from '@nestjs/common';
import {AppService} from '../services/app.service';
import {TaskService} from "../services/task/task.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {TaskEntity} from "../models/Task.entity";

@ApiTags('Задачи')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly taskService: TaskService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @ApiOperation({summary: 'Получение задач'})
  @ApiResponse({status: 200, type: [TaskEntity]})
  @Get('/tasks')
  async getTasks() {
    return await this.taskService.getTask();
  }
}
