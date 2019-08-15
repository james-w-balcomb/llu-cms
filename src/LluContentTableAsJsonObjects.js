import React, { Component } from 'react';

// data: { ..., "table": [ { "col": "dat" }, { "col": "dat" }, { "col": "dat" }, ... ] }
// <Table data={this.state.data}/>

const RenderRow = (props) => {
    return props.keys.map((key, index)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
};

class LluContentTableAsJsonObjects extends Component {

    constructor(props) {
        super(props);
        this.getContentDocumentContentContentTable = this.getContentDocumentContentContentTable.bind(this);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
        this.state = {
            contentDocument: {
                "_id": "5d0b600a8667c43cdc26cb5a",
                "contentDocumentUuid": "de1efb174c7a455598864da9da1b5f5d",
                "contentPagePath": "llu-content-table-as-json-objects",
                "contentPageTitle": "LLU Content Table as Json Objects",
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
                    "table": [
                        {
                            "Column1": "data1",
                            "Column2": "data2",
                            "Column3": "data3"
                        },
                        {
                            "Column1": "data4",
                            "Column2": "data5",
                            "Column3": "data6"
                        },
                        {
                            "Column1": "data7",
                            "Column2": "data8",
                            "Column3": "data9"
                        }
                    ]
                },
                "contentDate": "2019-06-24T15:24:17.860Z",
                "__v": 0
            },
            contentDocumentContentContentTable: []
        };
    }

    componentDidMount() {
        // Fetch a LLU Table Content Document
        // Extract the Table
        this.getContentDocumentContentContentTable(this.state.contentDocument)
    }

    getContentDocumentContentContentTable(contentDocument) {
        this.setState({ contentDocumentContentContentTable: contentDocument.contentContent.table });
        return contentDocument.contentContent.table
    }

    getKeys(jsonArrayOfJsonObjects) {
        const keys = Object.keys(jsonArrayOfJsonObjects[0]);
        return keys
        // return [...new Set(jsonArrayOfJsonObjects)]
    }

    getHeader(jsonArrayOfJsonObjects) {
        const keys = this.getKeys(jsonArrayOfJsonObjects);
        return keys.map((key, index) => {
            return <th key={key}>{key}</th>
        })
    }

    getRowsData(jsonArrayOfJsonObjects){
        const items = jsonArrayOfJsonObjects;
        const keys = this.getKeys(jsonArrayOfJsonObjects);
        return items.map((row, index)=>{
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    };

    render() {

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {this.getHeader(this.state.contentDocument.contentContent.table)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.getRowsData(this.state.contentDocument.contentContent.table)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LluContentTableAsJsonObjects;
