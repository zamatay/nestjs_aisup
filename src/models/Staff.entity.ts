import {Column, Entity, OneToOne, PrimaryColumn} from "typeorm";
import {JoinColumn} from "typeorm/browser";
import {ApiProperty} from "@nestjs/swagger";
import {SexEntity} from "./Sex.entity";

@Entity("OK_STAFF")
export class StaffEntity{

    @PrimaryColumn()
    id: number;

    @ApiProperty({description: "Имя", required: true})
    @Column('')
    public firstName: string;

    @ApiProperty({description: "Отчество", required: false})
    @Column('')
    public lastName: string;

     @OneToOne(type=>SexEntity)
     @ApiProperty({description: "Пол", required: false})
     @Column('int')
     public Sex_ID: SexEntity;

    @ApiProperty({description: "Фамилия", required: true})
    @Column('')
    public Family: string;

    @ApiProperty({description: "Телефон", required: false})
    @Column('')
    public phone: string;

    @ApiProperty({description: "Email", required: false})
    @Column('')
    public EMail: string;
}