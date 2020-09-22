import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import NewCourse from "./components/NewCourse";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/courses" component={Courses} />
          <Route path="/new-course" component={NewCourse} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/courses" exact />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
