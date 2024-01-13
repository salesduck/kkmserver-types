import { CommandName, CommandRequest, CommandResponse } from '@project/command';

/**
 * Получить итоги дня по картам
 */
export type TerminalReportCommandRequest = CommandRequest & {
    Command: CommandName.TERMINAL_REPORT;

    /**
     * ИНН для поиска. Если "" то ищется только по NumDevice,
     * Если NumDevice = 0 а InnKkm заполнено то ККМ ищется только по InnKkm
     */
    InnKkm?: string;

    /**
     * Краткий (false) или полный (true) отчет
     */
    Detailed: boolean;
};

export type TerminalReportCommandResponse = CommandResponse & {
    Command: CommandName.TERMINAL_REPORT;
};
