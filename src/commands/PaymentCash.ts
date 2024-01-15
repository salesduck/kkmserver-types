import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Печать чека изъятия
 */
export type PaymentCashCommandRequest = CommandRequest<'PaymentCash'> & {
    /**
     * Продавец, тег ОФД 1021
     *
     * @example 'Kазакова Н.А.'
     */
    CashierName?: string;

    /**
     * ИНН продавца тег ОФД 1203
     *
     * @example '430601071197'
     */
    CashierVATIN?: string;

    /**
     * Сумма изъятия наличных
     */
    Amount: number;
};

export type PaymentCashCommandResponse = CommandResponse<'PaymentCash'>;
