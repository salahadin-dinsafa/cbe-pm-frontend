import Search from '../components/Search';
import TerminalList from '../components/TerminalList';
import Pagination from '../components/Pagination';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (<>
        <Navbar />
        <div className='w-full mx-auto px-10 py-7 md:w-4/6 '>
            <Search />
            <TerminalList />
            <Pagination />
        </div>
        <Footer />
    </>
    )
}

export default Home