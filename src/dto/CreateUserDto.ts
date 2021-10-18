import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({description: "Логин", required: true})
    public login: string;

    @ApiProperty({description: "Пароль", required: true})
    public Password: string;
}

