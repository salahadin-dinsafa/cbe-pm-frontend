'use client';

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import SettingCard from './SettingCard';
import { useSelector } from 'react-redux';

const Setting = ({ handleCloseSetting }) => {
    const user = useSelector(state => state.profile.user);
    const settingRef = useRef();
    const navigate = useNavigate();

    const closeSetting = (e) => {
        if (settingRef.current && !settingRef.current.contains(e.target))
            handleCloseSetting();
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeSetting)
    })

    return <SettingCard navigate={navigate} settingRef={settingRef} user={user} />
}

export default Setting