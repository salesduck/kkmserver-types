import { CommandRequest, CommandResponse } from '@project/command';

/**
 * Команда предназначена для проверки корректности сканировани ШК кода маркировки товар
 * (он-же КИЗ он-же честный знак)
 *
 * Сканер нужно настроить так чтобы он при сканировании не проглатывал управляющие символы
 *
 * Поддерживаются ШК:
 *  Без идентификатора экземпляра товара: EAN8, EAN13, EAN14
 *  С идентификатором экземпляра товара: GS1, ШК шуб, ШК табачной продукции., ЕГАИС-2, ЕГАИС-3
 */
export type GetGoodCodeDataCommandRequest = CommandRequest<'GetGoodCodeData'> & {
    /**
     * Штрих-код маркировки товара со сканера (нужно настроить сканер так чтобы
     * не проглатывал управляющие символы)
     */
    BarCode: string;
};

/**
 * Тип ШК
 */
export type ProductCodeType = 'NotParse' | 'EAN8' | 'EAN13' | 'ITF14' | 'GS1' | 'Fur' | 'EGAIS2' | 'EGAIS3';

export type DataProductCode = {
    /**
     * Исходный ШК
     *
     * @example '01086912345678902113234246791707011910AX785910BC'
     */
    BarCode: string;

    /**
     * ШК прошел проверку
     */
    isParsed: boolean;

    /**
     * @example '(01)08691234567890(21)1323424679(17)070119(10)AX785910BC'
     */
    RepresentationBarCode: string;

    /**
     * @example '8691234567890'
     */
    EAN?: string;

    /**
     * @example '08691234567890'
     */
    GTIN?: string;

    /**
     * @example '1323424679'
     */
    SerialNumber?: string;

    /**
     * ШК идентифицирует экземпляр товара
     */
    ContainsSerialNumber: boolean;

    /**
     * @example 'RE0H55Xy9tIxMzIzNDI0Njc5'
     */
    MarkingCodeBase64?: string;

    /**
     * Состав полей ШК
     *
     * @example {
     *  '10': 'AX785910BC';
     *  '17': '070119';
     *  '21': '1323424679';
     *  '01': '08691234567890';
     * }
     */
    DataBarCode?: Record<string, string>;

    /**
     * Тип ШК
     *
     * @example 'GS1'
     */
    ProductCodeType?: ProductCodeType;

    Errors: string;
};

export type GetGoodCodeDataCommandResponse = CommandResponse<'GetGoodCodeData'> & {
    DataProductCode: DataProductCode;
};
