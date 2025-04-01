import React from 'react'
const FormulaDisplay: React.FC = () => {
    return (
        <div className="formula-display">
            <h2>Формулы для расчетов</h2>
            <div className="formula">
                <h3>Кредитный калькулятор</h3>
                <p>
                    Формула для расчета месячной платы по кредиту:
                    <br />
                    <strong>
                        M = (C * (r / 12) * (1 + (r / 12))^n) / ((1 + (r / 12))^n - 1)
                    </strong>
                    <br />
                    где:
                    <ul>
                        <li>M - месячная плата</li>
                        <li>C - сумма кредита</li>
                        <li>r - годовая процентная ставка</li>
                        <li>n - срок кредита в месяцах</li>
                    </ul>
                </p>
            </div>
            <div className="formula">
                <h3>Калькулятор депозитов</h3>
                <p>
                    Формула для расчета итоговой суммы по депозиту:
                    <br />
                    <strong>
                        S = C * (1 + (r / 12 / 100))^n
                    </strong>
                    <br />
                    где:
                    <ul>
                        <li>S - итоговая сумма</li>
                        <li>C - сумма депозита</li>
                        <li>r - годовая процентная ставка</li>
                        <li>n - срок депозита в месяцах</li>
                    </ul>
                </p>
            </div>
            <div className="formula">
                <h3>Калькулятор инвестиций</h3>
                <p>
                    Формула для расчета итоговой суммы по инвестициям:
                    <br />
                    <strong>
                        S = C * (1 + (r / 100 / t))^(t * (n / 12))
                    </strong>
                    <br />
                    где:
                    <ul>
                        <li>S - итоговая сумма</li>
                        <li>C - сумма инвестиций</li>
                        <li>r - годовая процентная ставка</li>
                        <li>t - тип капитала</li>
                        <li>n - срок инвестиций в месяцах</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default FormulaDisplay;