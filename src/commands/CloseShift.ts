import { CommandName, CommandRequest, CommandResponse, TaxVariant } from '@project/command';

/**
 * Закрыть смену
 */
export type CloseShiftCommandRequest = CommandRequest & {
    Command: CommandName.CLOSE_SHIFT;

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
     * @example 'Иванов И.И.';
     */
    CashierName: string;

    /**
     * ИНН продавца тег ОФД 1203
     *
     * @example '430601071197'
     */
    CashierVATIN: string;

    /**
     * Не печатать чек на бумагу
     */
    NotPrint?: boolean;

    /**
     * Id устройства. Строка. Если = "" то первое не блокированное на сервере
     */
    IdDevice?: string;
};

export type CloseShiftCommandResponse = CommandResponse & {
    Command: CommandName.CLOSE_SHIFT;

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
};
