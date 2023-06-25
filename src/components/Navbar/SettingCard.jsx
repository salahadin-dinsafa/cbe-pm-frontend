import { IoIosCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SettingCard = ({ navigate, settingRef, handleCloseSetting }) => {
    const Menu = [
        "Add User",
        "Add Performance"
    ]

    return (
        <div ref={settingRef} className={`bg-white w-fit py-2 mr-3 absolute right-0 shadow-md rounded-b-lg text-gold`} >
            <ul>
                <div className='text-gold w-full h-fit flex justify-end items-end rounded-full p-1'>
                    <IoIosCloseCircle onClick={handleCloseSetting} className="m-1 hover:bg-slate-50 cursor-pointer" />
                </div>
                {Menu.map((item, index) => <Link to={`/service`} key={index}>
                    <li className={`cursor-pointer hover:bg-slate-50 px-2`}>
                        {item}
                    </li>
                </Link>)
                }
                <hr />
                <li onClick={() => navigate('/login', { state: { back: '/' } })} className={`cursor-pointer hover:bg-slate-50 px-2 mt-1`}>
                    Login
                </li>
            </ul>
        </div>
    )
}

export default SettingCard;