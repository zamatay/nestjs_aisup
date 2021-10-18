import {Entity, PrimaryColumn} from "typeorm";

@Entity()
export class IdEntity {
    @PrimaryColumn()
    id: number;
}