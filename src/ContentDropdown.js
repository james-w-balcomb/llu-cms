import React from "react";
import {withRouter} from 'react-router-dom';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";

const LLU_CONTENT_URLS_ENDPOINT = 'http://localhost:3300/page-path-and-title-list';

class ContentDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.nextPath = this.nextPath.bind(this);
        this.state = {
            dropDownValue: "",
            contentDocuments: []
        };
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    handleClick(event) {
        this.setState({
            value: event.currentTarget.textContent
        });
        let id = event.currentTarget.getAttribute("id");
        console.log("id: " + id);
        this.nextPath(id)
    }

    fetchPagePathAndTile = () => {
        fetch(LLU_CONTENT_URLS_ENDPOINT)
            .then(response => response.json())
            .then(result => this.setState({ contentDocuments: result }));
        console.log("this.state.contentDocuments: " + this.state.contentDocuments);
    };

    componentDidMount() {
        this.fetchPagePathAndTile();
        console.log("this.state.contentDocuments: " + this.state.contentDocuments);
    }

    render() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Contents
                </DropdownToggle>
                <DropdownMenu >
                    {this.state.contentDocuments.map(contentDocument => (
                        <DropdownItem
                            id={contentDocument.contentPagePath}
                            key={contentDocument.contentPagePath}
                            onClick={this.handleClick}
                        >
                            {contentDocument.contentPagePath}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
}

export default withRouter(ContentDropdown);
