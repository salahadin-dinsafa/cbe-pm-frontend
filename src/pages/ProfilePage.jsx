import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import UpdateProfile from '../components/UpadateProfile';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

import { setIsBlured } from '../features/profileSlice';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [displayUpdateProfile, setDisplayUpdateProfile] = useState(false);
  const profileState = useSelector(state => state.profile.profile);
  const login = useSelector(state => state.login.isLogged);
  const user = useSelector(state => state.profile.user);
  const avatar = useSelector(state => state.profile.avatar);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    setDisplayUpdateProfile(!displayUpdateProfile);
    dispatch(setIsBlured(!profileState));
  }

  useEffect(() => {
    if (!login)
      navigate('/login', { replace: true })
    // eslint-disable-next-line
  }, [login])


  return (<>
    <Navbar />
    {login && <div className={`bg-slate-50 h-96 md:w-4/6 mx-auto mt-20 px-2 py-3
         rounded-lg ${profileState ? 'blur' : ''}`}>
      <div className={`bg-white w-fit h-fit flex mx-auto rounded-full p-1`}>
        <img className={`w-24 h-24 object-cover object-top rounded-full`}
          src={avatar}
          alt="avatar" />
      </div>
      <div className={`w-fit h-52 mx-auto text-gold text-center
        flex flex-col justify-evenly`}>
        <h1 className='text-4xl'>{user.firstName} {user.lastName}</h1>
        <h3 className='text-3xl'>{user.district}</h3>
        <h5 className='text-2xl'>{user.role}</h5>
        <h6 className='text-xl'>{user.phoneNumber}</h6>
      </div>
      <div className="text-end md:w-4/6 mx-auto">
        <button className={`
          bg-brown-700
          text-white text-md tracking-wide
          px-5 py-3
          rounded-lg
          cursor-pointer
          transition
          duration-500
          border
          border-white
          hover:text-brown-700
          hover:bg-white
          hover:border-brown-100
        `}
          onClick={handleUpdateClick}
        >Update Profile</button>
      </div>
    </div>
    }
    {
      displayUpdateProfile && <UpdateProfile handleUpdateClick={handleUpdateClick} />
    }
    <Footer />
  </>
  )
}

export default ProfilePage