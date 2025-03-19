import * as React from "react";
import {SetStateAction} from "react";
import InvestDataType from "../../types/ChartData/investDataType.ts";

export default function generateInvestData(credit: number, bid: number, term:number, typeCapital: number, setData: React.Dispatch<SetStateAction<Array<InvestDataType>>>){
    if (credit === 0 || bid === 0 || term === 0) {
        setData([]);
        return;
    }

    const monthsPerCapitalization = typeCapital === 12 ? 1 : 12;

    const data = [];
    let currentBalance = credit;
    let previousBalance = credit;

    for (let month = 1; month <= term; month++) {
        if (month % monthsPerCapitalization === 0 || month === term) {
            const rate = (bid / 100) / (typeCapital === 12 ? 12 : 1);

            if (typeCapital === 12) {
                const monthlyInterest = previousBalance * rate;
                currentBalance = previousBalance + monthlyInterest;

                data.push({
                    month: month,
                    balance: Math.round(currentBalance),
                    interest: Math.round(monthlyInterest)
                });

                previousBalance = currentBalance;
            } else if (month % 12 === 0) {
                const yearlyInterest = previousBalance * rate;
                currentBalance = previousBalance + yearlyInterest;

                data.push({
                    month: month,
                    balance: Math.round(currentBalance),
                    interest: Math.round(yearlyInterest)
                });

                previousBalance = currentBalance;
            }
        } else if (typeCapital === 12) {
            const monthlyInterest = previousBalance * ((bid / 100) / 12);
            currentBalance = previousBalance + monthlyInterest;

            data.push({
                month: month,
                balance: Math.round(currentBalance),
                interest: Math.round(monthlyInterest)
            });

            previousBalance = currentBalance;
        }
    }

    setData(data);
}
