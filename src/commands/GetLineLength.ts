import { CommandName, CommandRequest, CommandResponse, TaxVariant } from '@project/command';

/**
 * Получить ширину строки чека в символах
 */
export type GetLineLengthCommandRequest = CommandRequest & {
    Command: CommandName.GET_LINE_LENGTH;

    /**
     * ИНН для поиска. Если "" то ищется только по NumDevice,
     * Если NumDevice = 0 а InnKkm заполнено то ККМ ищется только по InnKkm
     */
    InnKkm?: string;

    /**
     * Система налогообложения (СНО) для поиска ККТ, Можно не указывать, или = "" - любое СНО
     */
    TaxVariant?: TaxVariant;
};

// TODO: не знаю что возвращается
export type GetLineLengthCommandResponse = CommandResponse & {
    Command: CommandName.GET_LINE_LENGTH;
};
