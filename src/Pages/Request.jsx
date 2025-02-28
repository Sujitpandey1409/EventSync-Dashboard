import React from "react";
import HeaderTable from "../components/HeaderTable";
import EventTable from "../components/EventTable";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";
const Request = () => {
    return (
        <div className="flex w-fit-md bg-gradient-to-r from-gray-900 to-purple-900 text-white gap-4 w-[100%]">
            <div className="sidebar-container h-[auto] pb-[17px] d-none-md">
                <Sidebar />
            </div>
            <div className="flex  flex-col flex-grow p-4 border-pink-500">
                <div className="table-header-pagination-container">
                    <HeaderTable />
                    <EventTable />
                    <Pagination />
                </div>
            </div>
        </div>
    );
}

export default Request;