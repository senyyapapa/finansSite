import * as React from "react";
import {SetStateAction} from "react";

export default function depositionSum(credit: number, bid: number, term: number, setSum: React.Dispatch<SetStateAction<number>>) {
    const totalDepSum = credit*(1 + (bid/100))**(term);
    setSum(Math.floor(totalDepSum));
}