import { useState } from 'react';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const AddUser = ({ role = 'MANAGER' }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  const Is = [
    'OPERATORS'
  ]

  const Manager = [
    'IS',
    'OPERATORS'
  ]

  const Admin = [
    'MANAGER'
  ]


  const inputCssClass = `flex-1 rounded ml-5 px-2 pb-1 border border-gold focus:border-brown-100
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

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className={`
         h-96 md:w-4/6
         mx-auto mt-20 
         px-2 py-3
         rounded-lg       
        `}>
      <div className={`
               bg-slate-100
               h-fit
               lg:w-4/6
               mx-auto
               mt-15 pt-2
               flex flex-col
               text-center text-gold text-lg
                    tracking-wide
            `}>
        <IoIosCloseCircleOutline className={`
                p-1 ml-auto
                text-5xl 
                w-fit flex  
                hover:bg-white 
                rounded-full 
                transition duration-500 cursor-pointer `}
          onClick={() => navigate('/', { replace: true })}
        />
        <form onSubmit={submitHandler}>
          <div className={`
                    flex justify-between 
                    md:w-3/5
                    mx-auto mb-2 px-1
                `}>
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
          <div className={`
                    flex justify-between 
                    md:w-3/5
                    mx-auto mb-2 px-1
                `}>
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
          <div className={`
                    flex justify-between 
                    md:w-3/5
                    mx-auto mb-2 px-1
                `}>
            <label className="text-sm my-auto md:text-lg" htmlFor="phonenumber">Phone number:</label>
            <input
              className={inputCssClass}
              type="phone"
              name="phonenumber"
              id="phonenumber"
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className={`
                    flex justify-between 
                    md:w-3/5
                    mx-auto mb-2 px-1
                `}>
            <label className="text-sm my-auto md:text-lg" htmlFor="role">Role:</label>
            <select className={inputCssClass}>
              {
                role === 'ADMIN' &&
                Admin.map(staff => <option key={staff} value={staff}>{staff} </option>)
              }
              {
                role === 'MANAGER' &&
                Manager.map(staff => <option key={staff} value={staff}>{staff} </option>)
              }
              {
                role === 'IS' &&
                Is.map(staff => <option key={staff} value={staff}>{staff} </option>)
              }
            </select>
          </div>
          <button className={`
                    w-full
                bg-brown-700
                text-white
                text-xl tracking-wide
                rounded
                transition
                duration-500
                border
                border-white
                hover:text-brown-700
                hover:bg-white
                hover:border-brown-100
                `} type="submit">Add User</button>

        </form>
      </div>
    </div>
  )
}

export default AddUser