import React from 'react'

import ContentDocumentForm from './ContentDocumentForm.js'

class AddContentDocument extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contentDocument: {
                isDeleted: "false",
                contentDocumentUuid: 'de1efb174c7a455598864da9da1b5f5d',
                contentPagePath: 'test-page-path',
                contentPageTitle: 'Test Page Title',
                contentType: 'table',
                contentCategory: 'computer-science',
                contentKeywords: "test-keyword-1, test-keyword-2",
                contentSearchTerms: "test-search-term-1, test-search-term-2",
                contentTags: "test-tag-1",
                contentRelatedContent: "test-page-path",
                contentDateAdded: "2001-01-01 01:01:01",
                contentDateEdited: "2001-01-01 01:01:01",
                contentDatePublished: "2001-01-01 01:01:01",
                contentDateRedacted: "2001-01-01 01:01:01",
                contentDateDeleted: "2001-01-01 01:01:01",
                contentContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit. Enim tortor at auctor urna nunc id cursus. Facilisis volutpat est velit egestas. Viverra justo nec ultrices dui. Quis vel eros donec ac. Sit amet facilisis magna etiam tempor. Laoreet non curabitur gravida arcu ac tortor dignissim. Integer enim neque volutpat ac tincidunt vitae. Sit amet luctus venenatis lectus."
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                contentDocumentUuid: 'de1efb174c7a455598864da9da1b5f5d',
                contentPagePath: 'test-page-path',
                contentPageTitle: 'Test Page Title',
                contentType: 'table',
                contentCategory: 'computer-science',
                contentKeywords: "test-keyword-1, test-keyword-2",
                contentSearchTerms: "test-search-term-1, test-search-term-2",
                contentTags: "test-tag-1",
                contentRelatedContent: "test-page-path",
                contentDateAdded: "2001-01-01 01:01:01",
                contentDateEdited: "2001-01-01 01:01:01",
                contentDatePublished: "2001-01-01 01:01:01",
                contentDateRedacted: "2001-01-01 01:01:01",
                contentDateDeleted: "2001-01-01 01:01:01",
                contentContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit. Enim tortor at auctor urna nunc id cursus. Facilisis volutpat est velit egestas. Viverra justo nec ultrices dui. Quis vel eros donec ac. Sit amet facilisis magna etiam tempor. Laoreet non curabitur gravida arcu ac tortor dignissim. Integer enim neque volutpat ac tincidunt vitae. Sit amet luctus venenatis lectus.",
                isDeleted: "false"
            }
        })
    }

    handleSubmit(event) {
        console.log("EVENT: onSubmit");
        console.log("event.target: ", event.target);
        console.log("event.currentTarget: ", event.currentTarget);

        event.preventDefault();

        const contentDocument = this.state.contentDocument;
        console.log("contentDocument");
        console.log(contentDocument);

        const url = "http://localhost:3300/content/";
        console.log("url");
        console.log(url);

        const options = {
            method: "POST",
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

        const formId = "add-content-form";
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

export default AddContentDocument
