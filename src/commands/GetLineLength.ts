import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Получить ширину строки чека в символах
 */
export type GetLineLengthCommandRequest = CommandRequest<'GetLineLength'>;

export type GetLineLengthCommandResponse = CommandResponse<'GetLineLength'> & {
    LineLength: number;
};
