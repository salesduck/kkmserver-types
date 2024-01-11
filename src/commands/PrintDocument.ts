import { CommandName, CommandRequest, CommandResponse, CheckString } from '@project/command';

export type PrintDocumentCommandRequest = CommandRequest & {
    Command: CommandName.PRINT_DOCUMENT;
    CheckStrings: CheckString[];
};

export type PrintDocumentCommandResponse = CommandResponse & {
    Command: CommandName.PRINT_DOCUMENT;
};
