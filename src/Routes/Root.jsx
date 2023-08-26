import { Outlet } from "react-router-dom";
import MenuBar from "../MenuBar";


const Root = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;