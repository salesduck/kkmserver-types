import { CommandName, CommandRequest, CommandResponse, CheckString } from '@project/command';

/**
 * Печать чеков
 */
export type PrintDocumentCommandRequest = CommandRequest & {
    Command: CommandName.PRINT_DOCUMENT;

    /**
     * Строки чека
     */
    CheckStrings: CheckString[];
};

export type PrintDocumentCommandResponse = CommandResponse & {
    Command: CommandName.PRINT_DOCUMENT;
};
