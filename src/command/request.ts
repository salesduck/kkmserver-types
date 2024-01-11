import { CommandName } from "./name";

export type CommandRequest = {
    /**
     * Команда серверу
     */
    Command: CommandName;

    /**
     * Номер устройства. Если 0 то первое не блокированное на сервере
     */
    NumDevice?: number;

    /**
     * Уникальный идентификатор команды. Любая строка из 40 символов - должна быть уникальна для каждой подаваемой команды
     */
    IdCommand?: string;
};
