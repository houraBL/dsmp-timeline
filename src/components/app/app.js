import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import './app.css';
import Header from '../header';
import MemberList from '../member-list';
import Timeline from '../timeline';
import ServerInfo from '../server-info';


export default class App extends Component {




    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">DreamSMP</Link>
                            </li>
                            <li>
                                <Link to="/member-list">Members</Link>
                            </li>
                            <li>
                                <Link to="/timeline">Timeline</Link>
                            </li>
                        </ul>
                    </nav>
                    <ServerInfo/>
                    <MemberList/>
                    <Timeline/>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Routes>
                        <Route path="/member-list" component={MemberList}>
                        </Route>
                        <Route path="/timeline" component={Timeline}>
                        </Route>
                        <Route path="/" component={ServerInfo}>
                        </Route>
                    </Routes>
                </div>
                </Router>

            );
        }


    };

//export default App;
