import {Transaction} from "@/features/transactions/types";
import {axios} from "@/lib/axios";

export const createTransaction = (transaction: Transaction) => {

    return axios.post('/transactions',  transaction);
}
