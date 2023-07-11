import { useEffect, useState } from 'react';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import { addUser } from '../app/api';
import Loader from './Loader';

const AddUser = ({ role }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedRole, setSelectedRole] = useState();
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const isLogged = useSelector(state => state.login.isLogged);
  const [isSuccess, setIsSuccess] = useState(false);
  const [district, setDistrict] = useState('')


  const navigate = useNavigate();

  const IS = [
    '',
    'OPERATOR'
  ]

  const Manager = [
    '',
    'IS',
    'OPERATOR'
  ]

  const Admin = [
    '',
    'DISTRICT_IS_MG'
  ]


  const inputCssClass = `flex-1 rounded ml-5 pr-2 pb-1 border border-gold focus:border-brown-100
    focus:outline-none`;

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)

  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)

  }
  const handleSelectedRoleChange = (e) => {
    setSelectedRole(e.target.value)

  }
  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const props = {
      firstName,
      lastName,
      phoneNumber,
      selectedRole,
      role,
      setLoading,
      setError,
      setIsSuccess

    }

    addUser(props);
  }

  useEffect(() => {
    if (!isLogged)
      navigate('/login')
  }, [isLogged])

  return (<>
    {loading && <div className={`h-80 lg:w-3/6 mx-auto mt-20 lg:mt-48 flex flex-col
               text-center text-gold text-lg tracking-wide rounded-xl`}>
      <Loader className='pt-10' />
    </div>
    }
    {!loading &&
      <div className={`bg-slate-100 h-fit w-fit mx-auto mt-16 flex flex-col
               text-center text-gold text-2xl tracking-wider rounded`}>
        <IoIosCloseCircleOutline className={`p-1 mb-2 ml-auto text-5xl w-fit flex  
                hover:bg-white rounded-full transition duration-500 cursor-pointer `}
          onClick={() => navigate('/')}
        />
        <form onSubmit={submitHandler}>
          <div className={`flex justify-between mx-3 mb-5 px-1`}>
            <label htmlFor="firstname">Firstname:</label>
            <input
              className={inputCssClass}
              type="text"
              name="firstname"
              id="firstname"
              minLength={2}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className={`flex justify-between mx-3 mb-5 px-1`}>
            <label htmlFor="lastname">Lastname:</label>
            <input
              className={inputCssClass}
              type="text"
              name="lastname"
              id="lastname"
              minLength={2}
              onChange={handleLastNameChange}
            />
          </div>
          <div className={`flex justify-between mx-3 mb-5 px-1`}>
            <label className='text-lg md:text-2xl' htmlFor="phonenumber">Phone number:</label>
            <input
              className={inputCssClass}
              type="tel"
              name="phonenumber"
              id="phonenumber"
              onChange={handlePhoneNumberChange}
            />
          </div>
          {
            role === 'ADMIN' && <div className={`flex justify-between mx-3 mb-5 px-1`}>
              <label htmlFor="role">District:</label>
              <select value={district} onChange={handleDistrictChange} className={inputCssClass}>
                <option value='DIRE DAWA'>DIRE DAWA</option>
                <option value='JIJIGA'>JIJIGA</option>
                <option value='HAWASA'>HAWASA</option>
                <option value='GONDER'>GONDER</option>
              </select>
            </div>
          }{role !== 'ADMIN' &&
            <div className={`flex justify-between mx-3 mb-5 px-1`}>
              <label htmlFor="role">Role:</label>
              <select value={selectedRole} onChange={handleSelectedRoleChange} className={inputCssClass}>
                {
                  role === 'ADMIN' &&
                  Admin.map(staff => <option key={staff} value={staff}>{staff} </option>)
                }
                {
                  role === 'DISTRICT_IS_MG' &&
                  Manager.map(staff => <option key={staff} value={staff}>{staff} </option>)
                }
                {
                  role === 'IS' &&
                  IS.map(staff => <option key={staff} value={staff}>{staff} </option>)
                }
              </select>
            </div>
          }
          <button className={`
                    w-full
                    py-2
                bg-brown-700
                text-white
                text-2xl
                transition
                duration-500
                border
                border-white
                hover:text-brown-700
                hover:bg-white
                hover:border-brown-100
                `} type="submit">Add User</button>

        </form>
        {
          (error.length > 0) && <ul className='text-red-500'>
            {error.map((err, index) => <li key={index}>
              {err}
            </li>)}
          </ul>
        }{
          isSuccess && <p className='text-2xl text-green-700 tracking-wider'>Succesfuly Added</p>
        }
      </div>
    }
  </>
  )
}

export default AddUser