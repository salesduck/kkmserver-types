import { CommandName, CommandRequest, CommandResponse, TaxVariant } from '@project/command';

/**
 * Печать чека внесения
 */
export type DepositingCashCommandRequest = CommandRequest & {
    Command: CommandName.DEPOSITING_CASH;

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
     * Продавец, тег ОФД 1021
     *
     * @example 'Kазакова Н.А.'
     */
    CashierName: string;

    /**
     * ИНН продавца тег ОФД 1203
     *
     * @example '430601071197'
     */
    CashierVATIN: string;

    /**
     * Сумма внесения наличных
     */
    Amount: number;
};

export type DepositingCashCommandResponse = CommandResponse & {
    Command: CommandName.DEPOSITING_CASH;
};
