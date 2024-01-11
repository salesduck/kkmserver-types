import { CommandName, CommandRequest, CommandResponse } from '@project/command';

export type PrintLineLengthCommandRequest = CommandRequest & {
    Command: CommandName.PRINT_LINE_LENGTH;
};

//TODO: хер знает какой ответ
export type PrintLineLengthCommandResponse = CommandResponse & {
    Command: CommandName.PRINT_LINE_LENGTH;
};
