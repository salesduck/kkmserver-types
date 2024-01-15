import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Получить опции дисплея покупателя
 */
export type OptionsCustomerDisplayCommandRequest = CommandRequest<'OptionsCustomerDisplay'>;

export type OptionsCustomerDisplayCommandResponse = CommandResponse<'OptionsCustomerDisplay'> & {
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
