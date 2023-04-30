import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import NewPostForm from './NewPostForm';

const NewPostModal = ({ show, toggleModal }) => {



  return (
    <Modal show={show} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
          <NewPostForm toggleModal={toggleModal} />
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewPostModal

//add toggle 