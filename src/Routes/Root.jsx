import { Outlet } from "react-router-dom";
import MenuBar from "../Components/MenuBar";
import Somoi from "../Components/Somoi";
import Footer from "../Components/Footer";


const Root = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Somoi></Somoi>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;