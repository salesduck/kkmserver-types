import { CommandRequest, CommandResponse } from '@project/command';

import { GetDataKKTInfo } from './GetDataKKT';

/**
 * Закрыть смену
 */
export type CloseShiftCommandRequest = CommandRequest<'CloseShift'> & {
    /**
     * Продавец, тег ОФД 1021
     *
     * @example 'Иванов И.И.';
     */
    CashierName?: string;

    /**
     * ИНН продавца тег ОФД 1203
     *
     * @example '430601071197'
     */
    CashierVATIN?: string;

    /**
     * Не печатать чек на бумагу
     */
    NotPrint?: boolean;

    /**
     * Id устройства. Строка. Если = "" то первое не блокированное на сервере
     */
    IdDevice?: string;
};

export type CloseShiftCommandResponse = CommandResponse<'CloseShift'> & {
    /**
     * Номер документа
     */
    CheckNumber: number;

    /**
     * Номер смены
     */
    SessionNumber: number;

    /**
     * @example 't=20170904T141100&fn=9999078900002287&i=108&fp=605445600'
     */
    QRCode: string;

    /**
     * @example "https://check.ofd.ru/rec/1615012884/0000000007015434/9999078902003809/433/2132578533"
     */
    URL: string;

    Info?: GetDataKKTInfo;
};
