import { CommandName, CommandRequest, CommandResponse, TaxVariant } from '@project/command';

export type GetDataCheckCommandRequest = CommandRequest & {
    Command: CommandName.GET_DATA_CHECK;

    /**
     * ИНН для поиска. Если "" то ищется только по NumDevice,
     * Если NumDevice = 0 а InnKkm заполнено то ККМ ищется только по InnKkm
     */
    InnKkm?: string;

    /**
     * Система налогообложения (СНО) для поиска ККТ, Можно не указывать, или = "" - любое СНО
     */
    TaxVariant?: TaxVariant;

    /**
     * Фискальный номер (ФД) чека. Если 0 - то последний чек
     */
    FiscalNumber: number;

    /**
     * Количество копий документа (копии печатаются на ленте)
     */
    NumberCopies: number;
};

// TODO: не известно что возвращается
export type GetDataCheckCommandResponse = CommandResponse & {
    Command: CommandName.GET_DATA_CHECK;
};
