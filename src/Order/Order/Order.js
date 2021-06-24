import React from 'react';
import OrderData from '../../Order/OrderData/OrderData';
const Order = () => {
    return (
        <div
      style={{
        backgroundColor: "#F4F7FC",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* <Navbar /> */}
      <h3 className="text-center mt-5">Ordered Course</h3>
      <div className="row">
        <div className="col-md-2">
          {/* <Sidebar /> */}
        </div>
            <OrderData/>
      </div>
      </div>
    );
};

export default Order;