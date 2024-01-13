import { CommandName, CommandRequest, CommandResponse } from '@project/command';

/**
 * Очистить экран покупателя
 */
export type ClearCustomerDisplayCommandRequest = CommandRequest & {
    Command: CommandName.CLEAR_CUSTOMER_DISPLAY;
};

export type ClearCustomerDisplayCommandResponse = CommandResponse & {
    Command: CommandName.CLEAR_CUSTOMER_DISPLAY;
};
