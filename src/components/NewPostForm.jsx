import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Form, Button } from "react-bootstrap";
import { useSetPostState } from "../state/postSelectors";

const validationSchema = yup.object().shape({
  id: yup.number().required("ID is required"),
  title: yup.string().required("Title is required"),
});

const NewPostForm = ({ toggleModal }) => {
  const setPosts = useSetPostState();

  const formik = useFormik({
    initialValues: { id: "", title: "" },
    validationSchema,
    onSubmit: (values) => {
      setPosts((prevPosts) => [
        ...prevPosts,
        { id: values.id, title: values.title },
      ]);
      toggleModal();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} >
      <Form.Group controlId="id" >
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter post ID"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.id}
          isInvalid={formik.touched.id && formik.errors.id}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.id}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="title" className="my-4">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter post title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          isInvalid={formik.touched.title && formik.errors.title}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.title}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" variant="success">Create Post</Button>
    </Form>
  );
};

export default NewPostForm;
