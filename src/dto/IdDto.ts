import {ApiProperty} from "@nestjs/swagger";
import {Column} from "typeorm";

export class IdDto{
    @ApiProperty({description: "ID", required: false})
    public ID: Number;
}