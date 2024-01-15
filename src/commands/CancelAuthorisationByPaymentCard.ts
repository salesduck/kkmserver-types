import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Разблокировать сумму на счете карты
 */
export type CancelAuthorisationByPaymentCardCommandRequest = CommandRequest<'CancelAuthorisationByPaymentCard'> & {
    /**
     * Сумма оплаты
     */
    Amount: number;

    /**
     * Полный банковский идентификатор транзакции, полученный в AuthorisationByPaymentCard
     */
    UniversalID: string;
};

export type CancelAuthorisationByPaymentCardCommandResponse = CommandResponse<'CancelAuthorisationByPaymentCard'> & {
    /**
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
