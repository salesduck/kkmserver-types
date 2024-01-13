import { CommandName, CommandRequest, CommandResponse, TaxVariant } from '@project/command';

/**
 * Печать X отчета
 */
export type XReportCommandRequest = CommandRequest & {
    Command: CommandName.X_REPORT;

    /**
     * ИНН для поиска. Если "" то ищется только по NumDevice,
     * Если NumDevice = 0 а InnKkm заполнено то ККМ ищется только по InnKkm
     */
    InnKkm?: string;

    /**
     * Система налогообложения (СНО) для поиска ККТ, Можно не указывать, или = "" - любое СНО
     */
    TaxVariant?: TaxVariant;
};

export type XReportCommandResponse = CommandResponse & {
    Command: CommandName.X_REPORT;

    /**
     * Номер документа
     */
    CheckNumber: number;

    /**
     * Номер смены
     */
    SessionNumber: number;
};
