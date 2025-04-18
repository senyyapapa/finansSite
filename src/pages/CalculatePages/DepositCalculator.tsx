import Card from "../../components/Card.tsx";
import depositionSum from "../../utils/sumCalculate/depositionSum.tsx";
import { useCallback, useState } from "react";
import { DepositDataType } from "../../types/ChartData/depositDataType.ts";
import generateDepositData from "../../utils/ChartData/generateDepositData.tsx";
import parseCurrency from "../../utils/parsers/parseCurrency.tsx";
import DepositChart from "../../components/CalculatorsCharts/DepositChart.tsx";
import Header from "../../components/Header.tsx";
import "../../styles/components/Chart.scss";
import "../../styles/components/Chart.scss";

export default function DepositCalculator() {
  const [data, setData] = useState<Array<DepositDataType>>([]);

  const handledData = useCallback(
    (credit: number, bid: number, term: number) => {
      generateDepositData(credit, bid, term, setData);
    },
    [],
  );

  return (
    <>
      <Header />
      <div className="size">
        <div className="split">
          <div className="flex h-full w-full items-center justify-center ">
            <Card
              label="Калькулятор депозитов"
              pokaz={false}
              typeTotal="Ежемесячное начисление"
              calcFunc={depositionSum}
              getChartData={handledData}
            />
          </div>
        </div>
        <div className="split">
          <div className="flex h-full w-full items-center justify-center ">
            <div className="chart flex items-center justify-center">
              <DepositChart data={data} parseCurrency={parseCurrency} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
