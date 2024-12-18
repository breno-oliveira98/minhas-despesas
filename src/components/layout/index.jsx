import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";

export const Layout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Outlet /> 
            </div>
        </div>
    );
};
