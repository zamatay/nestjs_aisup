import {Column, Entity, PrimaryColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

@Entity("Clients")
export class ClientEntity {

    @PrimaryColumn()
    id: number;

    @ApiProperty({description: "Наименование", required: false})
    @Column('varchar')
    public Name: string;

    @ApiProperty({description: "ИНН", required: false})
    @Column('varchar')
    public INN: string;

    @ApiProperty({description: "Тип контрагента", required: false})
    @Column('int')
    public ClientType_id: Number;

    @ApiProperty({description: "Телефон", required: false})
    @Column('varchar')
    public phone: string;

    @ApiProperty({description: "Телефон рабочий", required: false})
    @Column('varchar')
    public PhoneWork: string;

    // @OneToOne(type=>SexEntity)
    // @JoinColumn()
    // @ApiProperty({description: "Пол", required: false})
    // @Column('Sex_id')
    // public Sex_id: SexEntity;
}
