import { CommandName, CommandRequest, CommandResponse, TaxVariant } from '@project/command';

export type GoodCodeDatas = {
    /**
     * Наименование товара - справочно, можно не передавать
     *
     * @example 'Тестовый товар 1'
     */
    Name?: string;

    /**
     * штрих-код маркировки товара со сканера (нужно настроить сканер так чтобы не проглатывал управляющие символы)
     * Поддерживаются ШК:
     * Без идентификатора экземпляра товара: EAN8, EAN13, ITF14
     * С идентификатором экземпляра товара: GS1, ШК шуб, ШК табачной продукции., ЕГАИС-2, ЕГАИС-3
     *
     * @example '010460708021818721&dAIMqnpEQnQ!\u001d910058\u001d921gx+7D2jIWGSo6LLr1FMGiETo7Ez6k4ag9D8FZwEmJqIWtivlAGjqEP8OspoVeIKiP4OkzmSCzRXmEUygvkKQw=='
     */
    Barcode: string;

    /**
     * Количество товара (3 знака после запятой) для конкретного кода маркировки, Тег 1023
     * Если количество = 1 - можно не передавать
     * Если товар весовой - передавать обязательно!
     */
    Quantity?: number;

    /**
     * Мера количества предмета расчета. Тег ОФД 2108, Значение из таблицы 114 (ФФД)
     * Если не передавать то применяется "0" - (шт. или ед.)
     * 0 шт.или ед.; 10 г; 11 кг; 12 т; 20 см; 21 дм; 22 м; 30 кв.см; 31 кв.дм; 32 кв.м; 40	мл; 41 л; 42 куб.м; 50 кВт ч; 51 Гкал; 70 сутки; 71 час; 72 мин; 73 с; 80 Кбайт; 81 Мбайт; 82 Гбайт; 83 Тбайт; 255 Прочее
     * Некоторые ККТ при передачи кода маркировки трабуют чтобы MeasureOfQuantity = 0 (шт.или ед.)
     */
    MeasureOfQuantity?: number;

    /**
     * Общее количество товара в упаковке(тег 1294)
     * Передавать ТОЛЬКО при продаже товара из упаковки маркировки!!
     * Если товар не из упаковки - Не передовать (или передавать null)!
     * Как правило передавать не нужно (или передавать null)
     * Должно быть больше или равно продаваемому количеству товара
     * Имеет смысл только при передачи совместно с кодом маркировки
     * При указании PackageQuantity - поле MeasureOfQuantity должно быть строго равно 0 (шт. или ед.) и не равнятся 0!
     * При указании PackageQuantity - поле Quantity (количество продаваемого товара) должно быть строго целое число
     * Например при продаже 2 сигарет из упаковки в 22 шт. - MeasureOfQuantity = 0, Quantity = 2, PackageQuantity = 22
     */
    PackageQuantity?: number | null;
};

/**
 * Проверка кодов маркировки
 */
export type ValidationMarkingCodeCommandRequest = CommandRequest & {
    Command: CommandName.VALIDATION_MARKING_CODE;

    /**
     * Заводской номер ККМ для поиска. Если "" то ККМ ищется только по NumDevice,
     */
    KktNumber?: string;

    /**
     * ИНН для поиска. Если "" то ищется только по NumDevice,
     * Если NumDevice = 0 а InnKkm заполнено то ККМ ищется только по InnKkm
     */
    InnKkm?: string;

    /**
     * Система налогообложения (СНО) для поиска ККТ, Можно не указывать, или = "" - любое СНО
     */
    TaxVariant?: TaxVariant;

    /**
     * Список кодов маркировки
     */
    GoodCodeDatas: GoodCodeDatas;
};

export type MarkingCodeValidation = {
    /**
     * @example Тестовый товар 1
     */
    Name: string;

    /**
     * @example '010460708021818721&dAIMqnpEQnQ!\u001d910058\u001d921gx+7D2jIWGSo6LLr1FMGiETo7Ez6k4ag9D8FZwEmJqIWtivlAGjqEP8OspoVeIKiP4OkzmSCzRXmEUygvkKQw=='
     */
    BarCode: string;

    /**
     * Результат проверки КМ в ФН (тег 2106)
     */
    ValidationResult: number;

    /**
     * @example '[М] Проверка КП КМ не выполнена, статус товара ОИСМ не проверен (ККТ функционирует в автономном режиме); ФН не содержит ключ проверки кода проверки этого КМ'
     */
    DecryptionResult: string;
};

export type ValidationMarkingCodeCommandResponse = CommandResponse & {
    Command: CommandName.VALIDATION_MARKING_CODE;
    MarkingCodeValidation: MarkingCodeValidation[];
};
