import { CommandName } from '@project/command';

export type GetCommandRequest = {
    Command: CommandName.GET_COMMAND;
    /**
     * токен(имя клиента) для облачного сервера
     */
    Token: string;
    /**
     * массив результатов выполнения предыдущих команд. В данном случае пустой.
     */
    ListRezult: any[];
};

export type GetCommandResponse = {
    /**
     * массив команд
     */
    ListCommand: any[];
};
