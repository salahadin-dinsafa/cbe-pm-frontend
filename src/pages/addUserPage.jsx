import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer'
import AddUser from "../components/AddUser";

const AddUserPage = () => {
    const { state } = useLocation();

    return (<>
        <Navbar />
        <AddUser role={state.role} />
        <Footer />
    </>)
}

export default AddUserPage;