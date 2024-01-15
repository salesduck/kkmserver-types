import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Открыть денежный ящик
 */
export type OpenCashDrawerCommandRequest = CommandRequest<'OpenCashDrawer'>;

export type OpenCashDrawerCommandResponse = CommandResponse<'OpenCashDrawer'>;
