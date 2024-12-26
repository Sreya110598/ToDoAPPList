import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

function TodoForm({ onSubmit }) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    status: yup
      .string()
      .required("Status is required")
      .oneOf(["todo", "in progress", "complete"], "Invalid status"),
    dueDate: yup.date().required("Due date is required").nullable(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        title: "",
        description: "",
        status: "todo",
        dueDate: null,
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormikTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormikStatus">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={values.status}
                onChange={handleChange}
                isInvalid={!!errors.status}
              >
                <option value="todo">To Do</option>
                <option value="in progress">In Progress</option>
                <option value="complete">Complete</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.status}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationFormikDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={values.description}
                onChange={handleChange}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormikDueDate">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                type="date"
                name="dueDate"
                value={values.dueDate || ""}
                onChange={handleChange}
                isInvalid={!!errors.dueDate}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dueDate}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit">Submit Task</Button>
        </Form>
      )}
    </Formik>
  );
}

export default TodoForm;
