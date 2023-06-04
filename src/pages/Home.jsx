import Search from '../components/Search';
import TerminalList from '../components/TerminalList';
import Pagination from '../components/Pagination';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return (<>
        <Navbar />
        <div className='bg-rose-50 w-full md:w-4/6 m-auto px-10 py-7'>
            <Search />
            <TerminalList />
            <Pagination />
        </div>
        <Footer />
    </>
    )
}

export default Home