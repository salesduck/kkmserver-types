import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Оплатить платежной картой
 */
export type PayByPaymentCardCommandRequest = CommandRequest<'PayByPaymentCard'> & {
    /**
     * Номер Карты / Данные карты - если карта считывается устройством то не заполняется
     */
    CardNumber?: string;

    /**
     * Сумма оплаты
     */
    Amount: number;

    /**
     * Номер чека
     * @example "TEST-01"
     */
    ReceiptNumber?: string;
};

export type PayByPaymentCardCommandResponse = CommandResponse<'PayByPaymentCard'> & {
    /**
     * СОХРАНИТЕ ЭТО ПОЛЕ! Понадобится для отмены или возврата по транзакции*
     *
     * @example 'CN:1254********6845;RN:26;RRN:5486265211;AC:783451264186418'
     */
    UniversalID: string;

    /**
     * Сумма оплаты
     */
    Amount: number;

    /**
     * Банковский чек
     *
     * @example '====================================\r\nОрганизация:ООО Тестовая организация\r\nИНН: 123456789012\r\nТерминал: 21094544\r\nМерчант: 781000055557\r\n------------------------------------\r\n ОПЛАТА \r\nКарта: Visa Credit\r\nНомер: 1254********6845\r\nСумма (руб): 1,02\r\n------------------------------------\r\nСтатус: Одобрено\r\nКод авторизации: 783451264186418\r\nНомер ссылки: 5486265211\r\nНомер чека: 26\r\n====================================\r\n';
     */
    Slip: string;
};
