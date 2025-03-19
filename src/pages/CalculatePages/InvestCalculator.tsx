import Card from "../../components/Card.tsx";
import investSum from "../../utils/sumCalculate/investSum.tsx";
import {useCallback, useState} from "react";
import generateInvestData from "../../utils/ChartData/generateInvestData.tsx";
import InvestDataType from "../../types/ChartData/investDataType.ts";
import parseCurrency from "../../utils/parsers/parseCurrency.tsx";
import InvestChart from "../../components/CalculatorsCharts/InvestChart.tsx";

export default function InvestCalculator() {
    const [data, setData] = useState<Array<InvestDataType>>([]);


    const handledData = useCallback((credit: number, bid: number, term: number, typeCapital: number) => {
        generateInvestData(credit, bid, term, typeCapital, setData);
    }, [])

    return (
        <div className="flex h-screen">
            <div className="flex flex-1">
                <div className="flex h-full w-full items-center justify-center ">
                    <Card label="Калькулятор инвестиций" pokaz={true} typeTotal="Итоговая сумма" calcFunc={investSum} getChartData={handledData}/>
                </div>
            </div>

            <div className="flex flex-1">
                <div className="flex h-full w-full items-center justify-center ">
                    <div className="flex w-2/3 h-1/2 rounded-lg shadow-2xl items-center justify-center">
                        <InvestChart data={data} parseCurrency={parseCurrency} />
                    </div>
                </div>
            </div>
        </div>
    )
}