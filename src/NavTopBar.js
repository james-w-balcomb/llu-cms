import React, { Component } from "react";
import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    NavbarBrand,
    NavbarToggler
} from 'reactstrap';

import ContentDropdown from './ContentDropdown.js'
import SiteDropdown from './SiteDropdown.js'

const LLU_CONTENT_URLS_ENDPOINT = 'http://localhost:3300/page-path-and-title-list';

class NavTopBar extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.state = {
            isOpen: false,
            contentDocuments: []
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    select(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            value: event.target.innerText
        });
    }

    changeValue(event) {
        this.setState({
            dropDownValue: event.currentTarget.textContent
        });
        let id = event.currentTarget.getAttribute("id");
        console.log(id);
    }

    fetchPagePathAndTile = () => {
        fetch(LLU_CONTENT_URLS_ENDPOINT)
            .then(response => response.json())
            .then(result => this.setState({ contentDocuments: result }));
    };

    componentDidMount() {
        this.fetchPagePathAndTile();
    }

    render() {
        return (
            <div>

                <Navbar color="faded" light expand="md">

                    {/* Brand Name */}
                    <NavbarBrand href="/">
                        LLU
                    </NavbarBrand>

                    {/* Add toggler to auto-collapse */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>

                        {/* Pull left */}
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/add-content-document">
                                    add-content-document
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/content-documents-url-list">
                                    content-documents-url-list
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/content-documents-cards">
                                    content-documents-cards
                                </NavLink>
                            </NavItem>
                        </Nav>

                        {/* Pull right */}
                        <Nav className="mr-auto" navbar>
                            <ContentDropdown />
                        </Nav>

                        {/* Pull right */}
                        <Nav className="mr-auto" navbar>
                            <SiteDropdown />
                        </Nav>

                    </Collapse>

                </Navbar>

            </div>
        );
    }

}

export default NavTopBar
