import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Получить вес
 */
export type GetWeightCommandRequest = CommandRequest<'GetWeight'>;

export type GetWeightCommandResponse = CommandResponse<'GetWeight'> & {
    Weight: number;
};
