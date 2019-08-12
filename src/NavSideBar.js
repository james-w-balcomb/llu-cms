import React, { Component } from "react";
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem} from "reactstrap";

class NavSideBar extends Component {

    state = {
        contentDocuments: []
    };

    componentDidMount() {
        fetch('http://localhost:3300/page-path-and-title-list')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contentDocuments: data });
                console.log(this.state.contentDocuments)
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <ListGroup>
                    {this.state.contentDocuments.map((contentDocument) => (
                        <ListGroupItem key={contentDocument.contentPagePath}>
                            <Link key={contentDocument.contentPagePath} to={contentDocument.contentPagePath}>{contentDocument.contentPageTitle}</Link>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        )
    }

}

export default NavSideBar;
