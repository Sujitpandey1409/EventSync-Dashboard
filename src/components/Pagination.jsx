import React from "react";

function Pagination() {
  return (
    <div className="flex justify-center space-x-2 mt-4 p-2 bg-[#000000]">
      <button className="bg-gray-800 text-white p-2 rounded">←</button>
      <button className="bg-pink-600 text-white p-2 rounded">1</button>
      <button className="bg-gray-800 text-white p-2 rounded">2</button>
      <button className="bg-gray-800 text-white p-2 rounded">3</button>
      <button className="bg-gray-800 text-white p-2 rounded">4</button>
      <button className="bg-gray-800 text-white p-2 rounded">→</button>
    </div>
  );
}

export default Pagination;