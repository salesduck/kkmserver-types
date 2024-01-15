import { CommandRequest, CommandResponse, CheckString } from '@project/command';

/**
 * Печать чеков
 */
export type PrintDocumentCommandRequest = CommandRequest<'PrintDocument'> & {
    /**
     * Строки чека
     */
    CheckStrings: CheckString[];
};

export type PrintDocumentCommandResponse = CommandResponse<'PrintDocument'>;
