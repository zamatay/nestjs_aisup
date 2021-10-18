import {StaffEntity} from "../models/Staff.entity";
import {TaskEntity} from "../models/Task.entity";
import {ClientEntity} from "../models/Client.entity";
import {SexEntity} from "../models/Sex.entity";
import { join } from "path";
const entityDir = join(__dirname, '..', '**', '*.entity.{ts,js}')
console.log(entityDir);
const isolation = require('tedious').ISOLATION_LEVEL.READ_UNCOMMITTED;
console.log(isolation);
export const db = {
    type: 'mssql',
    host: '192.168.0.12',
    username: 'sa',
    password: 'ggyyndk',
    database: 'vkb_test1',
    options: {
        encrypt: false,
        enableArithAbort: true,
        isolation: isolation,
        connectionIsolationLevel: isolation,
    },
    pool: {
        max: 50
    },
    autoLoadEntities: true,
    entities: [entityDir],
    //entities: ["dist/models/*.ts"],
    cli: {
        entitiesDir: "src/models",
    }
}
//"models/*.entity{.ts,.js}"