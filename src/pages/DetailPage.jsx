import { useState, useEffect } from "react";

import {
    Area, AreaChart, CartesianGrid, XAxis, YAxis,
    ResponsiveContainer, Legend, Tooltip, PieChart, Pie
} from "recharts";
import { useParams } from "react-router-dom";

import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar/Navbar";
import { getOneTerminalPerformances } from '../app/api';

const DetailPage = () => {
    const [performances, setPerformances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);
    const [average, setAverage] = useState([]);
    const { terminalID } = useParams();


    const performanceDisplayClass = `
    px-3 mt-0 md:mt-10 
    text-center text-3xl tracking-wide leading-relaxed `
    useEffect(() => {
        const props = {
            terminalID,
            setPerformances,
            setAverage,
            setError,
            setLoading
        }
        getOneTerminalPerformances(props);
        // eslint-disable-next-line
    }, [loading])
    return (
        <>
            <Navbar />
            <div className={`w-full md:w-5/6 lg:w-4/6 mx-auto px-10 py-1 mt-2`}>
                {
                    loading && <Loader />
                }

                {
                    (error.length > 0) && <ul className='text-red-500'>
                        {error.map((err, index) => <li key={index}>
                            {err}
                        </li>)}
                    </ul>
                }

                {
                    (!loading && error.length <= 0) && <section >
                        <h1 className="text-center text-3xl text-gold">{performances[0].name}</h1>
                        <h2 className="text-center text-3xl text-gold tracking-wide my-3">Last one month performances</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={performances}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="inService" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#7d2377" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#7d2377" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="inService" stroke="#7d2377" fillOpacity={1} fill="url(#inService)" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Legend />
                                <Tooltip />
                            </AreaChart>
                        </ResponsiveContainer>
                        <section className="flex flex-col md:flex-row w-full bg-slate-50">
                            <ResponsiveContainer height={140}>
                                <PieChart >
                                    <Pie data={average} dataKey="average" nameKey="name" cx="50%" cy="50%" label outerRadius={50} fill="#7d2377" />
                                    <Legend iconSize={10} width={100} height={140} layout='vertical' verticalAlign="top" align="right" />
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            {
                                average[0].average > 80
                                    ? <p className={`${performanceDisplayClass} text-brown-700`}>
                                        Amazing progress KEEP IT UP!
                                    </p> :
                                    <p className={`${performanceDisplayClass} text-red-700`}>
                                        Poor Performance</p>
                            }
                        </section>
                        <section className='bg-slate-50 rounded-md mt-5 mb-20 pb-5'>
                            <div className='p-1 text-center'>
                                <ul>
                                    {
                                        performances.map(terminal => <li key={terminal.id}>
                                            <div className={`
                            flex justify-evenly 
                            px-3 py-2 my-3
                            text-gold tracking-wider bg-white  
                            w-full transition-shadow duration-500 hover:shadow-lg`}

                                            >
                                                <p className='mr-4'>{terminal.date}</p>
                                                <p className='mr-1'>|</p>
                                                <p className='flex-1 flex justify-evenly'>


                                                    <span className={`flex gap-5 ${terminal.inService > 90
                                                        ? 'text-green-700' : terminal.inService > 80
                                                            ? 'text-green-300' : terminal.inService > 70
                                                                ? 'text-yellow-500' : terminal.inService > 50
                                                                    ? 'text-red-300' : 'text-red-700'}`}>
                                                        <span className='text-gold px-1'>|</span>
                                                        {terminal.inService}%

                                                    </span>
                                                </p>
                                            </div>
                                        </li>)
                                    }
                                </ul>
                            </div>

                        </section>
                    </section>
                }
            </div>
            <Footer />
        </>
    )
}

export default DetailPage