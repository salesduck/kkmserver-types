import { CommandName, CommandRequest, CommandResponse, TaxVariant } from '@project/command';

/**
 * Получить счетчики ФН
 */
export type GetCountersCommandRequest = CommandRequest & {
    Command: CommandName.GET_COUNTERS;

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

export type Counter = {
    СountersType: 'Total' | 'Shift';
    ReceiptType: 'Shell' | 'ShellReturn' | 'Buy' | 'BuyReturn';
    Count: number;
    Sum: number;
    Cash: number;
    ElectronicPayment: number;
    AdvancePayment: number;
    Credit: number;
    CashProvision: number;
    Tax20: number;
    Tax10: number;
    Tax0: number;
    TaxNo: number;
    Tax120: number;
    Tax110: number;
    CorrectionsCount: number;
    CorrectionsSum: number;
};

export type GetCountersCommandResponse = CommandResponse & {
    Command: CommandName.GET_COUNTERS;

    Сounters: Counter[];
};
