import * as React from "react";

export default function investSum(credit: number, bid: number, term: number, setSum: React.Dispatch<React.SetStateAction<number>>, typeCapital: number = 1) {
    const sum = credit * ((1 + ((bid/100)/typeCapital))**(typeCapital*(term)/12));
    setSum(Math.floor(sum));
}