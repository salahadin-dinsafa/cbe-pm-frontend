'use client'

import { useSelector } from 'react-redux';
import { useState } from 'react';

import Menu from './Menu'
import Setting from './Setting';
import Logo from './Logo';


function Navbar() {
    const [closeSetting, setCloseSetting] = useState(true);
    const profile = useSelector(state => state.profile.profile);

    const handleCloseSetting = () => {
        setCloseSetting(!closeSetting);
    }

    return (<>
        <div className={`shadow-sm w-full static flex justify-between px-7 md:px-10 py-2
        ${profile ? 'blur' : ''}`}>
            <Logo />
            <Menu handleCloseSetting={handleCloseSetting} />
        </div >
        {
            !closeSetting && <Setting handleCloseSetting={handleCloseSetting} />
        }
    </>
    )
}

export default Navbar