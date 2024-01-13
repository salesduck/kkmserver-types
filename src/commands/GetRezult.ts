import { CommandName, CommandResponse } from '@project/command';

/**
 *  Проверка статуса ранее отданной команды
 *
 *  Эту команду надо вызывать тогда, когда ответ на команду равен Rezult.Status = 1 или 4
 */
export type GetRezultCommandRequest = {
    Command: CommandName.GET_REZULT;
    IdCommand: string;
};

export type GetRezultCommandResponse = CommandResponse;
