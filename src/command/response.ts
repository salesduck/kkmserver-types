import { CommandStatus } from './status';
import { CommandName } from './name';

export type CommandResponse<TName extends CommandName = never> = {
    /**
     * Команда серверу
     */
    Command: TName;

    /**
     * Текст ошибки если была - обязательно показать пользователю - по содержанию
     * ошибки можно в 90% случаях понять как ее устранять
     */
    Error: string;

    Warning: string;

    /**
     * Сообщение пользователю - Если строка не пустая - ее нужно отобразить пользователю
     */
    Message: string;

    Status: CommandStatus;

    /**
     * Уникальный идентификатор команды. Любая строка из 40 символов - должна быть уникальна для каждой подаваемой команды
     * По этому идентификатору можно запросить результат выполнения команды
     * Поле не обязательно
     */
    IdCommand: string;

    /**
     *  Номер устройства. Если 0 то первое не блокированное на сервере
     */
    NumDevice: number;

    /**
     * @example 'KkmServer'
     */
    MessageFrom?: string;
};
