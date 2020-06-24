import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
export default function formRS(props) {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Recipients</Label>
          <Input
            type="select"
            value={props.recipients}
            onChange={(e) => props.updateRecipients(e.target.value)}
          >
            <option>Choose...</option>
            <option value="Members">Members</option>
            <option value="Admin">Admin</option>
            <option value="Everyone">Everyone</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Subject</Label>
          <Input
            value={props.subject}
            onChange={(e) => props.updateSubject(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Text Area</Label>
          <Input
            type="textarea"
            data={props.data}
            onChange={(e) => props.updateData(e.target.value)}
          ></Input>
        </FormGroup>
      </Form>
    </div>
  );
}
