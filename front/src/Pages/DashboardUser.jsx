import Sidebar from "../Components/Sidebar/Sidebar";
import UserDashTop from "../Components/UserDashTop/UserDashTop";

const DashboardUser = () => {
  return (
    <div className="dashboard">
      <div className="dashboardContainer">
        <Sidebar />
        <div className="userDashTop">
            <UserDashTop />
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
