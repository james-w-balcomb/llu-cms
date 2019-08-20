import React, { Component } from "react";

class ViewContentDocument extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentDocument: {
                contentDocumentUuid: "",
                contentPagePath: "",
                contentPageTitle: "",
                contentType: "",
                contentCategory: "",
                contentKeywords: "",
                contentSearchTerms: "",
                contentTags: [],
                contentRelatedContent: "",
                contentDateAdded: "",
                contentDateEdited: "",
                contentDatePublished: "",
                contentDateRedacted: "",
                contentDateDeleted: "",
                contentContent: "",
                isDeleted: ""
            }
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        console.log(this.props.match.params.id);
        fetch(`http://localhost:3300/content/page-path/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(result => {
                this.setState({ contentDocument: result });
                console.log(this.state.contentDocument)
            })
            .catch(console.log)
    }

    render() {
        console.log("ViewContentDocument");
        return (
            <div className="container">
                <h1>{this.props.match.params.id}</h1>
                <div>
                    Document ID:
                    {this.state.contentDocument.contentDocumentUuid}
                </div>
                <div>
                    Is Deleted:
                    {this.state.contentDocument.isDeleted}
                </div>
                <div>
                    Page Title:
                    {this.state.contentDocument.contentPageTitle}
                </div>
                <div>
                    Page Path:
                    {this.state.contentDocument.contentPagePath}
                </div>
                <div>
                    Type:
                    {this.state.contentDocument.contentType}
                </div>
                <div>
                    Category:
                    {this.state.contentDocument.contentCategory}
                </div>
                <div>
                    Keywords:
                    {this.state.contentDocument.contentKeywords}
                </div>
                <div>
                    Search Terms:
                    {this.state.contentDocument.contentSearchTerms}
                </div>
                <div>
                    Tags:
                    {this.state.contentDocument.contentTags}
                </div>
                <div>
                    Related Content:
                    {this.state.contentDocument.contentRelatedContent}
                </div>
                <div>
                    Date Added:
                    {this.state.contentDocument.contentDateAdded}
                </div>
                <div>
                    Date Edited:
                    {this.state.contentDocument.contentDateEdited}
                </div>
                <div>
                    Date Published:
                    {this.state.contentDocument.contentDatePublished}
                </div>
                <div>
                    Date Redacted:
                    {this.state.contentDocument.contentDateRedacted}
                </div>
                <div>
                    Date Deleted:
                    {this.state.contentDocument.contentDateDeleted}
                </div>
                <div>
                    Content:
                    {this.state.contentDocument.contentContent}
                </div>
            </div>
        )
    }
}

export default ViewContentDocument;
