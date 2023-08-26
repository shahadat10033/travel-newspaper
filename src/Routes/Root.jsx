import { Outlet } from "react-router-dom";
import MenuBar from "../Components/MenuBar";
import Somoi from "../Components/Somoi";


const Root = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Somoi></Somoi>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;