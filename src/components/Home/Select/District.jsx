import AsyncSelect from 'react-select/async';
import clsx from 'clsx';

const District = ({ districts }) => {

    const loadOptions = (searchValue, cb) => {
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

    return (
        <AsyncSelect className={`mx-0 lg:mx-5 mb-2 lg:mb-0 w-full lg:w-64`}
            classNames={{
                control: ({ isFocused }) =>
                    clsx(
                        `mb-2 md:mb-0 md:mr-10 px-3 w- full md:w-64 rounded-lg border border-gold text-gold`,
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
                value: 'Dire Dawa',
                label: 'Dire Dawa'
            }]}
            onChange={handleSelectChanger}
        />
    )
}

export default District;