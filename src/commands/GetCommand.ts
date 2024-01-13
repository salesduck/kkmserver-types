import { CommandName, CommandRequest } from '@project/command';

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
     * Массив результатов выполнения предыдущих команд. В данном случае пустой.
     */
    ListRezult: any[];
};

export type GetCommandResponse = {
    /**
     * массив команд
     */
    ListCommand: CommandRequest[];
};
