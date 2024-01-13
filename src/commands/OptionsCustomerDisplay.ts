import { CommandName, CommandRequest, CommandResponse } from '@project/command';

/**
 * Получить опции дисплея покупателя
 */
export type OptionsCustomerDisplayCommandRequest = CommandRequest & {
    Command: CommandName.OPTIONS_CUSTOMER_DISPLAY;
};

export type OptionsCustomerDisplayCommandResponse = CommandResponse & {
    Command: CommandName.OPTIONS_CUSTOMER_DISPLAY;

    /**
     * Есть вывод верхней строки
     */
    IsTopString: boolean;

    /**
     * Есть вывод нижней строки
     */
    IsBottomString: boolean;

    /**
     * Есть вывод QR кода
     */
    IsCodeQR: boolean;
};
