import Card from "../../components/Card.tsx";
import creditSum from "../../utils/sumCalculate/creditSum.tsx";
import { useCallback, useState } from "react";
import generateCreditData from "../../utils/ChartData/generateCreditData.tsx";
import CreditDataType from "../../types/ChartData/creditDataType.ts";
import parseCurrency from "../../utils/parsers/parseCurrency.tsx";
import CreditChart from "../../components/CalculatorsCharts/CreditChart.tsx";
import Header from "../../components/Header.tsx";
import "../../styles/components/Chart.scss";
import "../../styles/other/split.scss";

export default function CreditCalculator() {
  const [data, setData] = useState<Array<CreditDataType>>([]);

  const handledData = useCallback(
    (credit: number, bid: number, term: number) => {
      generateCreditData(credit, bid, term, setData);
    },
    [],
  );

  return (
    <>
      <Header />
      <div className="size">
        <div className="split">
          <div className="flex h-full w-full items-center justify-center">
            <Card
              label="Калькулятор кредитов"
              pokaz={false}
              typeTotal="Ежемесячная плата"
              calcFunc={creditSum}
              getChartData={handledData}
            />
          </div>
        </div>
        <div className="split">
          <div className="flex h-full w-full items-center justify-center ">
            <div className="chart items-center justify-center flex">
              <CreditChart data={data} parseCurrency={parseCurrency} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
