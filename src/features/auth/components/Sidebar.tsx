import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="absolute left-0 top-0 w-64 h-full bg-neutral-600">
      <ul className="relative p-4 top-64">
        <li className="py-2">
          <Link to="/" className="text-white">Dashboard</Link>
        </li>
        <li className="py-2">
          <Link to="/history" className="text-white">History</Link>
        </li>
        <li className="py-2">
          <Link to="/logout" className="text-white">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
