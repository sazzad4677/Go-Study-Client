import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import Navbar from "../../Shared/Navbar/Navbar";
import Payment from "../Payment/Payment";


const Checkout = () => {
  const { id } = useParams();
  const [loggedIn, setLoggedIn] = useContext(userContext);
  const [carts, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const { name, userEmail } = loggedIn;
  const { courseTitle, price, email } = carts;
  const newCart = { courseTitle, price, email };
  const userInfo = { name, userEmail };
  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  const orderDate = year + "-" + month + "-" + date;

  useEffect(() => {
    fetch("https://murmuring-sands-78848.herokuapp.com/course/" + id)
      .then((res) => res.json())
      .then((data) => setCart(data[0]));
  }, [id]);
  const payment = () => {
    setCheckout(true);
  };
  const handleOrder = (paymentId) => {
    const newOrder = { ...userInfo, ...newCart, orderDate, paymentId };
    fetch("https://murmuring-sands-78848.herokuapp.com/addOrder/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: "#F4F7FC",
          width: "100%",
          height: "100vh",
        }}
      >
        <Navbar />
        <h3 className="text-center mt-5">Order Course</h3>
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>

          <div
            className="col-md-8 ms-5 p-5"
            style={{ backgroundColor: "white" }}
          >
            {!checkout && (
              <table className="table table-borderless ">
                <thead>
                  <tr>
                    <th scope="col">Course Name</th>
                    <th scope="col">Course Price</th>
                    <th scope="col">Manage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{courseTitle}</td>
                    <td>{price}</td>
                    <td>
                      <button onClick={payment} className="btn brand-btn">
                        Checkout
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
            {checkout && (
              <div className="col-md-5">
                <h6 className="mb-4">Please enter your card details</h6>
                <Payment handelPayment={handleOrder} />
                <button
                  className="btn brand-btn mt-2"
                  onClick={() => {
                    setCheckout(false);
                  }}
                >
                  Go Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
