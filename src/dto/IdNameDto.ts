import {ApiProperty} from "@nestjs/swagger";
import {Column} from "typeorm";
import {IdDto} from "./IdDto";

export class IdNameDto extends IdDto{
    @ApiProperty({description: "Наименование", required: false})
    public Name: string;
}