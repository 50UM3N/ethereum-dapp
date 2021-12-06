import React, { useState, useEffect } from "react";
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
const TeamChart = ({ web3, SKAMContract }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const func = async () => {
            let voteData = await SKAMContract.methods.getTeams().call();
            voteData = voteData.map((item) => {
                return {
                    name: web3.utils.hexToString(item[0]),
                    vote: item[1],
                };
            });
            setData(voteData);
        };
        func();
    }, [web3, SKAMContract]);
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
