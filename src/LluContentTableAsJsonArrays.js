import React, { Component } from 'react';
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";

// data: { ..., "table": [ { "col": "dat" }, { "col": "dat" }, { "col": "dat" }, ... ] }
// <Table data={this.state.data}/>

class LluContentTableAsJsonArrays extends Component {

    state = {
        contentDocuments: {
            "_id": "5d0b600a8667c43cdc26cb5a",
            "contentDocumentUuid": "de1efb174c7a455598864da9da1b5f5d",
            "contentPagePath": "llu-content-table-as-json-arrays",
            "contentPageTitle": "LLU Content Table as Json Arrays",
            "contentType": "table",
            "contentCategory": "computer-science",
            "contentKeywords": "test-keyword-1, test-keyword-2",
            "contentSearchTerms": "test-search-term-1, test-search-term-2",
            "contentTags": [
                "test-tag-1"
            ],
            "contentRelatedContent": "test-page-path",
            "contentDateAdded": "2001-01-01 01:01:01",
            "contentDateEdited": "2001-01-01 01:01:01",
            "contentDatePublished": "2001-01-01 01:01:01",
            "contentDateRedacted": "2001-01-01 01:01:01",
            "contentDateDeleted": "2001-01-01 01:01:01",
            "contentContent": {
                "description": "A Table of JSON Objects",
                "table": {
                    "fields": ["Column1", "Column2", "Column3"],
                    "data": [
                        ["data1", "data2", "data3"],
                        ["data4", "data5", "data6"],
                        ["data7", "data8", "data9"]
                    ]
                },
            },
            "contentDate": "2019-06-24T15:24:17.860Z",
            "__v": 0
        }
    };

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

export default LluContentTableAsJsonArrays;
