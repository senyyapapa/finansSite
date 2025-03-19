import * as React from "react";
import {SetStateAction} from "react";
import {DepositDataType} from "../../types/ChartData/depositDataType.ts";

export default function generateDepositData(credit: number, bid: number, term: number, setData: React.Dispatch<SetStateAction<Array<DepositDataType>>>) {
    if (credit === 0 || bid === 0 || term === 0) {
        setData([]);
        return;
    }

    const monthlyRate = (bid / 100);
    const data = [];
    let currentBalance = credit;
    let previousBalance = credit;

    for (let month = 1; month <= term; month++) {
        const monthlyInterest = previousBalance * monthlyRate;
        currentBalance = previousBalance + monthlyInterest;

        data.push({
            month: month,
            balance: Math.round(currentBalance),
            interest: Math.round(monthlyInterest)
        });

        previousBalance = currentBalance;
    }

    setData(data);
}
