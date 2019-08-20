import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

import Home from './Home.js';
import AddContentDocument from './AddContentDocument.js';
import EditContentDocument from './EditContentDocument.js';
import ContentDocumentsUrlList from './ContentDocumentsUrlList.js';
import ContentDocumentsCards from './ContentDocumentsCards.js';
import NavTopBar from "./NavTopBar";
import NavSideBar from "./NavSideBar";
import LluContentTableAsJsonObjects from "./LluContentTableAsJsonObjects";
import LluContentTableAsJsonArrays from "./LluContentTableAsJsonArrays";
import ViewContentDocument from "./ViewContentDocument.js"

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
                            <Route path="/llu-content-table-as-json-objects" component={LluContentTableAsJsonObjects} />
                            <Route path="/llu-content-table-as-json-arrays" component={LluContentTableAsJsonArrays} />
                            <Route path="/add-content-document" component={AddContentDocument} />
                            <Route path="/edit-content-document/:id" component={EditContentDocument} />
                            <Route path="/view-content-document/:id" component={ViewContentDocument} />
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
