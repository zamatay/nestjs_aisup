import {ApiProperty} from "@nestjs/swagger"
import {Column} from "typeorm"
import {SexDto} from "./SexDto";

export class ClientDto{
    @ApiProperty({description: "ID", required: false})
    @Column({type: Number})
    public ID: Number;

    @ApiProperty({description: "Наименование", required: false})
    @Column({type: String})
    public Name: string;

    @ApiProperty({description: "ИНН", required: false})
    @Column({type: String})
    public INN: string;

    @ApiProperty({description: "Тип контрагента", required: false})
    @Column({type: Number})
    public ClientType_id: Number;

    @ApiProperty({description: "Телефон", required: false})
    @Column({type: String})
    public Phone: string;

    @ApiProperty({description: "Пол", required: false})
    @Column({type: Number})
    public Sex_id: SexDto;
}
