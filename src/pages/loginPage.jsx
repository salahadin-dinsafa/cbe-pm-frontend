'use client'

import { useState } from 'react';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar'
import Loader from '../components/Loader';
import { login } from '../app/api'

const LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { state } = useLocation();

    const inputCssClass = `flex-1 rounded ml-5 px-2 pb-1 border border-gold focus:border-brown-100
    focus:outline-none`;


    const onSubmitHandler = (e) => {
        // Todo: validate both phone and password
        e.preventDefault();
        const loginUser = {
            phoneNumber,
            password
        }
        login({
            loginUser,
            dispatch,
            setLoading,
            setError
        });
    }

    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)

    }


    return (
        <div className={`
            w-full
            h-full
            absolute
            top-0
            z-50          
        `}>
            <Navbar />
            {!loading && <div className={`
               bg-slate-100
               h-80
               lg:w-3/6
               mx-auto lg:mt-32 pt-2
               flex flex-col
               text-center text-gold text-lg tracking-wide
               rounded-xl
            `}>
                <IoIosCloseCircleOutline
                    onClick={() => navigate(state.back)}
                    className={`
                    p-1 ml-auto
                    text-5xl 
                    w-fit 
                    flex  
                    hover:bg-white 
                    rounded-full 
                    transition duration-500 
                    cursor-pointer `} />
                <form className={`flex-1 flex flex-col justify-evenly`}
                    onSubmit={onSubmitHandler}>
                    <div className={`flex justify-evenly md:w-4/5 mx-auto mb-2 px-1`}>
                        <label className=" my-auto text-sm md:text-lg" htmlFor="phonenumber">
                            Phone Number:
                        </label>
                        <input
                            className={inputCssClass}
                            onChange={phoneNumberHandler}
                            value={phoneNumber}
                            type="tel"
                            name="phonenumber"
                            id="phonenumber"
                            minLength={9}
                            maxLength={14}
                            required
                        />
                    </div>
                    <div className={`flex justify-between md:w-4/5 mx-auto mb-2 px-1`}>
                        <label htmlFor="password">Password:</label>
                        <input
                            className={inputCssClass}
                            onChange={passwordHandler}
                            value={password}
                            type="password"
                            name="password"
                            id="password"
                            minLength={8}
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
                    hover:border-brown-100`}
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                {
                    (error.length > 0) && <ul className='text-red-500'>
                        {error.map((err, index) => <li key={index}>
                            {err}
                        </li>)}
                    </ul>
                }
            </div>
            }
            {loading && <div className={`
               h-80
               lg:w-3/6
               mx-auto
               mt-20 lg:mt-48
               flex flex-col
               text-center text-gold text-lg tracking-wide
               rounded-xl
            `}>
                <Loader className='pt-10' />
            </div>
            }
        </div>
    )
}

export default LoginPage