import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Открыть денежный ящик
 */
export type PrintOpenCashDrawerCommandRequest = CommandRequest<'PrintOpenCashDrawer'>;

export type PrintOpenCashDrawerCommandResponse = CommandResponse<'PrintOpenCashDrawer'>;
