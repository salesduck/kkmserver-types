import { CommandName, CommandRequest, CommandResponse } from '@project/command';

/**
 * С помощью данной команды KkmServer запрашивает данные от
 * удаленного сервера обратных вызовов
 */
export type GetCommandRequest = {
    Command: CommandName.GET_COMMAND;
    /**
     * Токен(имя клиента) для облачного сервера
     */
    Token: string;

    /**
     * Массив результатов выполнения предыдущих команд
     */
    ListRezult: CommandResponse[];
};

export type GetCommandResponse = {
    /**
     * Массив команд
     */
    ListCommand: CommandRequest[];
};
