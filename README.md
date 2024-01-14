# kkmserver-types

Define types for kkmserver.ru

## Setup

```sh
yarn add @salesduck/kkmserver-types
```

## Usage

```ts
// 1. Import types
import { CommandName, CloseShiftCommandRequest, CloseShiftCommandResponse } from '@salesduck/kkmserver-types';

// 2. Define method for close shift
const closeShift = async (CashierName: string, CashierVATIN: string): Promise<CloseShiftCommandResponse> => {
    const command: CloseShiftCommandRequest = {
        Command: CommandName.CLOSE_SHIFT,
        NumDevice: 1,
        CashierName,
        CashierVATIN
    };

    const response = await fetch('kkmserver:port/Execute', { body: JSON.stringify(command) });
    const json = await response.json();

    return json;
};

// 3. Use method
closeShift('Cashier Name', '430601071197').then(console.log).catch(console.error);
```

## TODO

1. Write tests
2. Define types for TODO marked items
