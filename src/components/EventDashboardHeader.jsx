import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventDashboardHeader = () => {
  const [activeTab, setActiveTab] = useState("Assign Coordinator");
  const navigate = useNavigate()

  return (
    <div className="bg-gradient-to-r from-gray-900 to-purple-900 p-6 text-white">
      {/* Header */}
      <div className="flex items-center text-2xl font-semibold mb-4">
        <span onClick={()=> navigate('/')} className="mr-2 cursor-pointer">←</span> {/* Back Button */}
        Event Name <span className="text-gray-400 text-lg ml-2">(Venue Details)</span>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b border-gray-600 pb-2 overfolw-auto-md">
        {["Event Details", "Assign Coordinator/Coordinator", "Session Management", "Generate SOW"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm border ${
              activeTab === tab ? "border-pink-400 bg-pink-500" : "border-gray-500 hover:border-pink-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-4 grid grid-cols-2 gap-4 border border-blue-400 p-4 rounded-md">
        {/* Assign Coordinator */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Assign Coordinator</h2>
          <select className="w-full bg-gray-800 border border-gray-500 text-white rounded-md p-2">
            <option>Search Coordinator</option>
            <option>Coordinator 1</option>
            <option>Coordinator 2</option>
          </select>
          <p className="text-pink-400 mt-2 cursor-pointer">Add New Coordinator</p>
        </div>

        {/* Event Details */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Event Name <span className="text-gray-400">(Venue Here)</span></h2>
          <p>Start: <span className="font-bold">12-12-2023</span> Ends: <span className="font-bold">15-12-2023</span></p>
          <p className="mt-2">Venue Address: <span className="font-bold">Some Location 12, Name Here, City, State.</span></p>
        </div>
      </div>
    </div>
  );
};

export default EventDashboardHeader;
