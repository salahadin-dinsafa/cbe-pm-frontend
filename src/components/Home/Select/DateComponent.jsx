import { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

const DateComponent = () => {
    const [startDate, setStartDate] = useState(new Date())
    return (
        <div className='mb-2 lg:mb-0'>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                className={`
                border border-gold rounded-lg
                text-gold text-center text-xl
                focus:outline-none focus:border-brown-700
                px-1 py-2
                 `}
            />
        </div>
    )
}

export default DateComponent