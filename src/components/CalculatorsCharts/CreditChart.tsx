import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CreditDataType from "../../types/ChartData/creditDataType.ts";

interface CreditChartProps {
    data: Array<CreditDataType>;
    parseCurrency: (value: number) => string;
}
export default function CreditChart({data, parseCurrency}: CreditChartProps) {
    const CustomToolTip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-2 border rounded">
                    <p>{payload[0].payload.month} мес.</p>
                    <p>Платеж: {parseCurrency(payload[0].payload.payment)} ₽</p>
                    <p>Остаток: {parseCurrency(payload[0].payload.debt)} ₽</p>
                </div>
            );
        }
        return null;
    };

    return (
        <ResponsiveContainer width="80%" height="75%">
            <LineChart data={data}>
                <XAxis
                    dataKey="month"
                    label={{ value: 'Срок (мес.)', position: 'bottom' }}
                    tick={{ fontSize: 10, transform: 'rotate(0)' }}
                    interval={Math.ceil(data.length / 12) - 1}
                    tickMargin={16}
                />
                <YAxis
                    label={{ value: 'Сумма (₽)', angle: -90, position: 'insideLef' }}
                    tickFormatter={parseCurrency}
                    domain={['dataMin', 'dataMax']}
                    padding={{ top: 20, bottom: 20 }}
                />
                <Tooltip content={<CustomToolTip />} />
                <Line
                    type="monotone"
                    dataKey="payment"
                    stroke="#8884d8"
                    strokeWidth={2}
                    name="Платеж"
                    dot={data.length <= 24}
                    activeDot={{ r: 6, strokeWidth: 2 }}
                />
                <Line
                    type="monotone"
                    dataKey="debt"
                    stroke="#ff7300"
                    strokeWidth={2}
                    name="Остаток"
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}