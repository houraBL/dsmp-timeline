import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    //Link,
    NavLink
  } from "react-router-dom";

import './app.css';
//import Header from '../header';
import MemberList from '../member-list';
import Timeline from '../timeline';
import ServerInfo from '../server-info';


export default class App extends Component {


    render() {
        return (
            <Router>
                <div>
                    <nav className="nav">
                        <div className="site-title"><NavLink to="/" >DreamSMP</NavLink></div>
                        <ul>
                            <li>
                                <NavLink to="/member-list">Members</NavLink>
                            </li>
                            <li>
                                <NavLink to="/timeline">Timeline</NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Routes>
                        <Route path="/member-list" element={<MemberList/>}/>
                        <Route path="/timeline" element={<Timeline/>}/>
                        <Route path="/" element={<ServerInfo/>}/>
                    </Routes>
                </div>
                </Router>

            );
        }

    };

//export default App;
