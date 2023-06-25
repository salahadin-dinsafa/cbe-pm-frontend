'use client'

import { Link } from 'react-router-dom';
import { BsThreeDotsVertical, BsPersonCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useState } from 'react';


import Setting from './Setting';
import Logo from './Logo';


function Navbar() {
    const [closeSetting, setCloseSetting] = useState(true);

    const profile = useSelector(state => state.profile.profile);
    const login = useSelector(state => state.login.isLogged);
    const avatar = useSelector(state => state.profile.avatar);

    const avatarCssClass = `text-3xl cursor-pointer object-cover rounded-full p-1 hover:bg-slate-50`;

    const handleCloseSetting = () => {
        setCloseSetting(!closeSetting);
    }

    return (<>
        <div className={`shadow-sm w-full static flex justify-between px-7 md:px-10 pt-2
        ${profile ? 'blur' : ''}`}>
            <Logo />
            <div className='w-16 flex justify-between items-center text-gold'>
                <Link to={`/profile`}>
                    {
                        login && <img src={avatar} alt='avatar' width='40rem' className={avatarCssClass} />
                    }{
                        !login && < BsPersonCircle className={avatarCssClass} />
                    }
                </Link>
                <BsThreeDotsVertical onClick={handleCloseSetting} className='text-2xl cursor-pointer rounded-full p-1 hover:bg-slate-50' />

            </div>
        </div >
        {
            !closeSetting && <Setting handleCloseSetting={handleCloseSetting} />
        }
    </>
    )
}

export default Navbar