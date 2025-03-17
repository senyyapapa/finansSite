import * as React from "react";
import {SetStateAction} from "react";


export default function creditSum(credit: number, bid: number, term: number, setSum: React.Dispatch<SetStateAction<number>>) {
    if (bid > 0 && term > 0) {
        const allSum = (credit * (bid / 12) / 100 * (1 + (bid / 12) / 100) ** term) / ((1 + (bid / 12) / 100) ** term - 1);
        setSum(Math.floor(allSum));
        } else {
        setSum(0);
    }
}