import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.PNG';

const Logo = () => {
    return (
        <div className={`
        border 
        p-0.5 
        cursor-pointer 
        w-fit h-fit 
        rounded-full 
        hover:shadow-sm hover:border-gold 
        `}>
            <Link to='/' >
                <img className='h-14 w-14 object-scale-down' src={logo} alt="LogoImage" />
            </Link>
        </div>
    )
}

export default Logo