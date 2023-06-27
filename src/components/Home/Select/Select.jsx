import { useEffect, useState } from 'react';


import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../Loader.jsx';
import { getDistricts } from '../../../app/api';
import District from './District';
import Search from './Search';

const Select = () => {
    const districts = useSelector(state => state.district.districts);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDistricts({ setLoading, setError, dispatch });
        // eslint-disable-next-line
    }, [districts])

    return (<div>
        {
            loading && <Loader />
        }
        {
            error && <p className='text-red-500'>
                {
                    error
                }
            </p>
        }
        {
            (!loading && !error) && <div className={`md:flex md:justify-between mt-2 `}>
                < District districts={districts} />
                <Search />
            </div>
        }
    </div>
    )

}

export default Select;