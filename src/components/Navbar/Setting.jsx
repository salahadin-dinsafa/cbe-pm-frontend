'use client';

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import SettingCard from './SettingCard';

const Setting = ({ handleCloseSetting }) => {
    const settingRef = useRef();
    const navigate = useNavigate();


    const closeSetting = (e) => {
        if (settingRef.current && !settingRef.current.contains(e.target))
            handleCloseSetting();
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeSetting)
    })

    return <SettingCard navigate={navigate} settingRef={settingRef} handleCloseSetting={handleCloseSetting} />
}

export default Setting