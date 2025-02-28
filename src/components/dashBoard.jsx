import React, { useState } from "react";

const rooms = [
  { id: 1, name: "Meeting Room 1", positions: 12, active: true },
  { id: 2, name: "Meeting Room 2", positions: 12 },
  { id: 3, name: "Meeting Room 3", positions: 12 },
  { id: 4, name: "Meeting Room 4", positions: 12 },
  { id: 5, name: "Meeting Room 5", positions: 12 },
];

const positions = Array(7).fill({
  position: "Camera 1 (Video)",
  time: "9 am - 7 pm",
  info: "LP default",
  quantity: 20,
});

const Dashboard = () => {
  const [selectedRoom, setSelectedRoom] = useState(1);

  return (
    <div className="flex min-h-screen bg-black text-white p-5">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 p-4 rounded-lg">
        {rooms.map((room) => (
          <div
            key={room.id}
            onClick={() => setSelectedRoom(room.id)}
            className={`p-4 my-2 rounded-lg cursor-pointer ${
              selectedRoom === room.id ? "bg-purple-500" : "bg-black"
            }`}
          >
            <h3 className="text-lg font-bold">{room.name}</h3>
            <p className="text-sm">{room.positions} Positions</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        <table className="w-full border-collapse border border-purple-500">
          <thead>
            <tr className="bg-black text-white border-b border-purple-500">
              <th className="p-2">Position</th>
              <th className="p-2">Time</th>
              <th className="p-2">Info</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Contractor</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos, index) => (
              <tr key={index} className="border-b border-purple-500">
                <td className="p-2">{pos.position}</td>
                <td className="p-2">{pos.time}</td>
                <td className="p-2 font-bold">{pos.info}</td>
                <td className="p-2">{pos.quantity}</td>
                <td className="p-2">
                  <select className="bg-black border border-purple-500 p-2 rounded">
                    <option>Select Contractor</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-4">
          <button className="p-2 mx-2 border border-purple-500 rounded">←</button>
          <span className="w-4 h-4 bg-purple-500 rounded-full mx-2"></span>
          <button className="p-2 mx-2 border border-purple-500 rounded">→</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
