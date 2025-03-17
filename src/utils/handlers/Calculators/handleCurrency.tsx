import * as React from "react";
import {SetStateAction} from "react";

export default function handleCurrency(e: React.ChangeEvent<HTMLInputElement>, setCredit: React.Dispatch<SetStateAction<number>>) {
    const value = (e.target.value).replace(/\D/g , '');
    if (value === ''){
        return setCredit(0);
    } else {
        const number = parseInt(value, 10);
        return setCredit(number);
    }
}