import React from 'react';
import { FaBox, FaChartBar, FaClipboardList, FaUsers } from 'react-icons/fa';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/admin/dashboard', name: 'Dashboard', icon: <FaChartBar /> },
    { path: '/admin/products', name: 'Products', icon: <FaBox /> },
    { path: '/admin/orders', name: 'Orders', icon: <FaClipboardList /> },
    { path: '/admin/users', name: 'Users', icon: <FaUsers /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 text-xl font-bold border-b">Admin Panel</div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-4 hover:bg-gray-100 ${
                location.pathname === item.path ? 'bg-gray-100' : ''
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <Outlet /> {/* Load nội dung trang con */}
      </div>
    </div>
  );
};

export default AdminLayout;
