import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';

import "react-datepicker/dist/react-datepicker.css";
import { setDate } from '../../../features/terminalSlice';

const DateComponent = () => {
    const date = useSelector(state => state.terminal.date);
    const dispatch = useDispatch();

    return (
        <div className='mb-2 lg:mb-0'>
            <DatePicker
                selected={!date ? new Date() : date}
                onChange={date => dispatch(setDate(date))}
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