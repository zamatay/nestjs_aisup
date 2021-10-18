import {Column, Entity, OneToOne, PrimaryColumn} from "typeorm";
import {IdEntity} from "./Id.entity"
import {JoinColumn} from "typeorm/browser";
import {ApiProperty} from "@nestjs/swagger";

@Entity("OK_SEX")
export class SexEntity{
    @PrimaryColumn()
    id: number;

    @ApiProperty({description: "Пол", required: true})
    @Column('varchar')
    public name: string;
}
