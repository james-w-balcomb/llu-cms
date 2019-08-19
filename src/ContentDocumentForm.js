import React from "react"

const buttonStyle = {
    margin : "10px 10px 10px 10px"
};

// {/*Required Props: title, action, style*/}
const Button = props => {
    return(
        <button
            style={props.style}
            onClick={props.action}
        >
            {props.title}
        </button>)
};

// {/*Required Props: name, title, options, selectedOptions, handleChange*/}
const CheckBox = props => {
    console.log("CheckBox{}");
    console.log(props);
    return(
        <div className="checkbox-component">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <div className="checkbox-group">
                {props.options.map(option => {
                    return (
                        <label key={option}>
                            <input
                                className="form-checkbox"
                                id={props.name}
                                name={props.name}
                                onChange={props.handleChange}
                                value={option}
                                checked={ props.selectedOptions.indexOf(option) > -1 }
                                type="checkbox"
                            />
                                {option}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

// {/*Required Props: name (=id =htmlFor), title, type, value, placeholder, handleChange*/}
const Input = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <input
                className="form-input"
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    )
};

// {/*Required Props: title, name, selectedValue, options{label, value, checked}*/}
const Radio = props => {
    console.log("Radio{}");
    console.log(props);
    return(
        <fieldset className="form-group">
            <div className="form-row">
                <legend className="col-form-label col-sm-2 pt-0">{props.title}</legend>
                <div className="col-sm-10">
                    {props.options.map((radio, i) => {
                        return (
                            <div key={"option" + i} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={props.name}
                                    id={"option" + i}
                                    value={radio.value}
                                    onChange={props.handleChange}
                                    checked={props.selectedOption === radio.value}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor={"option" + i}>
                                    {radio.label}
                                </label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </fieldset>
    )
};

// {/*Required Props: name, title, value, placeholder, handleChange, options*/}
const Select = props => {
    return(
        <div className="form-group">
            <label htmlFor={props.name}>{props.title}</label>
            <select
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            >
                <option value="" disabled>{props.placeholder}</option>
                {props.options.map(option => {
                    return (
                        <option
                            key={option}
                            value={option}
                            label={option}>{option}
                        </option>
                    );
                })}
            </select>
        </div>)
};

// {/*Required Props: name (=id), title, value, placeholder, handleChange*/}
// cols and rows attributes OR height and width CSS properties
const TextArea = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <textarea
                className="form-input"
                id={props.name}
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    )
};

class ContentDocumentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contentDocumentOptions: {
                contentType: ["Table", "Text", "Raw"],
                contentCategory: [
                    {label: "Software Development", value: "software-development", checked: false},
                    {label: "Computer Science (CS)", value: "computer-science", checked: false},
                    {label: "Internet of Things (IoT)", value: "internet-of-things", checked: false},
                    {label: "Mathematics (Maths)", value: "mathematics", checked: false},
                    {label: "Statistics (Stats)", value: "statistics", checked: false},
                    {label: "Data Analysis (DA)", value: "data-analysis", checked: false},
                    {label: "Data Engineering (DE)", value: "data-engineering (DE)", checked: false},
                    {label: "Data Science (DS)", value: "data-science", checked: false},
                    {label: "Electronics", value: "electronics", checked: false},
                    {label: "Miscellaneous", value: "miscellaneous", checked: `true`}
                ],
                contentTags: ["test-tag-1", "Java", "Python", "R", "C", "C++", "SQL"],
                isDeleted: [
                    {label: "Yes", value: "true", checked: false},
                    {label: "No", value: "false", checked: true}
                ]
            }
        };
        this.handleChange = props.handleChange.bind(this);
        this.handleClear = props.handleClear.bind(this);
        this.handleSubmit = props.handleSubmit.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
    }

    handleFullName(e) {
        let value = e.target.value;
        this.setState( prevState => ({ contentDocument :
                {...prevState.contentDocument, name: value
                }
        }), () => console.log(this.props.contentDocument))
    }

    handleAge(e) {
        let value = e.target.value;
        this.setState( prevState => ({ contentDocument :
                {...prevState.contentDocument, age: value
                }
        }), () => console.log(this.props.contentDocument))
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => ({ contentDocument :
                {...prevState.contentDocument, [name]: value
                }
        }), () => console.log(this.props.contentDocument))
    }

    handleTextArea(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(prevState => ({
            contentDocument: {
                ...prevState.contentDocument, about: value
            }
        }), ()=>console.log(this.props.contentDocument))
    }

    handleCheckBox(e) {

        const newSelection = e.target.value;
        let newSelectionArray;

        if(this.props.contentDocument.skills.indexOf(newSelection) > -1) {
            newSelectionArray = this.props.contentDocument.skills.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.props.contentDocument.skills, newSelection];
        }

        this.setState( prevState => ({ contentDocument:
                    {...prevState.contentDocument, skills: newSelectionArray }
            })
        )
    }

    render() {
        return (

            <form
                className="container"
                id={this.props.id}
                method={this.props.method}
                action={this.props.actions}
                onSubmit={this.props.handleSubmit}
            >

                {/*Required Props: title, name, selectedOption, options{label, value, checked}*/}
                <Radio title = {"Is DELETED?"}
                       name = {"isDeleted"}
                       options = {this.state.contentDocumentOptions.isDeleted}
                       selectedOption = {this.props.contentDocument.isDeleted}
                       placeholder = {"Select Option"}
                       handleChange = {this.props.handleChange}
                />

                {/*Required Props: name (=id =htmlFor), title, type, value, placeholder, handleChange*/}
                <Input inputType = {"text"}
                       name = {"contentDocumentUuid"}
                       title = {"Content Document UUID"}
                       value = {this.props.contentDocument.contentDocumentUuid}
                       placeholder = {""}
                       handleChange = {this.props.handleChange}
                />

                {/*Required Props: name (=id =htmlFor), title, type, value, placeholder, handleChange*/}
                <Input inputType = {"text"}
                       name = {"contentPagePath"}
                       title = {"Page Path"}
                       value = {this.props.contentDocument.contentPagePath}
                       placeholder = {""}
                       handleChange = {this.props.handleChange}
                />

                {/*Required Props: name (=id =htmlFor), title, type, value, placeholder, handleChange*/}
                <Input inputType = {"text"}
                       name = {"contentPageTitle"}
                       title = {"Page Title"}
                       value = {this.props.contentDocument.contentPageTitle}
                       placeholder = {""}
                       handleChange = {this.props.handleChange}
                />

                <Select title = {"Content Type"}
                        name = {"contentType"}
                        options = {this.state.contentDocumentOptions.contentType}
                        value = {this.props.contentDocument.contentType}
                        placeholder = {"Select Content Type"}
                        handleChange = {this.props.handleChange}
                />

                {/*Required Props: title, name, selectedOption, options{label, value, checked}*/}
                <Radio name = {"contentCategory"}
                       title = {"Category"}
                       options = {this.state.contentDocumentOptions.contentCategory}
                       selectedOption = {this.props.contentDocument.contentCategory}
                       placeholder = {"Select Option"}
                       handleChange = {this.props.handleChange}
                />

                {/*Required Props: name (=id =htmlFor), title, type, value, placeholder, handleChange*/}
                <Input inputType = {"text"}
                       name = {"contentKeywords"}
                       title = {"Keywords"}
                       value = {this.props.contentDocument.contentKeywords}
                       placeholder = {""}
                       handleChange = {this.props.handleChange}
                />

                {/*Required Props: name (=id =htmlFor), title, type, value, placeholder, handleChange*/}
                <Input inputType = {"text"}
                       name = {"contentSearchTerms"}
                       title = {"Search Terms"}
                       value = {this.props.contentDocument.contentSearchTerms}
                       placeholder = {""}
                       handleChange = {this.props.handleChange}
                />

                {/*Required Props: name, title, options, selectedOptions, handleChange*/}
                <CheckBox  title = {"Tags"}
                           name = {"contentTags"}
                           options = {this.state.contentDocumentOptions.contentTags}
                           selectedOptions = {this.props.contentDocument.contentTags}
                           handleChange = {this.props.handleChange}
                />

                {/*Required Props: name (=id =htmlFor), title, type, value, placeholder, handleChange*/}
                <Input inputType = {"text"}
                       name = {"contentRelatedContent"}
                       title = {"Related Content"}
                       value = {this.props.contentDocument.contentRelatedContent}
                       placeholder = {""}
                       handleChange = {this.props.handleChange}
                />

                <div className="row">
                    <div className="col">
                        {/*Required Props: name (=id =htmlFor), title, type, value, placeholder, handleChange*/}
                        <Input inputType = {"text"}
                               name = {"contentDateAdded"}
                               title = {"Date Added"}
                               value = {this.props.contentDocument.contentDateAdded}
                               placeholder = {""}
                               handleChange = {this.props.handleChange}
                        />
                    </div>
                    <div className="col">
                        {/*Required Props: name (=id =htmlFor), title, type, value, placeholder, handleChange*/}
                        <Input inputType = {"text"}
                               name = {"contentDateEdited"}
                               title = {"Date Edited"}
                               value = {this.props.contentDocument.contentDateEdited}
                               placeholder = {""}
                               handleChange = {this.props.handleChange}
                        />
                    </div>
                    <div className="col">
                        {/*Required Props: name (=id =htmlFor), title, type, value, placeholder, handleChange*/}
                        <Input inputType = {"text"}
                               name = {"contentDatePublished"}
                               title = {"Date Published"}
                               value = {this.props.contentDocument.contentDatePublished}
                               placeholder = {""}
                               handleChange = {this.props.handleChange}
                        />
                    </div>
                    <div className="col">
                        {/*Required Props: name (=id =htmlFor), title, type, value, placeholder, handleChange*/}
                        <Input inputType = {"text"}
                               name = {"contentDateRedacted"}
                               title = {"Date Redacted"}
                               value = {this.props.contentDocument.contentDateRedacted}
                               placeholder = {""}
                               handleChange = {this.props.handleChange}
                        />
                    </div>
                    <div className="col">
                        {/*Required Props: name (=id =htmlFor), title, type, value, placeholder, handleChange*/}
                        <Input inputType = {"text"}
                               name = {"contentDateDeleted"}
                               title = {"Date Deleted"}
                               value = {this.props.contentDocument.contentDateDeleted}
                               placeholder = {""}
                               handleChange = {this.props.handleChange}
                        />
                    </div>
                </div>

                {/*Required Props: name (=id), title, value, placeholder, handleChange*/}
                <TextArea
                    name = {"contentContent"}
                    title = {"Content"}
                    value = {this.props.contentDocument.contentContent}
                    placeholder = {"Input the content to display on the web-page"}
                    handleChange = {this.props.handleChange}
                />

                <Button
                    action = {this.props.handleSubmit}
                    type = {"primary"}
                    title = {"Submit"}
                    style = {buttonStyle}
                />

                <Button
                    action = {this.props.handleClear}
                    type = {"secondary"}
                    title = {"Clear"}
                    style = {buttonStyle}
                />

            </form>

        )
    }

}

export default ContentDocumentForm;
