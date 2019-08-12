import React, { Component } from 'react'
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

    state = {
        contentDocuments: []
    };

    componentDidMount() {
        fetch('http://localhost:3300/content')
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
                        {this.state.contentDocuments.map((contentDocument) => (
                            <Card key={contentDocument.contentPagePath} color="primary">
                                <CardBody>
                                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold">{contentDocument.contentPageTitle}</CardTitle>
                                    <CardSubtitle className="mb-3 font-weight-light text-uppercase">{contentDocument.contentPagePath}</CardSubtitle>
                                    <CardText className="mb-4"> {contentDocument.contentContent}</CardText>
                                    <Row>
                                        <Col xs={'auto'}>
                                            <Button color="success">Call</Button>
                                        </Col>
                                        <Col sm={'auto'}>
                                            <Button color="warning">Message</Button>
                                        </Col>
                                        <Col sm={'auto'}>
                                            <Button color="success">Email</Button>
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

export default ContentDocumentsCards;
