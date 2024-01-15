import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Закрыть смену по картам
 */
export type SettlementCommandRequest = CommandRequest<'Settlement'>;

export type SettlementCommandResponse = CommandResponse<'Settlement'>;
