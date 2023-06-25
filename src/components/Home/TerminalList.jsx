import Pagination from './Pagination';
import api from '../../app/api';
import { addTerminals } from '../../features/terminalSlice';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader';

const TerminalList = () => {
    const terminals = useSelector(state => state.terminal.terminals)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        api.get('/terminal', {
        }).then(response => {
            dispatch(addTerminals(response.data));
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false)
            setError(err);
        })
        // eslint-disable-next-line
    }, [])

    // const terminals = [
    //     { id: 1, name: 'Hurso', terminalID: 'ADD00001' },
    //     { id: 2, name: 'Hurso', terminalID: 'ADD00002' },
    //     { id: 3, name: 'Hurso', terminalID: 'ADD00003' },
    //     { id: 4, name: 'Hurso', terminalID: 'ADD00004' },
    //     { id: 5, name: 'Hurso', terminalID: 'ADD00005' },
    //     { id: 6, name: 'Hurso', terminalID: 'ADD00006' },
    //     { id: 7, name: 'Hurso', terminalID: 'ADD00007' },
    //     { id: 8, name: 'Hurso', terminalID: 'ADD00008' },
    //     { id: 9, name: 'Hurso', terminalID: 'ADD00009' },
    //     { id: 10, name: 'Hurso', terminalID: 'ADD00010' },
    // ]
    const clickHandler = () => {
        // Todo: redirect to detail page

    }

    if (loading) {
        return <Loader />
    } else if (error) {
        return <div>
            {JSON.stringify(error)}
        </div>
    } else {



    return (
        <div className='bg-slate-50 rounded-md mt-5 mb-20 pb-5'>
            <div className='p-2 text-center'>
                <ul>
                    {
                        terminals.map(terminal => <li key={terminal.id}>
                            <button className={`
                            flex justify-between 
                            px-3 py-3 my-3
                            text-gold bg-white  
                            w-full transition-shadow duration-500 hover:shadow-lg`}
                                onClick={clickHandler}
                            >
                                <p className='mr-4'>{terminal.terminalID}</p>
                                <p className='mr-1'>|</p>
                                <p className='flex-1 flex justify-evenly'>
                                    <span className='w-20 md:w-64 overflow-hidden'>{terminal.name}</span>
                                    <span className=''>|</span>
                                    <span>{70}%</span>
                                </p>
                            </button>
                        </li>)
                    }
                </ul>
            </div>
            <Pagination />
        </div>
    )

}
}

export default TerminalList;