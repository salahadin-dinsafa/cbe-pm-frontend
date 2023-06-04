
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.webp';




function Navbar() {

    return (
        <div className='shadow-sm w-full static left-0'>
            <div className='md:flex md:px-10 pr-5 md:justify-between'>
                <div className='cursor-pointer items-center'>
                    <Link to='' >
                        <img src={logo} alt="LogoImage" className="rounded-full h-10 md:h-16" />
                    </Link>


                </div>

            </div>
        </div >
    )
}

export default Navbar