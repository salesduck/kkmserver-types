import { TaxVariant } from './checkStrings';
import { CommandName } from './name';

export type CommandRequest<TName extends CommandName = CommandName> = {
    /**
     * Команда серверу
     */
    Command: TName;

    /**
     * Заводской номер ККМ для поиска. Если "" то ККМ ищется только по NumDevice,
     */
    KktNumber?: string;

    /**
     * Система налогообложения (СНО) для поиска ККТ, Можно не указывать, или = "" - любое СНО
     */
    TaxVariant?: TaxVariant;

    /**
     * ИНН для поиска. Если "" то ищется только по NumDevice,
     * Если NumDevice = 0 а InnKkm заполнено то ККМ ищется только по InnKkm
     */
    InnKkm?: string;

    /**
     * Номер устройства. Если 0 то первое не блокированное на сервере
     */
    NumDevice?: number;

    /**
     * Уникальный идентификатор команды. Любая строка из 40 символов - должна быть уникальна для каждой подаваемой команды
     */
    IdCommand?: string;

    /**
     * Время (сек) ожидания выполнения команды.
     * Если За это время команда не выполнилась в статусе вернется результат "NotRun" или "Run"
     * Проверить результат еще не выполненной команды можно командой "GetRezult"
     * Если не указано или 0 - то значение по умолчанию 60 сек.
     * Поле не обязательно. Это поле можно указывать во всех командах
     * Если указано 1 - асинхронный вызов без ожидания выполнения
     */
    Timeout?: number;
};
