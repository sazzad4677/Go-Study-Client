import React from "react";
import Order from "../../Order/Order/Order.js";
import Navbar from "../../Shared/Navbar/Navbar.js";
import Sidebar from "../Sidebar/Sidebar.js";
const Dashboard = () => {
  return (
    <section
      style={{
        backgroundColor: "#F4F7FC",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-12">
          <Order />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
