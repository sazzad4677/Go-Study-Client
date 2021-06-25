import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components//Home/Home/Home";
import Checkout from "./components/Checkout/Checkout/Checkout";
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";
import AddCourse from "./components/Dashboard/AddCourse/AddCourse";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import AddTeacher from "./components/Dashboard/AddTeacher/AddTeacher";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import ManageCourses from "./components/Dashboard/ManageCourses/ManageCourses";
import Login from "./components/Login/Login";
import NoMatch from "./components/NoMatch/NoMatch";
import Order from "./components/Order/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext();
function App() {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <userContext.Provider value={[loggedIn, setLoggedIn]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addCourse/">
            <AddCourse />
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
