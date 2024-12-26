import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit, FaCheckCircle } from "react-icons/fa"; 

const TaskList = ({ tasks, onComplete, onEdit, onDelete }) => (
  <Row>
    {tasks.map((task) => (
      <Col md={6} lg={4} key={task.id} className="mb-4">
        <Card>
          <Card.Body>
            <Card.Title>{task.title}</Card.Title>
            <Card.Text>{task.description}</Card.Text>
            <Card.Text>
              <small>Created: {task.createdAt}</small>
            </Card.Text>
            <div className="d-flex justify-content-between">
            
              <Button
                variant="success"
                onClick={() => onComplete(task.id)}
                className="d-flex align-items-center"
              >
                <FaCheckCircle className="me-2" /> Complete
              </Button>

              
              <Link to={`/task/${task.id}`} className="btn btn-primary">
                Details
              </Link>

              
              <Button
                variant="warning"
                onClick={() => onEdit(task)}
                className="d-flex align-items-center"
              >
                <FaEdit className="me-2" /> Edit
              </Button>

              
              <Button
                variant="danger"
                onClick={() => onDelete(task.id)}
                className="d-flex align-items-center"
              >
                <FaTrash className="me-2" /> Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default TaskList;
