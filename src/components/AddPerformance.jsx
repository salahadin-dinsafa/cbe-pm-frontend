import { useEffect, useState } from 'react';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import * as xlsx from 'xlsx';
import { addPerformance } from '../app/api';


const AddPerformance = ({ role = 'MANAGER' }) => {
    const [file, setFile] = useState([]);
    const [error, setError] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);

    const navigate = useNavigate();


    const inputCssClass = `border border-brown-100 text-xl h-32 rounded-xl cursor-pointer tracking-wider mb-3
    file:block file:mx-auto file:py-5 file:bg-brown-700 file:text-white file:w-full 
    file:tracking-wider file:hover:bg-brown-100 file:hover:text-brown-700 
    file:border-none  file:cursor-pointer`;

    const submitHandler = (e) => {
        e.preventDefault();
        let date = file[0]['Terminal Performance Report'];

        if (date) {

            date = date.toString().slice(28)
            date = `${date} AM UTC`
            date = (new Date(date)).toISOString()

            let performances = [];
            let average = [];
            file.map((performance, index) => {

                if (performance['__EMPTY_2'] && performance['__EMPTY_2'].toString().startsWith('A')) {
                    performances.push({
                        terminalID: performance['__EMPTY_2'],
                        name: performance['__EMPTY_5'],
                        inService: performance['__EMPTY_11'],
                        date
                    });
                }
                // Cheak only each district performance 
                // possible to add region
                if (performance['__EMPTY_2'] === 'Mean' && file[index-1]['__EMPTY_2'].startsWith('A')) {
                    average.push({
                        terminalID: file[index - 1]['__EMPTY_2'],
                        inService: performance['__EMPTY_11']
                    })
                }
            });
            const props = {
                setError,
                date,
                performances,
                average,
                setIsSuccess
            }
            addPerformance(props);
        } else {
            setError(["Invalid Excel File"])
        }
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

    useEffect(() => {
        if (isSuccess)
            navigate('/', { replace: true })
    }, [isSuccess])

    return (
        <div className={`bg-slate-100 h-fit w-fit mx-auto mt-24 rounded-lg
               flex flex-col text-center text-gold text-lg tracking-wider`}>
            <IoIosCloseCircleOutline className={`p-1 mb-5 ml-auto text-5xl w-fit flex  
                hover:bg-white rounded-full transition duration-500 cursor-pointer `}
                onClick={() => navigate('/', { replace: true })}
            />
            <form onSubmit={submitHandler}>
                <div className={`mb-2 px-10`}>
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
                    py-2
                bg-brown-700
                text-white
                text-xl tracking-wider
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
    )
}

export default AddPerformance