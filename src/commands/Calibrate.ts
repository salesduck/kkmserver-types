import { CommandName, CommandRequest, CommandResponse } from '@project/command';

/**
 * Откалибровать весы
 */
export type CalibrateCommandRequest = CommandRequest & {
    Command: CommandName.CALIBRATE;

    /*
     * Установка веса тары на весах. Если 0 то берется текущее значение веса на весах.
     */
    TareWeight: number;
};

export type CalibrateCommandResponse = CommandResponse & {
    Command: CommandName.CALIBRATE;
};
