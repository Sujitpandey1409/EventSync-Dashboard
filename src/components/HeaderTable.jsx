import React from "react";
import searchIcon from "../assets/searchIcon.svg";
import { Plus } from "lucide-react";

function HeaderTable() {
  return (
    <div className=" align-items-md-start flex d-flex-md justify-between items-center mb-4 px-4 pt-2">
      <h2 className="text-2xl font-semibold">Event Requests</h2>
      <div className="flex w-full-md">
        <div className="relative w-72">
          <img
            src={searchIcon}
            alt="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white"
          />
          <input
            type="text"
            placeholder="Search here"
            className=".w-full-md pl-10 pr-4 py-2 bg-black text-white rounded-lg border border-white outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <button
          className="flex items-center justify-center w-[34px] h-[34px] p-[5px] border border-white rounded-[4px] 
                 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-md"
        >
          <Plus size={20} color="white" />
        </button>
      </div>
    </div>
  );
}

export default HeaderTable;