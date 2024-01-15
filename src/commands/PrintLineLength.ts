import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Получить ширину строки чека в символах
 */
export type PrintLineLengthCommandRequest = CommandRequest<'PrintLineLength'>;

// TODO: хер знает какой ответ
export type PrintLineLengthCommandResponse = CommandResponse<'PrintLineLength'>;
