import React from 'react'

import ContentDocumentForm from './ContentDocumentForm.js'

class EditContentDocument extends React.Component {

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
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_LLU_API_URL}/content/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(result => {
                this.setState({ contentDocument: result });
                console.log(this.state.contentDocument)
            })
            .catch(console.log)
    }

    handleChange(event) {
        console.log("EVENT: onChange");
        console.log("event.target: ", event.target);

        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        console.log("FORM CHANGE:", [name], value);

        console.log(this.state.contentDocument[name]);

        this.setState(prevState => {
            let contentDocument = Object.assign({}, prevState.contentDocument); // creating copy of state variable
            contentDocument[name] = value; // assign a new value to the property
            return { contentDocument }; // return new object
        });


        console.log(this.state.contentDocument[name]);

        console.log(this.state.contentDocument);

    };

    handleClear(event) {
        event.preventDefault();
        this.setState({
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
        })
    }

    handleSubmit(event) {
        console.log("EVENT: onSubmit");
        console.log("event.target: ", event.target);
        console.log("event.currentTarget: ", event.currentTarget);

        event.preventDefault();

        // const documentId = event.currentTarget.getAttribute("id");
        const documentId = this.props.match.params.id;
        console.log("documentId");
        console.log(documentId);

        const contentDocument = this.state.contentDocument;
        console.log("contentDocument");
        console.log(contentDocument);

        const url = `${process.env.REACT_APP_LLU_API_URL}/content/${documentId}`;
        console.log("url");
        console.log(url);

        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contentDocument)
        };
        console.log("options");
        console.log(options);

        fetch(url, options)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log(error));

    };

    render() {

        const formId = "edit-content-form";
        const formClassName="container";

        return (

            <ContentDocumentForm contentDocument={this.state.contentDocument}
                                 id={formId}
                                 className={formClassName}
                                 handleChange={this.handleChange}
                                 handleClear={this.handleClear}
                                 handleSubmit={this.handleSubmit}
            />

        )
    }

}

export default EditContentDocument
