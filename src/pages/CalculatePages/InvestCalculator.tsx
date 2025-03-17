import Card from "../../components/Card.tsx";
import investSum from "../../utils/sumCalculate/investSum.tsx";

export default function InvestCalculator() {
    return (
        <div className="flex h-screen">
            <div className="flex flex-1">
                <div className="flex h-full w-full items-center justify-center ">
                    <Card label="Калькулятор инвестиций" pokaz={true} typeTotal="Итоговая сумма" calcFunc={investSum}/>
                </div>
            </div>

            <div className="flex flex-1">

            </div>
        </div>
    )
}