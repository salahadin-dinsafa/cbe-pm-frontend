'use client'

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsThreeDotsVertical, BsPersonCircle } from 'react-icons/bs';

const Menu = ({ handleCloseSetting }) => {
    const login = useSelector(state => state.login.isLogged);
    const avatar = useSelector(state => state.profile.avatar);

    return (
        <div className='w-fit flex items-center text-gold'>
           
                
                <Link to={`/profile`}>
                    {
                    login && <img src={avatar} alt='avatar' className={`cursor-pointer border border-gold w-10
                h-10
                object-cover
                object-top
                rounded-full`} />
                    }{
                    !login && < BsPersonCircle className={`cursor-pointer hover:bg-slate-50 text-3xl`} />
                    }
                </Link>
            
            <BsThreeDotsVertical onClick={handleCloseSetting} className='text-3xl cursor-pointer rounded-full ml-3 p-1 hover:bg-slate-50' />
        </div>
    )
}

export default Menu;