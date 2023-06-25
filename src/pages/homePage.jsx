import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Search from '../components/Home/Search';
import TerminalList from '../components/Home/TerminalList';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import { getProfile } from '../app/api';

const Home = () => {
    const login = useSelector(state => state.login.isLogged);
    const dispatch = useDispatch();


    useEffect(() => {
        if (!login)
            getProfile(dispatch, () => { })
        // eslint-disable-next-line
    }, [login])

    return (<>
        <Navbar />
        <div className={`w-full md:w-5/6 lg:w-4/6 mx-auto px-10 py-1}`}>
            <Search />
            <TerminalList />
        </div>
        <Footer />
    </>
    )
}

export default Home