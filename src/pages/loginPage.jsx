'use client'

import { useEffect, useState } from 'react';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import Button from '../components/Button'
import { login } from '../app/api'

const LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const { state } = useLocation();

    const inputCssClass = `flex-1 rounded ml-5 px-2 pb-1 border border-gold focus:border-brown-100
    focus:outline-none`;

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const loginUser = {
            phoneNumber,
            password
        }
        login({
            loginUser,
            dispatch,
            setLoading,
            setError,
            setIsSuccess
        });
    }

    const inputElements = [
        {
            onChange: (e) => setPhoneNumber(e.target.value),
            value: phoneNumber,
            type: "tel",
            name: "phonenumber",
            id: "phonenumber",
            label: "Phone number:",
            minLength: 9,
            maxLength: 14
        },
        {
            onChange: (e) => setPassword(e.target.value),
            value: password,
            type: "password",
            name: "password",
            id: "password",
            label: "Password",
            minLength: 8,
            maxLength: null
        }
    ]

    useEffect(() => {
        if (isSuccess)
            navigate('/', { replace: true })
    }, [isSuccess])


    return (
        <div className={`w-full h-full absolute top-0 z-50`}>
            <Navbar />
            {!loading && <div className={`bg-slate-100 h-fit w-fit mx-auto mt-32 pt-2
               flex flex-col text-center text-gold text-lg tracking-wider rounded-xl`}>
                <IoIosCloseCircleOutline
                    onClick={() => navigate(state.back)}
                    className={`p-1 ml-auto mb-7 text-5xl w-fit flex hover:bg-white 
                    rounded-full transition duration-500 cursor-pointer`} />
                <form className={`flex-1 flex flex-col justify-evenly`}
                    onSubmit={onSubmitHandler}>
                    {
                        inputElements.map(element =>

                            <div className={`flex mb-10 px-5`}>
                                <label className="text-2xl my-auto" htmlFor={`${element.name}`}>
                                    {element.label}
                                </label>
                                <input
                                    className={inputCssClass}
                                    onChange={element.onChange}
                                    value={element.value}
                                    type={element.type}
                                    name={element.name}
                                    id={element.id}
                                    minLength={element.minLength}
                                    maxLength={element.maxLength}
                                    required
                                />
                            </div>
                        )
                    }
                    <Button name='Login' />
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
            {loading && <div className={`h-80 lg:w-3/6 mx-auto mt-20 lg:mt-48 flex flex-col
               text-center text-gold text-lg tracking-wide rounded-xl`}>
                <Loader className='pt-10' />
            </div>
            }
            <Footer />
        </div>
    )
}

export default LoginPage