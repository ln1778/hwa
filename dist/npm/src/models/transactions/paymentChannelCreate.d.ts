import { BaseTransaction } from './common';
export interface PaymentChannelCreate extends BaseTransaction {
    TransactionType: 'PaymentChannelCreate';
    Amount: string;
    Destination: string;
    SettleDelay: number;
    PublicKey: string;
    CancelAfter?: number;
    DestinationTag?: number;
}
export declare function validatePaymentChannelCreate(tx: Record<string, unknown>): void;
//# sourceMappingURL=paymentChannelCreate.d.ts.map