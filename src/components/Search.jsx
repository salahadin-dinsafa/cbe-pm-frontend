import AsyncSelect from 'react-select/async';
import clsx from 'clsx';


const Search = () => {
    const districts = [
        { value: 'DireDawaDistrict', label: 'DireDawaDistrict' },
        { value: 'JijigaDistrict', label: 'JijigaDistrict' },
        { value: 'BahirDarDistrict', label: 'BahirDarDistrict' },
        { value: 'GonderDistrict', label: 'GonderDistrict' },
        { value: 'HawassaDistrict', label: 'HawassaDistrict' }
    ]

    const submitHandler = (event) => {
        event.preventDefault();
        // Todo: format search value
        // Todo: Render search terminal
    }

    const loadOptions = (searchValue, cb) => {
        // Todo: generator form api
        // Todo: selected only inteded district
        setTimeout(() => {
            const filterdDistricts =
                districts.filter(district =>
                    district.label.toLowerCase().includes(searchValue.toLowerCase()))
            cb(filterdDistricts)
        }, 500)
    }

    const handleSelectChanger = selectedOption => {
        console.log(selectedOption);
    }

    return (<div className="md:flex md:justify-between">

        <AsyncSelect className={`
         mb-2 md:mb-0  py-0 md:px-0 md:mr-10
         w-full md:w-64
         `}
            classNames={{
                control: ({ isFocused }) =>
                    clsx(
                        `mb - 2 md:mb-0 md:mr-10 px-3
                         w- full md:w-64
                        rounded-lg
                        border-brown-700
                        border
                        text-gold`,
                        isFocused ? 'rounded-b-none' : ''
                    ),
                menu: () => clsx(
                    `text-gold bg-white p-0.5 border border-700 rounded-b-lg`
                ),
                option: (state) => clsx(
                    `mb-1 px-1`,
                    state.isFocused ? 'bg-slate-50 shadow-sm' : ''
                ),

            }
            }
            unstyled
            defaultOptions={[districts[0], districts[1]]}
            loadOptions={loadOptions}
            onChange={handleSelectChanger}
        />

        <form className="flex-1 flex flex-row justify-evenly">
            <input className={`
            flex-1 
            rounded-l-lg
             px-2 py-0.5 
             border-2 border-slate-100 
             font-light 
             focus:outline-none focus:border-brown-700`}
                type="search"
                placeholder="Search"
                minLength={1}
                maxLength={8}
                onSubmit={submitHandler}
            />
            <button className="
            bg-brown-700 
            text-white px-5 
            rounded-r-lg hover:text-slate-200 "
                type="submit"
            >
                Search
            </button>
        </form>
    </div>
    )
}

export default Search;