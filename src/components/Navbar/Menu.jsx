'use client'

import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsThreeDotsVertical, BsPersonCircle } from 'react-icons/bs';

import { getProfile, getImage } from '../../app/api';

const Menu = ({ handleCloseSetting }) => {
    const login = useSelector(state => state.login.isLogged);
    const avatar = useSelector(state => state.profile.avatar);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!login) {
            getProfile(dispatch, () => { });
            getImage(dispatch);
        } 
        // eslint-disable-next-line
    }, [login])
    
    return (
        <div className='w-fit flex items-center text-gold'>
            <Link to={`/profile`}>
                {
                    login && <img src={avatar} alt='avatar' className={`cursor-pointer border hover:border-gold w-10
                h-10 object-cover object-top rounded-full`} />
                }{
                    !login && < BsPersonCircle className={`cursor-pointer hover:bg-slate-50 text-4xl`} />
                }
            </Link>
            <BsThreeDotsVertical onClick={handleCloseSetting} className='text-4xl cursor-pointer rounded-full ml-3 p-1 hover:bg-slate-50' />
        </div>
    )
}

export default Menu;