import { CommandName, CommandRequest, CommandResponse } from '@project/command';

export type PrintOpenCashDrawerCommandRequest = CommandRequest & {
    Command: CommandName.PRINT_OPEN_CASH_DRAWER;
};

export type PrintOpenCashDrawerCommandResponse = CommandResponse & {
    Command: CommandName.PRINT_OPEN_CASH_DRAWER;
};
