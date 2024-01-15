import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Получить итоги дня по картам
 */
export type TerminalReportCommandRequest = CommandRequest<'TerminalReport'> & {
    /**
     * Краткий (false) или полный (true) отчет
     */
    Detailed?: boolean;
};

export type TerminalReportCommandResponse = CommandResponse<'TerminalReport'>;
