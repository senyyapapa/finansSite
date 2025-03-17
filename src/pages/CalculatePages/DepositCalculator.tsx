import Card from "../../components/Card.tsx";
import depositionSum from "../../utils/sumCalculate/depositionSum.tsx";

export default function DepositCalculator() {
    return (
        <>
            <div className="flex h-screen">
                <div className="flex flex-1">
                    <div className="flex h-full w-full items-center justify-center ">
                        <Card label="Калькулятор депозитов" pokaz={false} typeTotal="Ежемесячное начисление" calcFunc={depositionSum}/>
                    </div>
                </div>
                <div className="flex flex-1">

                </div>
            </div>
        </>
    )
}