import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.PNG';

const Logo = () => {
    return (
        <div className='cursor-pointer items-center w-fit h-fit rounded-full hover:shadow-sm'>
            <Link to='/' >
                <img className='h-14 w-14 object-scale-down rounded-full' src={logo} alt="LogoImage" />
            </Link>
        </div>
    )
}

export default Logo