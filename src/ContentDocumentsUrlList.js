import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
class ContentDocumentsUrlList extends Component {

    state = {
        contentDocuments: []
    };

    componentDidMount() {
        fetch(`${process.env.REACT_APP_LLU_API_URL}/page-path-and-title-list`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ contentDocuments: data });
                console.log(this.state.contentDocuments)
            })
            .catch(console.log)
    }

    render() {

        return (

            <Container fluid>
                <Row>
                    <Col>
                        <ListGroup>
                            {this.state.contentDocuments.map((contentDocument) => (
                                <ListGroupItem key={contentDocument.contentPagePath}>
                                    <a key={contentDocument.contentPagePath} href={contentDocument.contentPagePath}>{contentDocument.contentPageTitle}</a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        )

    }

}

export default ContentDocumentsUrlList;
