import { CommandName, CommandStatus } from '@project/command';

export type ListCommandRequest = {
    Command: CommandName.LIST;

    /**
     * Отбор по номеру устройства. Число. Если 0 или не указано то с любым номером
     */
    NumDevice?: number;

    /*
     * Отбор по ИНН. Строка. Если "" или не указано то первое не блокированное на сервере
     */
    InnKkm?: string;

    /*
     * Отбор активных. Булево. Если null или не указано то активные и не активные
     */
    Active?: boolean;

    /*
     * Отбор выключенных-включенных
     */
    OnOff?: boolean;

    /**
     * Отбор наличию ошибок ОФВ. Булево. Если null или не указано то с ошибками и без
     */
    OFD_Error?: boolean;

    /**
     * Все у которых дата не переданного док. в ОФД меньше указанной. Дата-время. Если null или не указано то любое
     */
    OFD_DateErrorDoc?: string;

    /**
     * Все у которых дата окончания работы ФН меньше указанной. Дата-время. Если null или не указано то любое
     */
    FN_DateEnd?: string;

    /**
     * Все у которых заканчивается память ФН; Булево. Если null или не указано то все
     */
    FN_MemOverflowl?: boolean;

    /**
     * Фискализованные или нет ФН; Булево. Если null или не указано то все
     */
    FN_IsFiscal?: boolean;
};

export type ListUnit = {
    NumDevice: number;
    IdDevice: string;
    OnOf: boolean;
    Active: boolean;
    TypeDevice: string;
    IdTypeDevice: string;
    IP: string;
    NameDevice: string;
    KktNumber: string;
    INN: string;
    TaxVariant: string;
    AddDate: string;
    OFD_Error: string;
    OFD_NumErrorDoc: number;
    OFD_DateErrorDoc: string;
    FN_DateEnd: string;
    FN_MemOverflowl: boolean;
    FN_IsFiscal: boolean;
    PaperOver: boolean;
};

export type ListCommandResponse = {
    Command: CommandName.LIST;
    ListUnit: ListUnit[];
    Error: string;
    Status: CommandStatus;
};
