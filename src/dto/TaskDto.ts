import {ApiProperty} from "@nestjs/swagger"
import {Column} from "typeorm"
import {StaffDto} from "./StaffDto";
import {UrgencyDto} from "./UrgencyDto";
import {ClientDto} from "./ClientDto";

export class TaskDto {

    @ApiProperty({description: "Фактическая дата начала", required: false})
    public FactDateFrom: Date;

    @ApiProperty({description: "Исполнить до", required: false})
    public PlanDateTo: Date;

    @ApiProperty({description: "Фактическая дата окончания", required: false})
    public FactDateTo: Date;

    @ApiProperty({description: "Задание", required: false})
    public Task: string;

    @ApiProperty({description: "Получатель", required: false})
    public Receiver: StaffDto;

    @ApiProperty({description: "Важность выполнения", required: false})
    public Urgency: UrgencyDto;

    @ApiProperty({description: "Отправитель", required: false})
    public Sender: StaffDto;

    @ApiProperty({description: "Номер", required: false})
    public Number: string;

    @ApiProperty({description: "Создал", required: false})
    public PersonalCreator: StaffDto;

    @ApiProperty({description: "Отклонено", required: false})
    public Disabled: Boolean;

    @ApiProperty({description: "Подтвердить", required: false})
    public Confirmation: Boolean;

    @ApiProperty({description: "Тема", required: false})
    public Theme: String;

    @ApiProperty({description: "Процент выполнения", required: false})
    public Progress: Number;

    @ApiProperty({description: "Контрагент", required: false})
    public Client: ClientDto;

    @ApiProperty({description: "Дата начала", required: false})
    public PlanDateFrom: Date;
}
