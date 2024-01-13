import { CommandName, CommandRequest, CommandResponse } from '@project/command';

/**
 * Получить вес
 */
export type GetWeightCommandRequest = CommandRequest & {
    Command: CommandName.GET_WEIGHT;
};

export type GetWeightCommandResponse = CommandResponse & {
    Weight: number;
};
