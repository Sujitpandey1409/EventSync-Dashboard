import React from "react";
import { useNavigate } from "react-router-dom";

const events = new Array(10).fill({
  name: "Filled Name",
  start: "Jan 12, 2024",
  end: "Jan 14, 2024",
  client: "Muhammad Asad",
  contact: "+1234 566 7890",
  venue: "Lorem Ipsum Dolor Sit Amet",
  status: "Confirmed",
  remarks: "N/A"
});

function EventTable() {
  const navigate = useNavigate();
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[800px] border-collapse border border-pink-500">
        <thead>
          <tr className="bg-pink-600 text-white">
            <th className="p-2 border border-pink-500 sticky left-0 bg-pink-600 z-10">Event Name</th>
            <th className="p-2 border border-pink-500">Event Start</th>
            <th className="p-2 border border-pink-500">Event End</th>
            <th className="p-2 border border-pink-500">Client Name</th>
            <th className="p-2 border border-pink-500">Contact Info</th>
            <th className="p-2 border border-pink-500">Venue</th>
            <th className="p-2 border border-pink-500">Status</th>
            <th className="p-2 border border-pink-500">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr 
              onClick={() => navigate('/dashboard')} 
              key={index} 
              className="text-gray-300 hover:bg-gray-800"
            >
              <td className="p-2 border border-pink-500 sticky left-0 bg-black z-10">{event.name}</td>
              <td className="p-2 border border-pink-500">{event.start}</td>
              <td className="p-2 border border-pink-500">{event.end}</td>
              <td className="p-2 border border-pink-500">{event.client}</td>
              <td className="p-2 border border-pink-500">{event.contact}</td>
              <td className="p-2 border border-pink-500">{event.venue}</td>
              <td className="p-2 border border-pink-500">{event.status}</td>
              <td className="p-2 border border-pink-500">{event.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;
