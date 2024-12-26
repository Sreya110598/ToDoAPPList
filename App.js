import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import { Container } from "react-bootstrap";

// Color Modes (Documentation)
// See Bootstrap's color mode documentation for adding dark/light mode switch.

// Getting Help (Documentation)
// Reference: Bootstrap's documentation and support forums.

// RTL (Right-to-Left Support)
// To enable RTL, import the appropriate Bootstrap RTL stylesheet.

// Server-Side Rendering (SSR)
// Use SSR-friendly frameworks like Next.js with Bootstrap components for SSR support.

// Layout (Documentation)
// Includes: Grid, Stacks, Layout Helpers

// Breakpoints
// Customize layouts for different screen sizes using Bootstrap's responsive breakpoints.

// Grid (Usage in Layouts)
// Example: `<Row>` and `<Col>` components for responsive design.

// Stacks (Alignment and Spacing)
// Example: `<Stack>` for vertical/horizontal alignment of components.

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=20`);
        const data = await response.json();
        const formattedTasks = data.map((task) => ({
          ...task,
          description: "Sample Description",
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
          status: "To Do",
        }));
        setTasks(formattedTasks);
      } catch (error) {
        toast.error("Failed to fetch tasks");
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (title, description) => {
    const currentTime = new Date().toLocaleString();
    const newTask = {
      id: Date.now(),
      title,
      description,
      createdAt: currentTime,
      updatedAt: currentTime,
      status: "To Do",
    };
    setTasks((prevTasks) =>
      [newTask, ...prevTasks].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    );
  };

  const completeTask = async (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: "Completed" } : task
      )
    );
    toast.success("Task marked as complete!");
  };

  const deleteTask = async (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.success("Task deleted successfully!");
  };

  const updateTask = async (id, newTitle, newDescription) => {
    const currentTime = new Date().toLocaleString();
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            title: newTitle,
            description: newDescription,
            updatedAt: currentTime,
          }
        : task
    );
    const updatedTask = updatedTasks.find((task) => task.id === id);
    const sortedTasks = [updatedTask, ...updatedTasks.filter((t) => t.id !== id)];
    setTasks(sortedTasks);
    toast.success("Task updated successfully!");
  };

  return (
    <Container className="p-4">
      <h1 className="text-center mb-4">To-Do App</h1>

      {/* Forms Overview */}
      {/* Add Form Controls, Select, Floating Labels, Layout, and Validation as needed */}
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TaskInput onAddTask={addTask} />
              <TaskList
                tasks={tasks}
                onComplete={completeTask}
                onDelete={deleteTask}
                onEdit={() => {}}
              />
            </>
          }
        />
        <Route
          path="/task/:id"
          element={<TaskDetails tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />}
        />
      </Routes>

      <Toaster />

    </Container>
  );
};

export default App;
