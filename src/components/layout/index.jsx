import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";

export const Layout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <Outlet /> 
            </div>
        </div>
    );
};
