import { CommandRequest, CommandResponse } from '@project/command';

import { GetDataKKTInfo } from './GetDataKKT';

/**
 * Печать Z отчета
 */
export type ZReportCommandRequest = CommandRequest<'ZReport'>;

export type ZReportCommandResponse = CommandResponse<'ZReport'> & {
    /**
     * Номер документа
     */
    CheckNumber: number;

    /**
     * Номер смены
     */
    SessionNumber: number;

    // https://check.ofd.ru/rec/1615012884/0000000007015434/9999078902003809/431/2072038103
    URL: string;

    // t=20240115T1623&fn=9999078902003809&i=431&fp=2072038103
    QRCode: string;

    Info?: GetDataKKTInfo;
};
