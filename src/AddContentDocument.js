import React from 'react'

// <input className="form-check-input" name="isDeleted" type="radio" value="TRUE">True</input>
// input is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.
// <input type="radio" name="react-tips" value="option1" checked={true} className="form-check-input"/>
// Warning: Failed prop type: You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.
// <input type="text" name="contentDocumentUuid" value="de1efb174c7a455598864da9da1b5f5d" /><br />
// Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

// <form id="content-form" method="post" action="http://localhost:3300/content">
// <form onSubmit={this.handleOnSubmitEvent}>
// <form id="content-form" method="post" action="http://localhost:3300/content" onSubmit={this.handleOnSubmitEvent}>

class AddContentDocument extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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

        };
        this.handleOnSubmitEvent = this.handleOnSubmitEvent.bind(this);
    }

    handleOnChangeEvent = eventOnChange => {
        console.log("EVENT: onChange");
        console.log("eventOnChange.target: ", eventOnChange.target);

        const target = eventOnChange.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log("FORM CHANGE:", [name], value);

    };

    handleOnSubmitEvent = eventOnSubmit => {
        console.log("EVENT: onSubmit");
        console.log("eventOnSubmit.target: ", eventOnSubmit.target);

        // eventOnSubmit.preventDefault()
        // this.props.history.push('/')
    };

    render() {
        return (

            <form
                id="content-form"
                method="post"
                action="http://localhost:3300/content"
                onSubmit={this.handleOnSubmitEvent}
            >

                <div className="form-group">
                    <div className="form-check">
                        <label className="form-check-label">Is DELETED?</label>
                        <label className="form-check-label">
                            <input className="form-check-input"
                                   type="radio"
                                   name="isDeleted"
                                   onChange={this.handleOnChangeEvent}
                                   value="true"
                                   checked={this.state.isDeleted === "true"}
                            />
                            True
                        </label>
                        <label className="form-check-label">
                            <input className="form-check-input"
                                   type="radio"
                                   name="isDeleted"
                                   onChange={this.handleOnChangeEvent}
                                   value="false"
                                   checked={this.state.isDeleted === "false"}
                            />
                            False
                        </label>
                    </div>
                </div>

                <label htmlFor="uuid">UUID:</label><br />
                <input
                    type="text"
                    name="contentDocumentUuid"
                    onChange={this.handleOnChangeEvent}
                    value={this.state.contentDocumentUuid}
                /><br />

                <label htmlFor="page-path">Page Path:</label><br />
                <input
                    type="text"
                    name="contentPagePath"
                    onChange={this.handleOnChangeEvent}
                    value={this.state.contentPagePath}
                /><br />

                <label htmlFor="page-title">Page Title:</label><br />
                <input
                    type="text"
                    name="contentPageTitle"
                    onChange={this.handleOnChangeEvent}
                    value={this.state.contentPageTitle}
                /><br />

                <label htmlFor="content-type">Content Type:</label><br />
                <input
                    type="radio"
                    name="contentType"
                    onChange={this.handleOnChangeEvent}
                    value="table"
                    checked={this.state.contentType === 'table'}
                />Table<br />
                <input
                    type="radio"
                    name="contentType"
                    onChange={this.handleOnChangeEvent}
                    value="text"
                    checked={this.state.contentType === 'text'}
                />Text<br />
                <input
                    type="radio"
                    name="contentType"
                    onChange={this.handleOnChangeEvent}
                    value="raw"
                    checked={this.state.contentType === 'raw'}
                />Raw<br />

                <label htmlFor="content-category">Category:</label><br />
                <input
                    type="radio"
                    name="contentCategory"
                    onChange={this.handleOnChangeEvent}
                    value="computer-science"
                    checked={this.state.contentCategory === 'computer-science'}
                />Computer Science<br />
                <input
                    type="radio"
                    name="contentCategory"
                    onChange={this.handleOnChangeEvent}
                    value="software-development"
                    checked={this.state.contentCategory === 'software-development'}
                />Software Development<br />
                <input
                    type="radio"
                    name="contentCategory"
                    onChange={this.handleOnChangeEvent}
                    value="internet-of-things"
                    checked={this.state.contentCategory === 'internet-of-things'}
                />Internet Of Things<br />
                <input
                    type="radio"
                    name="contentCategory"
                    onChange={this.handleOnChangeEvent}
                    value="electronics"
                    checked={this.state.contentCategory === 'electronics'}
                />Electronics<br />
                <input
                    type="radio"
                    name="contentCategory"
                    onChange={this.handleOnChangeEvent}
                    value="miscellaneous"
                    checked={this.state.contentCategory === 'miscellaneous'}
                />Miscellaneous<br />

                <label htmlFor="keywords">Keywords:</label><br />
                <input
                    type="text"
                    name="contentKeywords"
                    onChange={this.handleOnChangeEvent}
                    value={this.state.contentKeywords}
                /><br />

                <label htmlFor="search-terms">Search Terms:</label><br />
                <input
                    type="text"
                    name="contentSearchTerms"
                    onChange={this.handleOnChangeEvent}
                    value={this.state.contentSearchTerms}
                /><br />

                <label htmlFor="tags">Tags:</label><br />
                <input
                    type="text"
                    name="contentTags"
                    onChange={this.handleOnChangeEvent}
                    value={this.state.contentTags}
                /><br />

                <label htmlFor="related-content">Related Content:</label><br />
                <input
                    type="text"
                    name="contentRelatedContent"
                    onChange={this.handleOnChangeEvent}
                    value={this.state.contentRelatedContent}
                /><br />

                <label htmlFor="date-added">Date Added:</label><br />
                <input
                    type="text"
                    name="contentDateAdded"
                    onChange={this.handleOnChangeEvent}
                    value={this.state.contentDateAdded}
                /><br />

                <label htmlFor="date-edited">Date Edited:</label><br />
                <input
                    type="text"
                    name="contentDateEdited"
                    onChange={this.handleOnChangeEvent}
                    value={this.state.contentDateEdited}
                /><br />

                <label htmlFor="date-published">Date Published:</label><br />
                <input
                    type="text"
                    name="contentDatePublished"
                    onChange={this.handleOnChangeEvent}
                    value={this.state.contentDatePublished}
                /><br />

                <label htmlFor="date-redacted">Date Redacted:</label><br />
                <input
                    type="text"
                    name="contentDateRedacted"
                    onChange={this.handleOnChangeEvent}
                    value={this.state.contentDateRedacted}
                /><br />

                <label htmlFor="date-deleted">Date Deleted:</label><br />
                <input
                    type="text"
                    name="contentDateDeleted"
                    onChange={this.handleOnChangeEvent}
                    value={this.state.contentDateDeleted}
                /><br />

                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        name="contentContent"
                        onChange={this.handleOnChangeEvent}
                        value={this.state.contentContent}
                    />
                </div>

                <input
                    type="submit"
                    value="Submit"
                />

            </form>

        )
    }

}

export default AddContentDocument
