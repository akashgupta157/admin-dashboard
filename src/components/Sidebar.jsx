import {
  Home,
  Users,
  Utensils,
  Package,
  Wallet,
  FileEdit,
  BarChart2,
  CreditCard,
  UserCog,
  Settings,
} from "lucide-react";
import { NavLink, useLocation } from "react-router";

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { name: "Dashboard Overview", icon: Home, path: "/dashboard" },
    { name: "Student Management", icon: Users, path: "/students" },
    { name: "Vendor / Menu Management", icon: Utensils, path: "/vendors" },
    { name: "Inventory $ Stock Management", icon: Package, path: "/inventory" },
    {
      name: "Transactions / Wallet Management",
      icon: Wallet,
      path: "/transactions",
    },
    {
      name: "UPI Manual Recharge Entry",
      icon: FileEdit,
      path: "/manual-entry",
    },
    { name: "Report & Exports", icon: BarChart2, path: "/reports" },
    { name: "RFID Management", icon: CreditCard, path: "/rfid" },
    { name: "User Roles & Access Control", icon: UserCog, path: "/users" },
    { name: "School Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      <nav className="mt-4">
        <ul>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={`flex items-center px-4 py-3 transition-colors ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="truncate">{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
