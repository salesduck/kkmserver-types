import { CommandName, CommandRequest, CommandResponse, TaxVariant } from '@project/command';

/**
 * Печать чека изъятия
 */
export type PaymentCashCommandRequest = CommandRequest & {
    Command: CommandName.PAYMENT_CASH;

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
     * Сумма изъятия наличных
     */
    Amount: number;
};

export type PaymentCashCommandResponse = CommandResponse & {
    Command: CommandName.PAYMENT_CASH;
};
