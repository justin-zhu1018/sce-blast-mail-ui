import React, { Component, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FormRS from "./formRS.jsx";

export default function BlastMail(props) {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const e = null;

  async function handleSubmission() {
    // props.performCancel();
    props.handleData();
    props.checkConsole();
    toggle();
    console.log("sub", props.data);
  }

  return (
    <div>
      <Button onClick={setModal}>Send Blast Mail</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Write the Blast Mail here!</ModalHeader>
        <ModalBody>
          <FormRS
            recipients={props.recipients}
            subject={props.subject}
            data={props.data}
            updateRecipients={props.updateRecipients}
            updateSubject={props.updateSubject}
            updateData={props.updateData}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={async () => {
              await handleSubmission();
            }}
            // onClick={props.handleData}
          >
            Send
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
