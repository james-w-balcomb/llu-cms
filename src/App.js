import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

import Home from './Home.js';
import AddContentDocument from './AddContentDocument.js';
import ContentDocumentsUrlList from './ContentDocumentsUrlList.js';
import ContentDocumentsCards from './ContentDocumentsCards.js';
import NavTopBar from "./NavTopBar";
import NavSideBar from "./NavSideBar";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <NavTopBar />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 d-none d-sm-block">
                            <div className="well sidebar-nav">
                                <NavSideBar />
                            </div>
                        </div>
                        <div className="col-md">
                            <Route exact path="/" component={Home}/>
                            <Route path="/add-content-document" component={AddContentDocument} />
                            <Route path="/content-documents-url-list" component={ContentDocumentsUrlList} />
                            <Route path="/content-documents-cards" component={ContentDocumentsCards} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
