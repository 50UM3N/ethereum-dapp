import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
const TeamChart = () => {
    const [data, setData] = useState([
        {
            name: "Name 1",
            vote: 4000,
        },
        {
            name: "Name 2",
            vote: 3000,
        },
        {
            name: "Name 3",
            vote: 2000,
        },
        {
            name: "Name 4",
            vote: 2780,
        },
        {
            name: "Name 5",
            vote: 1890,
        },
    ]);
    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="vote" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TeamChart;
