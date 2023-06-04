import { Link } from 'react-router-dom';
import { BsThreeDotsVertical, BsPersonCircle } from 'react-icons/bs';

import logo from '../assets/images/logo.PNG';


function Navbar() {

    return (
        <div className='shadow-sm w-full static mb-2 flex justify-between px-10 pt-2'>
            <div className='cursor-pointer items-center w-fit h-fit'>
                <Link to='' >
                    <img className='h-14 w-14 object-scale-down rounded-full ' src={logo} alt="LogoImage" />
                </Link>
            </div>
            <div className='w-16 flex justify-between items-center text-gold'>
                <BsPersonCircle onClick={() => console.log('todo')} className='text-3xl cursor-pointer rounded-full p-1 hover:bg-slate-300' />
                <BsThreeDotsVertical onClick={() => console.log('todo')} className='text-2xl cursor-pointer rounded-full p-1 hover:bg-slate-300' />
            </div>
        </div >
    )
}

export default Navbar