import Card from "../../components/Card.tsx";
import creditSum from "../../utils/sumCalculate/creditSum.tsx";
import {useCallback, useState} from "react";
import generateCreditData from "../../utils/ChartData/generateCreditData.tsx";
import CreditDataType from "../../types/ChartData/creditDataType.ts";
import parseCurrency from "../../utils/parsers/parseCurrency.tsx";
import CreditChart from "../../components/CalculatorsCharts/CreditChart.tsx";


export default function CreditCalculator() {
    const [data, setData] = useState<Array<CreditDataType>>([]);

    const handledData = useCallback((credit: number, bid: number, term: number, typeCapital: number) => {
        generateCreditData(credit, bid, term, typeCapital, setData);

    }, [])

    return (
        <>
            <div className="flex h-screen">
                <div className="flex-1 flex">
                    <div className="flex h-full w-full items-center justify-center ">
                        <Card label="Калькулятор кредитов" pokaz={false} typeTotal="Ежемесячная плата" calcFunc={creditSum} getChartData={handledData} />
                    </div>
                </div>
                <div className="flex-1 flex">
                    <div className="flex h-full w-full items-center justify-center ">
                        <div className="flex w-2/3 h-1/2 rounded shadow-2xl items-center justify-center">
                            <CreditChart data={data} parseCurrency={parseCurrency} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}