import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Вывести на экран покупателя
 */
export type OutputOnCustomerDisplayCommandRequest = CommandRequest<'OutputOnCustomerDisplay'> & {
    /**
     * Вывод верхней строки на дисплей
     *
     * @example Оплата заказа:
     * @todo возможно не обязательный?
     */
    TopString: string;

    /**
     * Вывод QR кода на дисплей
     *
     * @example https://kkmserver.ru
     * @todo возможно не обязательный?
     */
    CodeQR: string;

    /**
     * Вывод нижней строки на дисплей
     *
     * @example Сумма: 3000.00 руб
     * @todo возможно не обязательный?
     */
    BottomString: string;
};

export type OutputOnCustomerDisplayCommandResponse = CommandResponse<'OutputOnCustomerDisplay'>;
