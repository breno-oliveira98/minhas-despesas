import { Outlet } from "react-router-dom";
import Navbar from "../navbar/NavBar";

export const PainelLayout = () => {
    return ( 
        <div>
            <Navbar />
            <Outlet />
        </div>
     );
}