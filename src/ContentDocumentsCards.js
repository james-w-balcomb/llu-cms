import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardText
} from 'reactstrap';

class ContentDocumentsCards extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.nextPath = this.nextPath.bind(this);
        this.state = {
            contentDocuments: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3300/content')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contentDocuments: data });
                console.log(this.state.contentDocuments)
            })
            .catch(console.log)
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

    handleClickDelete(event) {

        const documentId = event.currentTarget.getAttribute("id");

        const data = { "isDeleted": true };

        const url = "http://localhost:3300/content/" + documentId;

        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };

        fetch(url, options)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log(error));
    }

    render() {

        return (

            <Container fluid>
                <Row>
                    <Col>
                        {this.state.contentDocuments.map((contentDocument) => (
                            <Card key={contentDocument.contentPagePath} color="primary">
                                <CardBody>
                                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold">{contentDocument.contentPageTitle} (Deleted: {contentDocument.isDeleted})</CardTitle>
                                    <CardSubtitle className="mb-3 font-weight-light text-uppercase">{contentDocument.contentPagePath}</CardSubtitle>
                                    <CardText className="mb-4"> {contentDocument.contentContent}</CardText>
                                    <Row>
                                        <Col sm={'auto'}>
                                            <Button id={"/view-content-document/" + contentDocument.contentPagePath} onClick={this.handleClick} color="success">View</Button>
                                        </Col>
                                        <Col sm={'auto'}>
                                            <Button id={"/edit-content-document/" + contentDocument._id} onClick={this.handleClick} color="warning">Edit</Button>
                                        </Col>
                                        <Col sm={'auto'}>
                                            <Button id={contentDocument._id} onClick={this.handleClickDelete} color="danger">Delete</Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>

        )

    }

}

export default withRouter(ContentDocumentsCards);
