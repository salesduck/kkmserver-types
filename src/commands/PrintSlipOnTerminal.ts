import { CommandName, CommandRequest, CommandResponse } from '@project/command';

/**
 * Есть ли печать квитанций на терминале?
 */
export type PrintSlipOnTerminalCommandRequest = CommandRequest & {
    Command: CommandName.PRINT_SLIP_ON_TERMINAL;

    /**
     * ИНН для поиска. Если "" то ищется только по NumDevice,
     * Если NumDevice = 0 а InnKkm заполнено то ККМ ищется только по InnKkm
     */
    InnKkm?: string;
};

// TODO: фиг знает какой ответ приходит
export type PrintSlipOnTerminalCommandResponse = CommandResponse & {
    Command: CommandName.PRINT_SLIP_ON_TERMINAL;
};
