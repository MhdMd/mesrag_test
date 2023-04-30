import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import NewPostModal from "../components/Modal";
import DataTable from "../components/DataTable";

const PostsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <Container >
      <Button onClick={toggleModal} className="my-3">New Post</Button>
      <DataTable />
      <NewPostModal show={showModal} toggleModal={toggleModal} />
    </Container>
  );
};

export default PostsPage;
