import { PrintImage } from './PrintImage';
import { PrintText } from './PrintText';
import { BarCode } from './BarCode';

export type CheckString = {
    BarCode?: BarCode;
    PrintText?: PrintText;
    PrintImage?: PrintImage;
};
