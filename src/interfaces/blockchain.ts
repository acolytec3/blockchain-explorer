declare module namespace {

    export interface Transaction {
        amount: number;
        recipient: string;
        sender: string;
    }

    export interface Block {
        index: number;
        previous_hash: any;
        proof: number;
        timestamp: number;
        transactions: Transaction[];
    }

    export interface Chain {
        chain: Chain[];
        length: number;
    }

}