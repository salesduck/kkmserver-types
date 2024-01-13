import { CommandName, CommandRequest, CommandResponse, TaxVariant } from '@project/command';

/**
 * Открыть денежный ящик
 */
export type OpenCashDrawerCommandRequest = CommandRequest & {
    Command: CommandName.OPEN_CASH_DRAWER;

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

export type OpenCashDrawerCommandResponse = CommandResponse & {
    Command: CommandName.OPEN_CASH_DRAWER;
};
