'use client'

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsThreeDotsVertical, BsPersonCircle } from 'react-icons/bs';

const Menu = ({ handleCloseSetting }) => {
    const login = useSelector(state => state.login.isLogged);
    const avatar = useSelector(state => state.profile.avatar);

    const avatarCssClass = `cursor-pointer w-9 h-9  object-fill border-1 border-gold rounded-full  border  hover:bg-slate-50`;

    return (
        <div className='w-20 flex justify-between items-center text-gold'>
            <Link to={`/profile`}>
                {
                    login && <img src={avatar} alt='avatar' className={avatarCssClass} />
                }{
                    !login && < BsPersonCircle className={avatarCssClass} />
                }
            </Link>
            <BsThreeDotsVertical onClick={handleCloseSetting} className='text-3xl cursor-pointer rounded-full p-1 hover:bg-slate-50' />
        </div>
    )
}

export default Menu;