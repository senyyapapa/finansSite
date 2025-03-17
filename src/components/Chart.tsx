import {LineChart, ResponsiveContainer} from "recharts";

export default function Chart() {
    return (
        <div className="w-2/3 h-1/2 shadow-xl rounded-lg">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart>

                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}