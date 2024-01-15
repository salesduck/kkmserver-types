import { CommandRequest, CommandResponse, TaxVariant, SessionState } from '@project/command';

/**
 * Получить текущее состояние ККТ
 */
export type GetDataKKTCommandRequest = CommandRequest<'GetDataKKT'>;

export type GetDataKKTInfo = {
    /**
     * @example '504404744207'
     */
    InnOrganization: string;

    /**
     * @example 'ООО "Рога и Копыта"'
     */
    NameOrganization: string;
    TaxVariant?: TaxVariant;

    /**
     * Адрес установки
     *
     * @example 'Москва, ул. Ильинка, 9'
     */
    AddressSettle: string;
    PlaceSettle?: string;
    SenderEmail?: string;
    EncryptionMode: boolean;
    OfflineMode: boolean;
    AutomaticMode: boolean;
    AutomaticNumber?: string;
    InternetMode: boolean;
    BSOMode: boolean;
    ServiceMode: boolean;
    PrinterAutomatic?: boolean;
    SaleExcisableGoods?: boolean;
    SignOfGambling?: boolean;
    SignOfLottery?: boolean;
    SaleMarking?: boolean;
    SignPawnshop?: boolean;
    SignAssurance?: boolean;
    SignOfAgent?: string;

    /**
     * @example 'https://connect.ofd-ya.ru'
     */
    UrlServerOfd: string;

    /**
     * @example '7790'
     */
    PortServerOfd: string;

    /**
     * @example 'ООО "Ярус" ("ОФД-Я")'
     */
    NameOFD: string;

    UrlOfd: string;

    /**
     * @example '504404744207'
     */
    InnOfd: string;
    OFD_Error: string;
    OFD_NumErrorDoc: number;

    /**
     * @example '2017-01-13T14:56:00'
     */
    OFD_DateErrorDoc: string;

    /**
     * Заводской номер
     *
     * @example 0149060006000651
     */
    KktNumber: string;

    /**
     * Номер ФН
     *
     * @example '99078900002287'
     */
    FnNumber: string;

    /**
     * Регистрационный номер ККТ (из налоговой)
     *
     * @example '0149060006035849'
     */
    RegNumber: string;

    FN_IsFiscal: boolean;
    FN_MemOverflowl?: boolean;

    /**
     * @example '2024-10-18T00:00:00'
     */
    FN_DateStart?: string;

    /**
     * @example '2018-02-01T00:00:00'
     */
    FN_DateEnd: string;

    FFDVersion?: string;
    FFDVersionFN?: string;
    FFDVersionKKT?: string;
    OnOff?: boolean;
    Active?: boolean;
    SessionState: SessionState;
    PaperOver?: boolean;
    BalanceCash?: number;

    /**
     * @example '2024-01-15T16:29:34'
     */
    DateTimeKKT?: string;
    /**
     * @example '3.0.7733'
     */
    Firmware_Version: string;
    Firmware_Status: number;
    /**
     * @example '2154-06-06T13:04:56'
     */
    LicenseExpirationDate: string;
};

export type GetDataKKTCommandResponse = CommandResponse<'GetDataKKT'> & {
    /**
     * Номер последнего документа
     */
    CheckNumber: number;

    /**
     * Номер текущей смены
     */
    SessionNumber: number;

    /**
     * Ширина строки
     */
    LineLength: number;

    URL: string;

    Info: GetDataKKTInfo;
};
