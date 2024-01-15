import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Очистить экран покупателя
 */
export type ClearCustomerDisplayCommandRequest = CommandRequest<'ClearCustomerDisplay'>;

export type ClearCustomerDisplayCommandResponse = CommandResponse<'ClearCustomerDisplay'>;
