
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {AiFillLike, AiFillDislike} from 'react-icons/ai'

import { getPerformanceList } from '../../app/api';
import Pagination from './Pagination';
import Loader from '../Loader';

const PerformanceList = () => {
    const terminals = useSelector(state => state.terminal.terminals)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState([]);

    useEffect(() => {
        getPerformanceList({
            setLoading,
            setError,
            dispatch
        });
        // eslint-disable-next-line
    }, [])


    const clickHandler = () => {
        // Todo: redirect to detail page

    }



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
        {(!loading && error.length <= 0) && <div className='bg-slate-50 rounded-md mt-5 mb-20 pb-5'>
            <div className='p-1 text-center'>
                <ul>
                    {
                        terminals.map(terminal => <li key={terminal.id}>
                                <button className={`
                            flex justify-between 
                            px-3 py-2 my-3
                            text-gold tracking-wider bg-white  
                            w-full transition-shadow duration-500 hover:shadow-lg`}
                                    onClick={clickHandler}
                                >
                                    <p className='mr-4'>{terminal.terminalID}</p>
                                    <p className='mr-1'>|</p>
                                    <p className='flex-1 flex justify-evenly'>
                                        <span className='w-20 md:w-64 overflow-hidden'>{terminal.name}</span>
                                        <span className=''>|</span>
                                        <span className={`flex gap-5 ${terminal.inService > 90
                                            ? 'text-green-700' : terminal.inService > 80
                                                ? 'text-green-300' : terminal.inService > 70
                                                    ? 'text-yellow-500' : terminal.inService > 50
                                                        ? 'text-red-300' : 'text-red-700'}`}>
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
            <Pagination />
        </div>
        }
    </>
    )


}

export default PerformanceList;