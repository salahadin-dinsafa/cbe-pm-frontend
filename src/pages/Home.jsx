import Search from '../components/Search';
import TerminalList from '../components/TerminalList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (<>
        <Navbar />
        <div className='w-full mx-auto px-10 py-1 md:w-5/6 lg:w-4/6'>
            <Search />
            <TerminalList />
        </div>
        <Footer />
    </>
    )
}

export default Home