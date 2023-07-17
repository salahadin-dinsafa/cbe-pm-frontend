import { useEffect, useState } from 'react';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import { addUser } from '../app/api';
import Loader from './Loader';
import Button from './Button';

const AddUser = ({ role }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedRole, setSelectedRole] = useState();
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);
  const isLogged = useSelector(state => state.login.isLogged);
  const [isSuccess, setIsSuccess] = useState(false);


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

  const inputCssClass = `flex-1 rounded ml-5 pr-2 pb-1 border border-gold focus:border-brown-100
    focus:outline-none`;

  const handleSelectedRoleChange = (e) => {
    setSelectedRole(e.target.value)

  }


  const inputObject = [
    {
      type: 'text',
      name: 'firstname',
      minLength: 3,
      label: 'Firstname:',
      onChange: (e) => setFirstName(e.target.value),
    },
    {
      type: 'text',
      name: 'lastname',
      label: 'Lastname:',
      minLength: 3,
      onChange: (e) => setLastName(e.target.value),
    },
    {
      type: 'tel',
      name: 'phonenumber',
      label: 'Phone number:',
      minLength: 9,
      onChange: (e) => setPhoneNumber(e.target.value),
    },
  ]

  const submitHandler = (e) => {
    e.preventDefault();
    const props = {
      firstName,
      lastName,
      phoneNumber,
      selectedRole,
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
          {
            inputObject.map((element, index) => <div key={index} className={`flex justify-between mx-3 mb-5 px-1`}>
              <label className={`${element.name === 'phonenumber' ? 'text-lg md:text-2xl' : ''}`} htmlFor={element.label}>{element.label}</label>
              <input
                className={inputCssClass}
                type={element.type}
                name={element.name}
                id={element.name}
                minLength={element.minLength}
                onChange={element.onChange}
                required
              />
            </div>)
          }
          <div className={`flex justify-between mx-3 mb-5 px-1`}>
            <label htmlFor="role">Role:</label>
            <select
              className={inputCssClass}
              name='role'
              id='role'
              value={selectedRole}
              onChange={handleSelectedRoleChange}
              required>
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
          <Button name='Add User' />

        </form >
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