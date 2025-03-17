import * as React from "react";

export default function handleTerm(e: React.ChangeEvent<HTMLInputElement>, setTerm: React.Dispatch<React.SetStateAction<number>>) {
    const value = e.target.value.replace(/\D/g , '');
    if (value === ''){
        setTerm(0);
    } else{
        const number = parseInt(value, 10);
        setTerm(Math.min(120, number));
    }
}