import * as React from "react";
import {SetStateAction} from "react";

export default function handleBid(e: React.ChangeEvent<HTMLInputElement>, setBid: React.Dispatch<SetStateAction<number>>) {
    const value = e.target.value.replace(/\D/g, '').replace(/^0+/, '');
    if(value === ''){
        setBid(0);
    } else{
        const number = parseInt(value, 10);
        setBid(Math.min(100, number));
    }
}