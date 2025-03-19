import CreditDataType from "../../types/ChartData/creditDataType.ts";
import {SetStateAction} from "react";
import * as React from "react";

export default function generateCreditData(credit: number, bid: number, term: number, setData: React.Dispatch<SetStateAction<Array<CreditDataType>>>){
    const monthlyRate = (bid/12)/100;
    const annuityPayment = credit * monthlyRate / (1 -  Math.pow(1 + monthlyRate, -term));
    let remainingBalance = credit;
    const data: Array<CreditDataType> = [];

    if (credit > 0 ||  bid > 0 || term > 0)
    {
        for (let month = 1; month <= term; month++) {
            const interest = remainingBalance * monthlyRate;
            const principal = month < term ? annuityPayment - interest : remainingBalance + interest;
            remainingBalance = month < term ? remainingBalance - (annuityPayment - interest) : 0;

            data.push({
                month: month,
                payment: Math.round(month < term ? annuityPayment : principal),
                debt: Math.round(remainingBalance)
            })
        }
    }
    setData(data);
}