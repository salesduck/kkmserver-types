import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Печать чека внесения
 */
export type DepositingCashCommandRequest = CommandRequest<'DepositingCash'> & {
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

export type DepositingCashCommandResponse = CommandResponse<'DepositingCash'>;
