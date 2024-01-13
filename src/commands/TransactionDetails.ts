import { CommandName, CommandRequest, CommandResponse } from '@project/command';

/**
 * Получить копию слип-чека
 */
export type TransactionDetailsCommandRequest = CommandRequest & {
    Command: CommandName.TRANSACTION_DETAILS;

    /**
     * ИНН для поиска. Если "" то ищется только по NumDevice,
     * Если NumDevice = 0 а InnKkm заполнено то ККМ ищется только по InnKkm
     */
    InnKkm?: string;

    /**
     * Номер Карты / Данные карты - если карта считывается устройством то не заполняется
     *
     * @todo возможно другой тип данных
     */
    CardNumber: string;

    /**
     * Сумма оплаты
     */
    Amount: number;

    /**
     * Номер чека
     *
     * @example TEST-01
     */
    ReceiptNumber: string;

    /**
     * Уникальный код транзакции RRN который был получен при блокировки суммы на счете карты
     */
    RRNCode: string;

    /**
     * Код авторизации транзакции который был получен при блокировки суммы на счете карты
     */
    AuthorizationCode: string;
};

// TODO: не знаю что там возвращается
export type TransactionDetailsCommandResponse = CommandResponse & {
    Command: CommandName.TRANSACTION_DETAILS;
};
