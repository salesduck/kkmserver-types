import { CommandRequest, CommandResponse, Tax, TaxVariant } from '@project/command';

export type GetDataCheckCommandRequest = CommandRequest<'GetDataCheck'> & {
    /**
     * Фискальный номер (ФД) чека. Если 0 - то последний чек
     */
    FiscalNumber?: number;

    /**
     * Количество копий документа (копии печатаются на ленте)
     */
    NumberCopies?: number;
};

export type RegisterResponse = {
    /**
     *  @example 'Чипсы с беконом LAYS';
     */
    Name: string;
    Quantity: number;
    Amount: number;
    Tax: Tax;
};

export type RegisterCheck = {
    FiscalNumber: string;
    /**
     * @example '2024-01-11T13:10:00';
     */
    FiscalDate: string;
    /**
     * @example 'Приход';
     */
    CheckType: string | null;

    /**
     * @example '3830581340';
     */
    FiscalSign: string;
    /**
     * @example 'СИС. АДМИНИСТРАТОР';
     */
    CashierName: string;
    CashierVATIN: string;
    TaxVariant: TaxVariant;
    ClientAddress: string;
    SenderEmail: string;
    PlaceMarket: string;
    Register: RegisterResponse[];
    Cash: number;
    ElectronicPayment: number;
    AdvancePayment: number;
    Credit: number;
    CashProvision: number;
    AllSumm: number;
};

export type GetDataCheckCommandResponse = CommandResponse<'GetDataCheck'> & {
    URL?: string;
    QRCode?: string;
    Slip: string;
    RegisterCheck: RegisterCheck;
};
