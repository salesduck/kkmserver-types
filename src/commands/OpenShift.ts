import { CommandRequest, CommandResponse } from '@project/command';

import { GetDataKKTInfo } from './GetDataKKT';

/**
 * Открыть смену
 */
export type OpenShiftCommandRequest = CommandRequest<'OpenShift'> & {
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

export type OpenShiftCommandResponse = CommandResponse<'OpenShift'> & {
    /**
     * Номер документа
     */
    CheckNumber: number;

    /**
     * Номер смены
     */
    SessionNumber: number;

    // "https://check.ofd.ru/rec/1615012884/0000000007015434/9999078902003809/432/0993937322",
    URL: string;

    /**
     * @example 't=20170904T141100&fn=9999078900002287&i=108&fp=605445600'
     */
    QRCode: string;

    Info: GetDataKKTInfo;
};
