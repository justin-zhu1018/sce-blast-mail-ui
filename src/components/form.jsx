import React, { Component } from "react";
import "./form.css";
class Form extends Component {
  state = {};
  render() {
    return (
      <div className="form-wrapper p-3">
        <form>
          <div className="form-row">
            <label className="col-form-label-sm col-sm-1">Recipients</label>
            <div className="col-sm-5">
              <select
                className="form-control form-control-sm"
                value={this.props.recipients}
                onChange={(e) => this.props.updateRecipients(e.target.value)}
              >
                <option>Choose...</option>
                <option value="Members">Members</option>
                <option value="Admin">Admin</option>
                <option value="Everyone">Everyone</option>
              </select>
            </div>
          </div>
          <div className="form-row mt-1">
            <label className="col-form-label-sm col-sm-1">Subject</label>
            <div className="col-sm-5">
              <input
                className="form-control form-control-sm"
                value={this.props.subject}
                onChange={(e) => this.props.updateSubject(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <label className="col-form-label col-form-label-sm">Body</label>
            <textarea
              className="form-control form-control-sm ml-1"
              value={this.props.data}
              onChange={(e) => this.props.updateData(e.target.value)}
            ></textarea>
          </div>
          <div className="form-row mt-3">
            <button
              className="btn-sm btn-warning button-right"
              onClick={this.props.handleData}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
