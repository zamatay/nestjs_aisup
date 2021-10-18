import {Column, Entity, ManyToOne} from "typeorm";
import {IdEntity} from "./Id.entity"
import {ApiProperty} from "@nestjs/swagger";
import {StaffEntity} from "./Staff.entity";
import {ClientEntity} from "./Client.entity";

@Entity()
export class TaskEntity extends IdEntity{

    @ApiProperty({description: "Исполнить до", required: false})
    @Column('datetime')
    public PlanDateTo: Date;

    @ApiProperty({description: "Фактическая дата окончания", required: false})
    @Column('datetime')
    public FactDateTo: Date;

    @ApiProperty({description: "Задание", required: false})
    @Column('varchar', {length:-1})
    public task: string;

    @ManyToOne(type=>StaffEntity)
    @ApiProperty({description: "Получатель", required: false})
    @Column('int')
    public Receiver: StaffEntity;

    @ApiProperty({description: "Важность выполнения", required: false})
    @Column('int')
    public Urgency: Number;

    @ManyToOne(type=>StaffEntity)
    @ApiProperty({description: "Отправитель", required: false})
    @Column('int')
    public Sender: StaffEntity;

    @ApiProperty({description: "Корневой элемент", required: false})
    @Column('int')
    public RootParent: Number;

    @ApiProperty({description: "Номер", required: false})
    @Column('varchar')
    public Number: string;

    @ApiProperty({description: "Отклонено", required: false})
    @Column('bit')
    public Disabled: Boolean;

    @ApiProperty({description: "Подтвердить", required: false})
    @Column('bit')
    public Confirmation: Boolean;

    @ApiProperty({description: "Тема", required: false})
    @Column('varchar')
    public Theme: string;

    @ManyToOne(type=>ClientEntity)
    @ApiProperty({description: "Контрагент", required: false})
    @Column('int')
    public Client: ClientEntity;
}
