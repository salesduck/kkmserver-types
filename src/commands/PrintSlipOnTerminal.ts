import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Есть ли печать квитанций на терминале?
 */
export type PrintSlipOnTerminalCommandRequest = CommandRequest<'PrintSlipOnTerminal'>;

// TODO: фиг знает какой ответ приходит
export type PrintSlipOnTerminalCommandResponse = CommandResponse<'PrintSlipOnTerminal'>;
