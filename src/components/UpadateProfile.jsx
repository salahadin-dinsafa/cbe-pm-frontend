import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

import { UpdateUser } from "../app/api";



const UpadateProfile = ({ handleUpdateClick }) => {
    const user = useSelector(state => state.profile.user);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState()
    const [error, setError] = useState([]);
    const navigatar = useNavigate();

    const dispatch = useDispatch();



    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)

    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)

    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)

    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const updateUser = {
            firstName,
            lastName,
            password,
            phoneNumber
        }
        
        UpdateUser({ updateUser, handleUpdateClick, navigatar, setError, setPhoneNumber, dispatch })
    }

    const inputCssClass = `flex-1 rounded ml-5 px-2 pb-1 border border-gold focus:border-brown-100
    focus:outline-none`;

    return (
        <div className={`
            w-full
            h-full
            absolute
            top-0
            z-50
            
        `}>
            <div className={`

               bg-slate-100
               h-fit
               lg:w-4/6
               mx-auto
               mt-20 pt-2
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
                    onClick={handleUpdateClick}
                />

                <form onSubmit={onSubmitHandler}>

                    <div className={`
                    flex justify-between 
                    md:w-3/5
                    mx-auto mb-2 px-1
                `}>
                        <label htmlFor="firstname">Firstname:</label>
                        <input
                            className={inputCssClass}
                            type="text"
                            name="firstname"
                            id="firstname"
                            minLength={2}
                            placeholder={user.firstName}
                            onChange={handleFirstNameChange}
                        />
                    </div>
                    <div className={`
                    flex justify-between 
                    md:w-3/5
                    mx-auto mb-2 px-1
                `}>
                        <label htmlFor="lastname">Lastname:</label>
                        <input
                            className={inputCssClass}
                            type="text"
                            name="lastname"
                            id="lastname"
                            minLength={2}
                            placeholder={user.lastName}
                            onChange={handleLastNameChange}
                        />
                    </div>
                    <div className={`
                    flex justify-between 
                    md:w-3/5
                    mx-auto mb-2 px-1
                `}>
                        <label htmlFor="password">Password:</label>
                        <input
                            className={inputCssClass}
                            type="password"
                            name="password"
                            id="password"
                            minLength={8}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className={`
                    flex justify-between 
                    md:w-3/5
                    mx-auto mb-2 px-1
                `}>
                        <label className="text-sm my-auto md:text-lg" htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            className={inputCssClass}
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            minLength={8}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                    <div className={`
                    flex justify-between 
                    md:w-3/5
                    mx-auto mb-2 px-1
                `}>
                        <label className="text-sm my-auto md:text-lg" htmlFor="phonenumber">Phone number:</label>
                        <input
                            className={inputCssClass}
                            type="phone"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder={user.phoneNumber}
                            onChange={handlePhoneNumberChange}
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
                `} type="submit">update</button>
                </form>
                {

                    error.length > 0 && <ul>
                        {
                            error.map((err, index) => <li className="text-red-500" key={index}>
                                {err}
                            </li>)
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default UpadateProfile