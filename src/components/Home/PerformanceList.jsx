
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { AiFillLike, AiFillDislike } from 'react-icons/ai'

import { getPerformanceList } from '../../app/api';
import Pagination from './Pagination';
import Loader from '../Loader';

const PerformanceList = () => {
    const terminals = useSelector(state => state.terminal.terminals);
    const date = useSelector(state => state.terminal.date);
    const district = useSelector(state => state.terminal.district);
    const searchValue = useSelector(state => state.terminal.searchValue);
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getPerformanceList({
            date,
            district,
            searchValue,
            setLoading,
            setError,
            dispatch
        });
        // eslint-disable-next-line
    }, [date, district, searchValue])



    return (<>
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
        {(!loading && error.length <= 0) && <>
            {
                terminals.length <= 0 && <p className='text-3xl tracking-wider text-red-500 text-center p-5 overflow-clip'
                >Can't found performance within given data!</p>
            }
            {
                terminals.length > 0 &&
                <div className='bg-slate-50 rounded-md mt-5 mb-20 pb-5'>
                    <div className='p-1 text-center'>

                        <ul>
                            {
                                terminals.slice((currentPage - 1) * 10, currentPage * 10).map(terminal => <li key={terminal.id}>
                                    <button className={`
                            flex justify-evenly 
                            px-3 py-2 my-3
                            text-gold tracking-wider bg-white  
                            w-full transition-shadow duration-500 hover:shadow-lg`}
                                        onClick={() => navigate(`details/${terminal.terminalID}`)}
                                    >
                                        <p className='mr-4'>{terminal.terminalID}</p>
                                        <p className='mr-1'>|</p>
                                        <p className='flex-1 flex justify-evenly'>
                                            <span className='flex-1'>{terminal.name}</span>

                                            <span className={`flex gap-5 ${terminal.inService > 90
                                                ? 'text-green-700' : terminal.inService > 80
                                                    ? 'text-green-300' : terminal.inService > 70
                                                        ? 'text-yellow-500' : terminal.inService > 50
                                                            ? 'text-red-300' : 'text-red-700'}`}>
                                                <span className='text-gold px-1'>|</span>
                                                {terminal.inService}%
                                                {
                                                    terminal.inService >= 50 && <AiFillLike className='text-2xl' />
                                                }
                                                {
                                                    terminal.inService < 50 && <AiFillDislike className='text-2xl' />
                                                }
                                            </span>
                                        </p>
                                    </button>
                                </li>)
                            }
                        </ul>

                    </div>
                    <Pagination
                        currentPage={currentPage}
                        total={terminals.length}
                        limit={10}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            }
        </>
        }
    </>
    )


}

export default PerformanceList;