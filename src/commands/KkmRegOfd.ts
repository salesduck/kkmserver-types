import { CommandRequest, CommandResponse, TaxVariant } from '@project/command';

/**
 * Open - Первичная регистрация ККМ
 * ChangeFN - Замена ФН
 * ChangeOFD - Смена ОФД
 * ChangeOrganization - Смена реквизитов организации
 * ChangeKkm - Смена реквизитов ККМ
 * Close - Закрытие архива ФН
 */
export type RegistrationCommand = 'Open' | 'ChangeFN' | 'ChangeOFD' | 'ChangeOrganization' | 'ChangeKkm' | 'Close';

/**
 * Версия ФФД
 *
 * 1 - ФФД 1.0
 * 2 - ФФД 1.05
 *
 * @todo так то их больше чем тут перечислено
 */
export type FfdVersion = 1 | 2;

/**
 * Данные регистрации
 */
export type RegKkmOfd = {
    /**
     * Команда регистрации
     */
    Command: RegistrationCommand;

    /**
     * Версия ФФД
     */
    SetFfdVersion: FfdVersion;

    /**
     * URL или IP сервера ОФД (При командах "Open" и "ChangeOFD")
     *
     * @example ofd.com
     */
    UrlServerOfd?: string;

    /**
     * IP-порт сервера ОФД (При командах "Open" и "ChangeOFD")
     *
     * @example 9999
     */
    PortServerOfd?: string;

    /**
     * Наименование ОФД (При командах "Open" и "ChangeOFD")
     *
     * @example 'Лучший ОФД'
     */
    NameOFD?: string;

    /**
     * Префикс URL ОФД для поиска чека (При командах "Open" и "ChangeOFD")
     *
     * @example 'ofd.com/reg'
     */
    UrlOfd?: string;

    /**
     * ИНН ОФД (При командах "Open" и "ChangeOFD")
     *
     * @example '1234567890'
     */
    InnOfd?: string;

    /**
     * Наименование организации (При командах "Open" и "ChangeOrganization")
     *
     * @example 'ООО Рога и Копыта';
     */
    NameOrganization?: string;

    /**
     * ИНН организации (При командах "Open")
     *
     * @example '1234567890'
     */
    InnOrganization?: string;

    /**
     * Регистрационный номер ККМ (При командах "Open")
     * @example '0000521455048286'
     */
    RegNumber?: string;

    /**
     * Адрес установки ККМ  (При командах "Open" и "ChangeOrganization")
     *
     * @example Сарайчик в деревне у бабушки
     */
    AddressSettle?: string;

    /**
     * Место установки (Для ФФД 1.05 и выше)
     *
     * @example 'Подвал контрабандный'
     */
    PlaceSettle?: string;

    /**
     * Email магазина (Для ФФД 1.05 и выше)
     *
     * @example  'odessa@mama.ru'
     */
    SenderEmail?: string;

    /**
     * Система налогообложения, может быть установлено сразу несколько СНО
     * (При командах "Open" и "ChangeOrganization")
     * При нескольких СНО их нужно указать через запятую, например: "0,3,5"
     */
    TaxVariant?: TaxVariant | string;

    /**
     * Шифрование (При командах "Open" и "ChangeKkm")
     */
    EncryptionMode?: boolean;

    /**
     * Автономный режим (При командах "Open" и "ChangeKkm")
     */
    OfflineMode?: boolean;

    /**
     * Автоматический режим (При командах "Open")
     */
    AutomaticMode?: boolean;

    /**
     * Расчеты в Интернете (При командах "Open")
     */
    InternetMode?: boolean;

    /**
     * Бланки строгой отчетности (При командах "Open")
     */
    BSOMode: boolean;

    /**
     * Применение в сфере услуг (При командах "Open")
     */
    ServiceMode?: boolean;

    /**
     * Признак установки принтера в автомате (Для ФФД 1.05 и выше)
     */
    PrinterAutomatic?: boolean;

    /**
     * Номер автомата
     */
    AutomaticNumber?: string;

    /**
     * Продажа подакцизного товара (Для ФФД 1.1 и выше)
     */
    SaleExcisableGoods?: boolean;

    /**
     * Признак проведения азартных игр (Для ФФД 1.1 и выше)
     */
    SignOfGambling?: boolean;

    /**
     * Признак проведения лотереи  (Для ФФД 1.1 и выше)
     */
    SignOfLottery?: boolean;

    /**
     * Коды признаков агента через разделитель ",". (Для ФФД 1.1 и выше)
     */
    SignOfAgent?: string;
};

/**
 * Регистрация и фискализация ККМ
 *
 * Внимание - некоторые команды регистрации необратимы!!!!!
 * Важно понимать что делаете!!!!!
 */
export type KkmRegOfdCommandRequest = CommandRequest<'KkmRegOfd'> & {
    /**
     * Не печатать отчет
     *
     * @default false
     */
    NotPrint?: boolean;

    /**
     * Сотрудник регистрирующий ККТ , тег ОФД 1021
     *
     * @example Иванов И.И.
     */
    CashierName: string;

    /**
     * ИНН продавца тег ОФД 1203
     *
     * @example 430601071197
     */
    CashierVATIN: string;

    /**
     * Данные регистрации
     */
    RegKkmOfd: RegKkmOfd;
};

// TODO: не знаю что возвращает
export type KkmRegOfdCommandResponse = CommandResponse<'KkmRegOfd'>;
