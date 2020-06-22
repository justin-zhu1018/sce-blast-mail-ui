import React, { Component } from "react";
import "./App.css";
import Form from "./components/form.jsx";
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
    };
  }

  handleData = (event) => {
    event.preventDefault();
    this.setState(
      {
        submittedRecipients: this.state.recipients,
        submittedSubject: this.state.subject,
        submittedData: this.state.data,
        recipients: "",
        subject: "",
        data: "",
      },
      this.checkConsole
    );
  };

  checkConsole = () => {
    console.log("------------ Submit ------------");
    console.log("Recipients: ", this.state.submittedRecipients);
    console.log("Subject:", this.state.submittedSubject);
    console.log("Data: ", this.state.submittedData);
  };

  updateSubject = (e) => {
    this.setState({ subject: e });
  };

  updateRecipients = (e) => {
    this.setState({ recipients: e });
  };

  updateData = (e) => {
    this.setState({ data: e });
  };

  render() {
    return (
      <div className="App-header">
        <h1>Email Thing</h1>
        <Form
          handleData={this.handleData}
          recipients={this.state.recipients}
          subject={this.state.subject}
          data={this.state.data}
          updateData={this.updateData}
          updateSubject={this.updateSubject}
          updateRecipients={this.updateRecipients}
        />
      </div>
    );
  }
}

export default App;
