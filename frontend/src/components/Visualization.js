import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Visualization = ({ prediction }) => {
    const data = [
        { name: 'Risk Level', value:prediction }
    ];

    return (
        <div className="container mt-5">
            <h3 className='text-center'>Prediction Result</h3>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <BarChart>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Visualization;