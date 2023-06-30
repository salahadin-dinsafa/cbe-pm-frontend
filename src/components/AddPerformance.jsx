import { useState } from 'react';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import * as xlsx from 'xlsx';
import { addPerformance } from '../app/api';


const AddPerformance = ({ role = 'MANAGER' }) => {
    const [file, setFile] = useState([]);
    const [error, setError] = useState([]);

    const navigate = useNavigate();


    const inputCssClass = `border border-brown-700 h-32 rounded-xl cursor-pointer tracking-wide
    file:block file:mx-auto file:py-5 file:bg-brown-700 file:text-white file:w-full file:cursor-pointer`;

    const submitHandler = (e) => {
        e.preventDefault();
        let date = file[0]['Terminal Performance Report']
            .toString()
            .slice(28)
        date = `${date} AM UTC`
        date = (new Date(date)).toISOString()
        

        let performances = [];
        file.map(performance => {
            if (performance['__EMPTY_2'] && performance['__EMPTY_2'].toString().startsWith('A'))
                performances.push({
                    terminalID: performance['__EMPTY_2'],
                    name: performance['__EMPTY_5'],
                    inService: performance['__EMPTY_11'],
                    date
                });
        });
        const props = {
            setError,
            date,
            performances
        }
        addPerformance(props);
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        try {
            if (e.target.files[0].size > 1200000) {
                throw new Error('size of file extendes')
            }
            else {
                const data = await file.arrayBuffer(file);
                const excelfile = xlsx.read(data);
                const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]]
                const exceljson = xlsx.utils.sheet_to_json(excelsheet);
                setFile(exceljson)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={`
         h-96 md:w-4/6
         mx-auto mt-20 
         px-2 py-3
         rounded-lg       
        `}>
            <div className={`
               bg-slate-100
               h-fit
               lg:w-4/6
               mx-auto
               mt-15 pt-2
               flex flex-col
               text-center text-gold text-lg
                    tracking-wide
            `}>
                <IoIosCloseCircleOutline className={`
                p-1 ml-auto
                text-5xl 
                w-fit flex  
                hover:bg-white 
                rounded-full 
                transition duration-500 cursor-pointer `}
                    onClick={() => navigate('/', { replace: true })}
                />
                <form onSubmit={submitHandler}>
                    <div className={`
                    md:w-3/5
                    mx-auto mb-2 px-1
                `}>
                        <input
                            className={inputCssClass}
                            type="file"
                            name="performance"
                            id="performance"
                            onChange={handleFileChange}
                            accept='.xls, .xlsx'
                            required
                        />
                    </div>

                    <button className={`
                    w-full
                bg-brown-700
                text-white
                text-xl tracking-wide
                rounded
                transition
                duration-500
                border
                border-white
                hover:text-brown-700
                hover:bg-white
                hover:border-brown-100
                `} type="submit">Add Performance</button>

                </form>
                {
                    (error.length > 0) && <ul className='text-red-500'>
                        {error.map((err, index) => <li key={index}>
                            {err}
                        </li>)}
                    </ul>
                }
            </div>
        </div>
    )
}

export default AddPerformance