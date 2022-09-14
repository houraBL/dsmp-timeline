import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link,
  NavLink,
} from "react-router-dom";

import "./app.css";
//import Header from '../header';
import Members from "../members";
import Timeline from "../timeline";
import ServerInfo from "../server-info";

import { MembersPage, TimelinePage } from "../pages";

export default class App extends Component {
  state = {
    selectedMember: null,
    hasError: false,
  };

  onMemberSelected = (pageid) => {
    this.setState({
      selectedMember: pageid,
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.hasError) {
      return <div>Error has occurred</div>;
    }
    
    return (
      <Router>
        <div>
          <nav className="nav">
            <div className="site-title">
              <NavLink to="/">DreamSMP</NavLink>
            </div>
            <ul>
              <li>
                <NavLink to="/members">Members</NavLink>
              </li>
              <li>
                <NavLink to="/timeline">Timeline</NavLink>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<ServerInfo />} exact />
            <Route path="/members" element={<MembersPage />} exact />
            <Route
              path="/members/:id"
              render={() => {
                <h2>member id</h2>;
              }}
            />
            <Route path="/timeline" element={<TimelinePage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

//export default App;
