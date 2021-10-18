import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {StaffEntity} from "./Staff.entity";

@Entity()
export class UserEntity{
    @PrimaryColumn()
    id: number;

    @ApiProperty({description: "Логин", required: false})
    @Column('varchar')
    public Login: string;

    @ApiProperty({description: "Администратор", required: false})
    @Column('bit')
    public IsAdmin: Boolean;

    @ManyToOne(type=>StaffEntity)
    @ApiProperty({description: "Персонал", required: false})
    @Column('int')
    public Staff_ID: StaffEntity;
}