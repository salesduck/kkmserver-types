import { CommandName, CommandRequest, CommandResponse, TaxVariant, SessionState } from '@project/command';

/**
 * Получить текущее состояние ККТ
 */
export type GetDataKKTCommandRequest = CommandRequest & {
    Command: CommandName.GET_DATA_KKT;

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

export type GetDataKKTInfo = {
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
    EncryptionMode: boolean;
    OfflineMode: boolean;
    AutomaticMode: boolean;
    InternetMode: boolean;
    BSOMode: boolean;
    ServiceMode: boolean;

    /**
     * @example '504404744207'
     */
    InnOrganization: string;

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

    Command: string;
    FN_IsFiscal: boolean;
    OFD_Error: string;
    OFD_NumErrorDoc: number;

    /**
     * @example '2017-01-13T14:56:00'
     */
    OFD_DateErrorDoc: string;

    /**
     * @example '2018-02-01T00:00:00'
     */
    FN_DateEnd: string;

    SessionState: SessionState;
};

export type GetDataKKTCommandResponse = CommandResponse & {
    Command: CommandName.GET_DATA_KKT;

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
