'use client'

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Select from '../components/Home/Select/Select';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { getProfile } from '../app/api';
import PerformanceList from '../components/Home/PerformanceList';

const Home = () => {
    const login = useSelector(state => state.login.isLogged);
    const dispatch = useDispatch();


    useEffect(() => {
        if (!login)
            getProfile(dispatch, () => { })
        // eslint-disable-next-line
    }, [])

    return (<>
        <Navbar />
        <div className={`w-full md:w-5/6 lg:w-4/6 mx-auto px-10 py-1}`}>
            <Select />
            <PerformanceList />
        </div>
        <Footer />
    </>
    )
}

export default Home