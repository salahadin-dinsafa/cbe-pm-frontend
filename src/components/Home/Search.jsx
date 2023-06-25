import { useEffect, useState } from 'react';

import AsyncSelect from 'react-select/async';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../app/api';
import { addDistricts } from '../../features/districtSlice';
import Loader from '../Loader.jsx';

const Search = () => {
    const districts = useSelector(state => state.district.districts);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true);
        api.get('/district')
            .then(response => {
                setLoading(false);
                dispatch(addDistricts(response.data));
            }).catch(error => {
                setLoading(false);
                setError(error);
                console.log(error);
            })
        setLoading(false)
        // eslint-disable-next-line
    }, [districts])


    const submitHandler = (event) => {
        event.preventDefault();
        // Todo: format search value
        // Todo: Render search terminal
    }

    const loadOptions = (searchValue, cb) => {
        // Todo: generator form api
        // Todo: selected only inteded district
        const modifiedDistricts = districts.map(district => ({
            value: district.name,
            label: district.name
        }))
        const filterdDistricts =
            modifiedDistricts.filter(district =>
                district.label.toLowerCase().includes(searchValue.toLowerCase()))
        cb(filterdDistricts)
    }

    const handleSelectChanger = selectedOption => {
        console.log(selectedOption);
    }

    if (loading) {
        return <Loader />
    } else if (error) {
        return <div>
            {JSON.stringify(error)}
        </div>
    } else {
        return (<div className={`md:flex md:justify-between mt-2 `}>
            {<AsyncSelect className={`mb-2 md:mb-0  py-0 md:px-0 md:mr-10 w-full md:w-64`}
                classNames={{
                    control: ({ isFocused }) =>
                        clsx(
                            `mb-2 md:mb-0 md:mr-10 px-3 w- full md:w-64 rounded-lg border border-brown-700 text-gold`,
                            isFocused ? 'rounded-b-none' : ''
                        ),
                    menu: () =>
                        clsx(`text-gold bg-white p-0.5 border border-brown-700 rounded-b-lg`),
                    option: (state) =>
                        clsx(`mb-1 px-1`, state.isFocused ? 'bg-slate-50 shadow-sm' : '')
                }
                }
                unstyled
                loadOptions={loadOptions}
                defaultOptions={[{
                    value: 'DireDawaDistricts',
                    label: 'DireDawaDistricts'
                }]}
                onChange={handleSelectChanger}
            />}

            <form className="flex-1 flex flex-row justify-evenly">
                <input className={`flex-1 rounded-l-lg px-2 py-0.5 border-2 border-slate-100 
             font-light focus:outline-none focus:border-brown-700`}
                    type="search"
                    placeholder="Search"
                    minLength={1}
                    maxLength={8}
                    onSubmit={submitHandler}
                />
                <button className="bg-brown-700 text-white px-5 rounded-r-lg hover:text-slate-200" type="submit">
                    Search
                </button>
            </form>
        </div>
        )
    }
}

export default Search;