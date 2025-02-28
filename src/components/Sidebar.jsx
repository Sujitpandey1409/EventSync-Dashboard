import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logoutIcon from "../assets/Upload.svg";

function Sidebar() {
  const [isEventsOpen, setIsEventsOpen] = useState(true);
  const [isUsersOpen, setIsUsersOpen] = useState(false);

  return (
    <div className="w-60 h-full bg-black text-white p-4 flex flex-col justify-between border-r shadow-lg neon-border rounded">
      <div>
        <div
          className="flex items-center justify-between p-3 rounded-lg cursor-pointer bg-pink-500/20 border border-pink-400 neon-shadow"
          onClick={() => setIsEventsOpen(!isEventsOpen)}
        >
          <span className="text-pink-400 font-bold text-lg">Events</span>
          {isEventsOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isEventsOpen && (
          <ul className="mt-2 pl-4 border-l-2 border-pink-400">
            <li className="p-2 rounded-lg bg-pink-500/50 text-white">New Requests</li>
            <li className="p-2 text-gray-400 hover:text-white cursor-pointer">Estimate</li>
            <li className="p-2 text-gray-400 hover:text-white cursor-pointer">Events</li>
            <li className="p-2 text-gray-400 hover:text-white cursor-pointer">Partial Requests</li>
          </ul>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <h2 className="text-gray-300 text-lg">Positions</h2>
        <h2 className="text-gray-300 text-lg">Contractors</h2>

        {/* Users Section */}
        <div
          className="flex items-center justify-between p-3 rounded-lg cursor-pointer bg-pink-500/20 border border-pink-400 neon-shadow"
          onClick={() => setIsUsersOpen(!isUsersOpen)}
        >
          <span className="text-pink-400 font-bold text-lg">Users</span>
          {isUsersOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {isUsersOpen && (
          <ul className="mt-2 pl-4 border-l-2 border-pink-400">
            <li className="p-2 text-gray-400 hover:text-white cursor-pointer">Admins</li>
            <li className="p-2 text-gray-400 hover:text-white cursor-pointer">Clients</li>
            <li className="p-2 text-gray-400 hover:text-white cursor-pointer">Coordinators</li>
          </ul>
        )}

        <h2 className="text-gray-300 text-lg">Profile</h2>
      </div>

      <button className="flex items-center justify-center gap-2 bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition mt-auto border border-gray-700">
        <img src={logoutIcon} alt="" />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
