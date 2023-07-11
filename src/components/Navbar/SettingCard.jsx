import { Link } from 'react-router-dom';

const SettingCard = ({ navigate, settingRef, user }) => {

    const itemClass = `cursor-pointer hover:bg-slate-50 my-2`

    return (
        <div ref={settingRef} className={`z-50 bg-white w-fit p-2 mr-3 absolute right-0 
        shadow-md rounded-b-lg text-gold text-xl tracking-wider border`} >
            <ul>
                <li className={itemClass}
                    onClick={() => navigate('/add_user', { state: { role: user.role } })}
                >
                    Add User
                </li>
                <Link to="/add_performance">
                    <li className={`${itemClass} mb-0`}>
                        Add Performance
                    </li>
                </Link>
                <hr />
                <li onClick={() => navigate('/login', { state: { back: '/' } })} className={`${itemClass} text-end`}>
                    Login
                </li>
            </ul>
        </div >
    )
}

export default SettingCard;