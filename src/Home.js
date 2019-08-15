import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>
                        HOME
                    </h2>
                    <p>
                        Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p>
                        Duis a turpis sed lacus dapibus elementum sed eu lectus.
                    </p>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="/add-content-document">add-content-document</a>
                        </li>
                        <li>
                            <a href="/content-documents-url-list">content-documents-url-list</a>
                        </li>
                        <li>
                            <a href="/content-documents-cards">content-documents-cards</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/llu-content-table-as-json-objects">llu-content-table-as-json-objects</a>
                        </li>
                        <li>
                            <a href="/llu-content-table-as-json-arrays">llu-content-table-as-json-arrays</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;
