import { CommandName, CommandRequest, CommandResponse } from '@project/command';

/**
 * Закрыть смену по картам
 */
export type SettlementCommandRequest = CommandRequest & {
    Command: CommandName.SETTLEMENT;

    /**
     * ИНН для поиска. Если "" то ищется только по NumDevice,
     * Если NumDevice = 0 а InnKkm заполнено то ККМ ищется только по InnKkm
     */
    InnKkm?: string;
};

export type SettlementCommandResponse = CommandResponse & {
    Command: CommandName.SETTLEMENT;
};
