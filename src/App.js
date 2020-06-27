import React, { Component } from "react";
import "./App.css";
import Form from "./components/form.jsx";
import ModalExample from "./componentsReactStrap/modal.jsx";
import BlastMail from "./componentsReactStrap/blastmailRS.jsx";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipients: "",
      subject: "",
      data: "",
      submittedRecipients: "",
      submittedSubject: "",
      submittedData: "",
      dataArray: [],
      content: "<p><strong>Preloaded Data</strong></p>",
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleData = (event) => {
    // event.preventDefault();
    this.setState(
      {
        submittedRecipients: this.state.recipients,
        submittedSubject: this.state.subject,
        // submittedData: this.state.data,
        recipients: "",
        subject: "",
        // data: "",
      },
      this.checkConsole
    );
  };

  checkConsole = () => {
    console.log("------------ Submit ------------");
    console.log("Recipients: ", this.state.submittedRecipients);
    console.log("Subject:", this.state.submittedSubject);
    console.log("Data: ", this.state.data);
  };

  updateSubject = (e) => {
    // console.log("update subject", e);
    this.setState({ subject: e });
  };

  updateRecipients = (e) => {
    // console.log("update recipients", e);
    this.setState({ recipients: e });
  };

  updateData = (e) => {
    // console.log("update data", e);
    this.setState({ data: e });
  };

  // async handleEditorChange(content, editor) {
  //   this.setState({ content });
  //   console.log("Updating data",  this.state.content);
  // }

  handleEditorChange = (e) => {
    this.setState({ content: e });
    console.log("UPdate", this.state.content);
  };

  handleSubmit = () => {
    console.log("Handle submit: ", this.state.content);
  };

  render() {
    return (
      <div className="App-header">
        <h1>Email Thing</h1>
        {/* <ModalExample
          handleData={this.handleData}
          recipients={this.state.recipients}
          subject={this.state.subject}
          data={this.state.data}
          updateData={this.updateData}
          updateSubject={this.updateSubject}
          updateRecipients={this.updateRecipients}
          performCancel={this.performCancel}
        /> */}
        <BlastMail
          performCancel={this.performCancel}
          handleData={this.handleData}
          recipients={this.state.recipients}
          subject={this.state.subject}
          data={this.state.data}
          updateData={this.updateData}
          updateSubject={this.updateSubject}
          updateRecipients={this.updateRecipients}
          checkConsole={this.checkConsole}
          content={this.state.content}
          handleEditorChange={this.handleEditorChange}
          handleSubmit={this.handleSubmit}
        />
        {/* <Form
          handleData={this.handleData}
          recipients={this.state.recipients}
          subject={this.state.subject}
          data={this.state.data}
          updateData={this.updateData}
          updateSubject={this.updateSubject}
          updateRecipients={this.updateRecipients}
        /> */}
        {/* <TextEditor
          content={this.state.content}
          handleEditorChange={this.handleEditorChange}
          handleSubmit={this.handleSubmit}
        /> */}
        {/* <button onClick={this.handleSubmit}>Test</button> */}
      </div>
    );
  }
}

export default App;
