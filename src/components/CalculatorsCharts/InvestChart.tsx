import { ResponsiveContainer, LineChart, Tooltip, XAxis, YAxis, Line } from "recharts";


interface InvestChartProps {
    data: Array<{month: number; balance: number; interest: number}>
    parseCurrency: (value: number) => string;
}

export default function InvestChart({data, parseCurrency}: InvestChartProps) {
    function CustomToolTip({payload, active}: any) {
        if (active && payload && payload.length){
            return (
                <div className='bg-white p-2 border rounded'>
                    <p>{payload[0].payload.month} мес.</p>
                    <p>Сумма инвестиций:{parseCurrency(payload[0].payload.balance)} ₽</p>
                    <p>Начислено: {parseCurrency(payload[0].payload.interest)} ₽</p>
                </div>
            )
        }
        return null
    }
    return (
        <ResponsiveContainer width="85%" height="75%">
            <LineChart data={data}>
                <XAxis
                    dataKey="month"
                    label={{value: 'Срок(мес.)', position: 'bottom'}}
                    tick={{fontSize: 10, transform: 'rotate(0)'}}
                    interval={Math.ceil(data.length / 12) - 1}
                    tickMargin={16}
                />
                <YAxis
                    label={{value: "Сумма", angle: -90, position: 'insideLeft'}}
                    tickFormatter={parseCurrency}
                    domain={['dataMin', 'dataMax']}
                    padding={{top: 20, bottom: 20}}
                />
                <Tooltip content={CustomToolTip} />

                <Line
                    type='monotone'
                    dataKey='balance'
                    stroke='#4caf50'
                    strokeWidth={2}
                    name='Сумма инвестиций'
                    dot={data.length <= 24}
                    activeDot={{ r: 8, strokeWidth: 2}}
                />
                <Line
                    type='monotone'
                    dataKey='interest'
                    stroke='#2196f3'
                    strokeWidth={2}
                    name="Начислено"
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>

    )
}  