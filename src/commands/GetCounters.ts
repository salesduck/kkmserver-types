import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Получить счетчики ФН
 */
export type GetCountersCommandRequest = CommandRequest<'GetCounters'>;

export type СountersType = 'Total' | 'Shift';

export type ReceiptType = 'Shell' | 'ShellReturn' | 'Buy' | 'BuyReturn';

export type Counter = {
    СountersType: СountersType;
    ReceiptType: ReceiptType;
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

export type GetCountersCommandResponse = CommandResponse<'GetCounters'> & {
    Сounters: Counter[];
};
