import { useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router";
import Sidebar from "@/components/Sidebar";
import StatsCard from "../components/StatsCard";
import RecentTransactions from "../components/RecentTransactions";
import { Users, Wallet, Activity, Package, AlertCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("loggedIn");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto ml-64">
        <Header onLogout={handleLogout} />
        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatsCard
              title="Total Students"
              value="560"
              icon={<Users className="h-4 w-4 text-gray-500" />}
              description={"+12% from last month"}
            />
            <StatsCard
              title="Today's Transactions"
              value="₹25,000"
              icon={<Activity className="h-4 w-4 text-gray-500" />}
              description={"+8.1% from yesterday"}
            />
            <StatsCard
              title="Wallet Balance"
              value="₹2,50,750"
              icon={<Wallet className="h-4 w-4 text-gray-500" />}
              description={"Current available balance"}
            />
            <StatsCard
              title="Inventory Stock"
              value="250/570"
              icon={<Package className="h-4 w-4 text-gray-500" />}
              description={"42% of total capacity"}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Low Stock Alert</AlertTitle>
              <AlertDescription>
                Pancake mix is running low (only 15 units left). Reorder soon.
              </AlertDescription>
            </Alert>
          </div>
          <RecentTransactions />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
