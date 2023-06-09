export type LedgerIndex = number | ('validated' | 'closed' | 'current');
interface XRP {
    currency: 'HWA';
}
interface IssuedCurrency {
    currency: string;
    issuer: string;
}
export type Currency = IssuedCurrency | XRP;
export interface IssuedCurrencyAmount extends IssuedCurrency {
    value: string;
}
export type Amount = IssuedCurrencyAmount | string;
export interface Signer {
    Signer: {
        Account: string;
        TxnSignature: string;
        SigningPubKey: string;
    };
}
export interface Memo {
    Memo: {
        MemoData?: string;
        MemoType?: string;
        MemoFormat?: string;
    };
}
export type StreamType = 'consensus' | 'ledger' | 'manifests' | 'peer_status' | 'transactions' | 'transactions_proposed' | 'server' | 'validations';
interface PathStep {
    account?: string;
    currency?: string;
    issuer?: string;
}
export type Path = PathStep[];
export interface SignerEntry {
    SignerEntry: {
        Account: string;
        SignerWeight: number;
        WalletLocator?: string;
    };
}
export interface ResponseOnlyTxInfo {
    date?: number;
    hash?: string;
    ledger_index?: number;
    inLedger?: number;
}
export interface NFTOffer {
    amount: Amount;
    flags: number;
    nft_offer_index: string;
    owner: string;
    destination?: string;
    expiration?: number;
}
export {};
//# sourceMappingURL=index.d.ts.map