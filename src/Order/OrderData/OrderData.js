import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";

const OrderData = () => {
  const [loggedIn, setLoggedIn] = useContext(userContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://murmuring-sands-78848.herokuapp.com/orders?email=" + loggedIn.userEmail)
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, [loggedIn.userEmail]);
  return (
    <div className="col-md-8 ms-5 " style={{ backgroundColor: "white" }}>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Course Price</th>
            <th scope="col">Teacher Email</th>
            <th scope="col">Student Name</th>
            <th scope="col">Student Email</th>
            <th scope="col">Payment ID</th>
            <th className="w-25" scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.courseTitle}</td>
              <td>${order.price}</td>
              <td>{order.email}</td>
              <td>{order.name}</td>
              <td>{order.userEmail}</td>
              <td>{order.paymentId}</td>
              {/* <td>
              {loggedIn.admin && (
                <select className="form-select" aria-label="Default select example">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              )}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderData;
