import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import HeaderTable from "./components/HeaderTable";
import EventTable from "./components/EventTable";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Request from "./Pages/Request";
import { Route, Routes } from "react-router-dom";
import EventDashboard from "./Pages/EventDashboard";

function App() {
  return (
    <Routes>
  <Route
    path="/"
    element={
      <div className="flex px-27  w-fit-md h-[100%] flex-col items-center bg-gradient-to-r from-gray-900 to-purple-900 text-white gap-4">
        <Header />
        <Request />
      </div>
    }
  />
  <Route
    path="/dashboard"
    element={
      <div className="flex px-27 padding-md w-fit-md h-[100%] flex-col items-center bg-gradient-to-r from-gray-900 to-purple-900 text-white gap-4">
        <Header />
        <EventDashboard />
      </div>
    }
  />
</Routes>

  );
}

export default App;