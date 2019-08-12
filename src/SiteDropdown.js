import React from "react";
import {withRouter} from 'react-router-dom';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";

class SiteDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.nextPath = this.nextPath.bind(this);
        this.state = {
            dropDownValue: ""
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

    render() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Site Menu
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem id="account" onClick={this.handleClick}>
                        Account
                    </DropdownItem>
                    <DropdownItem id="settings" onClick={this.handleClick}>
                        Settings
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem id="logout" onClick={this.handleClick}>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
}

export default withRouter(SiteDropdown);
