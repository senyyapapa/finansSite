import Card from "../../components/Card.tsx";
import creditSum from "../../utils/sumCalculate/creditSum.tsx";

export default function CreditCalculator() {
    return (
        <>
            <div className="flex h-screen">
                <div className="flex-1 flex">
                    <div className="flex h-full w-full items-center justify-center ">
                        <Card label="Калькулятор кредитов" pokaz={false} typeTotal="Ежемесячная плата" calcFunc={creditSum} />
                    </div>
                </div>
                <div className="flex-1 flex">
                </div>
            </div>

        </>
    )
}