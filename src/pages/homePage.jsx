import Select from '../components/Home/Select/Select';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import PerformanceList from '../components/Home/PerformanceList';

const Home = () => {
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