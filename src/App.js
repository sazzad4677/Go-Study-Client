import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout/Checkout/Checkout";
import AddAdmin from "./Dashboard/AddAdmin/AddAdmin";
import AddCourse from "./Dashboard/AddCourse/AddCourse";
import AddReview from "./Dashboard/AddReview/AddReview";
import AddTeacher from "./Dashboard/AddTeacher/AddTeacher";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import ManageCourses from "./Dashboard/ManageCourses/ManageCourses";
import Home from "./Home/Home/Home";
import Login from "./Login/Login";
import NoMatch from "./NoMatch/NoMatch";
import Order from "./Order/Order/Order";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
export const userContext = createContext();
function App() {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <userContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addCourse/">
            <AddCourse/>
          </PrivateRoute>
          <PrivateRoute path="/addTeacher">
            <AddTeacher />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageCourse">
            <ManageCourses />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/course/:id">
              <Checkout />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
