import React, { useState } from "react";
import toast from "react-hot-toast";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const TaskInput = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskTitle.trim() && description.trim()) {
      await onAddTask(taskTitle, description);
      setTaskTitle("");
      setDescription("");
      toast.success("Task added successfully!");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Form onSubmit={handleSubmit} className="d-flex flex-column">
            <Form.Group controlId="taskTitle">
              <Form.Control
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Task Title"
                className="mb-3"
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="mb-3"
              />
            </Form.Group>
            <Button type="submit" variant="primary">Add Task</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskInput;
