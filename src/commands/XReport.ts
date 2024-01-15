import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Печать X отчета
 */
export type XReportCommandRequest = CommandRequest<'XReport'> & {
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
};

export type XReportCommandResponse = CommandResponse<'XReport'>;
