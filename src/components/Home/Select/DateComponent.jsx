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
                p-1
                 `}
            />
        </div>
    )
}

export default DateComponent