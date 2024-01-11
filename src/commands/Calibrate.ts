import { CommandName, CommandRequest } from '@project/command';

export type CalibrateCommmandRequest = CommandRequest & {
    Command: CommandName.CALIBRATE;
    TareWeight: number;
};

export type GetWeightCommandRequest = {
    Command: CommandName.CALIBRATE;
    NumDevice: number;
};
