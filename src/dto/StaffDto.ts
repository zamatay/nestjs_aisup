import {IdDto} from "./IdDto";
import {ApiProperty} from "@nestjs/swagger";
import {Column} from "typeorm";

export class StaffDto extends IdDto{

    @ApiProperty({description: "Фамилия", required: false})
    public Family: string;

    @ApiProperty({description: "Имя", required: false})
    public FirstName: string;

    @ApiProperty({description: "Отчество", required: false})
    public LastName: string;
}