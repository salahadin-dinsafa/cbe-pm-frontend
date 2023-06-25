import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer'
import AddUser from '../components/AddUser';
import AddPerformance from "../components/AddPerformance";

const ServicePage = () => {
    return (<div>
        <Navbar />
        {
            // <AddUser />
            <AddPerformance />
        }
        <Footer />

    </div>)
}

export default ServicePage;