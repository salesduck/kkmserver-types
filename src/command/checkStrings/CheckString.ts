import { PrintImage } from './PrintImage';
import { PrintText } from './PrintText';
import { Register } from './Register';
import { BarCode } from './BarCode';

export type CheckString = {
    BarCode?: BarCode;
    /**
     * Строка с печатью простого текста
     */
    PrintText?: PrintText;

    /**
     * Строка с печатью картинки
     */
    PrintImage?: PrintImage;

    /**
     * Строка с печатью фискальной строки
     */
    Register?: Register;
};
