import { CommandName, CommandResponse } from '@project/command';

export type GetRezultCommandRequest = {
    Command: CommandName.GET_REZULT;
    IdCommand: string;
};

export type GetRezultCommandResponse = CommandResponse;
