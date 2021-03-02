import React, { useState } from "react";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  ModalFooter,
} from "reactstrap";

const InputModal = (props) => {
  const { toggle, modal, addCard } = props;
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    first_name: "",
    imagePath: "",
  });
  const [message, setMessage] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();
    if (formState.title && formState.description && formState.imagePath) {
      addCard(formState);
    } else {
      setMessage("Invalid Data");
    }
  };

  return (
    <div>
      <Modal isOpen={modal}>
        <ModalHeader toggle={toggle}>Add New Sign</ModalHeader>
        <ModalBody>
          <Form style={{ padding: "20px" }}>
            <FormGroup row>
              <Label for="title">Title</Label>
              <Input
                name="title"
                id="title"
                onChange={(event) =>
                  setFormState({ ...formState, title: event.target.value })
                }
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    description: event.target.value,
                  })
                }
                id="description"
              />
            </FormGroup>
            <FormGroup>
              <Label for="imagePath">Image Path</Label>
              <Input
                name="imagePath"
                onChange={(event) =>
                  setFormState({ ...formState, imagePath: event.target.value })
                }
                id="imagePath"
              />
            </FormGroup>
            <ModalFooter>
              <Button color="primary" onClick={handleClick}>
                Add
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
          {message}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default InputModal;
