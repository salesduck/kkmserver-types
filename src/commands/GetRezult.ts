import { CommandResponse, CommandRequest } from '@project/command';

/**
 * Проверка статуса ранее отданной команды
 *
 * Эту команду надо вызывать тогда, когда ответ на команду равен Rezult.Status = 1 или 4
 */
export type GetRezultCommandRequest = CommandRequest<'GetRezult'> & {
    IdCommand: string;
};

export type GetRezultCommandResponse = CommandResponse<'GetRezult'>;
