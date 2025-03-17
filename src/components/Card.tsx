import * as React from "react";
import {SetStateAction, useEffect, useState} from "react";
import parseCurrency from "../utils/parsers/parseCurrency.tsx";
import handleCurrency from "../utils/handlers/Calculators/handleCurrency.tsx";
import handleBid from "../utils/handlers/Calculators/handleBid.tsx";
import handleTerm from "../utils/handlers/Calculators/handleTerm.tsx";

interface CardProps {
    label: string | null;
    pokaz: boolean;
    typeTotal: string;
    calcFunc?: (credit: number, bid: number, term: number, setSum: React.Dispatch<SetStateAction<number>>, typeCapital?: number) => void;
}

export default function Card({label, pokaz, typeTotal, calcFunc}: CardProps) {
    const [credit, setCredit] = useState(0);
    const [bid, setBid] = useState(0);
    const [term, setTerm] = useState(1);
    const [sum, setSum] = useState(0);
    const [typeCapital, setTypecapital] = useState(12);

    useEffect(() => {
        if (calcFunc) {
            if (pokaz) {
                calcFunc(credit, bid, term, setSum, typeCapital);
            } else {
                calcFunc(credit, bid, term, setSum);
            }
        }
    }, [credit, bid, term, calcFunc, typeCapital, pokaz])

    return (
        <div className="w-2/3 h-1/2 shadow-2xl rounded-lg">
            <span className="flex text-xl justify-center ">{label}</span>
            <div className="flex flex-col items-center justify-center gap-2 h-full">
                <div className="relative w-2/3">
                    <p className="opacity-35 text-xs">Сумма</p>
                    <div className="relative">
                        <input
                            className="flex border-2 border-gray-200 rounded outline-none w-full p-2 text-transparent"
                            onChange={e => handleCurrency(e, setCredit)}
                            maxLength={10}
                            value={credit === 0 ? '' : credit.toString()}
                        />
                        <p className="absolute inset-0 flex items-center justify-center pointer-events-none">{parseCurrency(credit)} ₽</p>
                    </div>
                </div>
                <div className="relative w-2/3">
                    <p className="opacity-35 text-xs">Годовая ставка</p>
                    <div className="relative">

                        <input
                            className="flex border-2 border-gray-200 rounded outline-none w-full p-2 text-transparent"
                            onChange={e => handleBid(e, setBid)}
                            maxLength={3}
                            value={bid === 0 ? '' : bid.toString()}
                        />
                        <p className="absolute inset-0 flex items-center justify-center pointer-events-none">{bid} %</p>
                    </div>
                </div>
                <div className="relative w-2/3">
                    <p className="opacity-35 text-xs">Количество месяцев</p>
                    <div className="relative">
                        <input
                            className="flex border-2 border-gray-200 rounded outline-none w-full p-2 text-center"
                            onChange={e => handleTerm(e, setTerm)}
                            maxLength={3}
                            value={term === 0 ? '' : term.toString()}
                        />
                    </div>
                </div>
                {pokaz &&

                    <div className="relative w-2/3">
                        <p className="opacity-35 text-xs">Тип капитализации</p>
                        <div className="relative">
                            <select
                                className="flex border-2 border-gray-200 rounded outline-none w-full p-2 text-center"
                                value={typeCapital}
                                onChange={e => setTypecapital(Number(e.target.value))}
                            >
                                <option value={12}>Ежемесячная</option>
                                <option value={1}>Ежегодная</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <p><b>Начислено процентов:</b> {parseCurrency(sum - credit)} ₽</p>
                        </div>
                    </div>


                }
                <div>
                    <p><b>{typeTotal}:</b> {parseCurrency(sum)} ₽</p>
                </div>
            </div>
        </div>
    )
}