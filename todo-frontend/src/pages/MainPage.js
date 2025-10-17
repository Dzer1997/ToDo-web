import React, { useState, useEffect } from 'react'
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import {  getAllTask, addTask, deleteTask, updateTask } from '../services/api'

const MainPage = () => {
const [newTaskTitle, setNewTaskTitle] = useState("");
const [newTaskDescription, setNewTaskDescription] = useState("");
const [newTaskDeadline, setNewTaskDeadline] = useState("");
const [newTaskCategory, setNewTaskCategory] = useState("");
const [newTaskStatus, setNewTaskStatus] = useState("");
const [tasks, setTasks] = useState([]);

useEffect(() => {
  const fetchTasks = async () => {
    const allTasks = await getAllTask(); 
    if (allTasks) {
      setTasks(allTasks); 
    }
  };

  fetchTasks(); 
}, []);

const handleAddTask = async () => {
  
  const newTask = {
    title: newTaskTitle,
    description: newTaskDescription || "",
    deadline: newTaskDeadline || null,
    status: newTaskStatus,
    categoryId: newTaskCategory
  };
  console.log("Sender task til backend:", newTask);
  const createdTask = await addTask(newTask);
  setTasks([...tasks, createdTask]);

  setNewTaskTitle("")
  setNewTaskDescription("")
  setNewTaskDeadline("")
  setNewTaskCategory("")
  setNewTaskStatus("")
};


console.log("Sender task til backend:", handleAddTask);

const handleDeleteTask = async (taskId) => {
  await deleteTask(taskId);
  setTasks(tasks.filter(task => task.id !== taskId))

}

const handleUpdateTask = async (taskId,updatetFields) => {
  const updatedTaskFromBackend = await updateTask(taskId,updatetFields)
  setTasks(tasks.map(t => t.id === taskId ? updatedTaskFromBackend : t))
}

  return (
    <div>
        <TaskForm
          newTaskTitle={newTaskTitle}
          setNewTaskTitle={setNewTaskTitle}
          newTaskDescription={newTaskDescription}
          setNewTaskDescription={setNewTaskDescription}
          newTaskDeadline={newTaskDeadline}
          setNewTaskDeadline={setNewTaskDeadline}
          newTaskCategory={newTaskCategory}
          setNewTaskCategory={setNewTaskCategory}
          newTaskStatus={newTaskStatus}
          setNewTaskStatus={setNewTaskStatus}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
          handleUpdateTask={handleUpdateTask}
        />
        <TaskList tasks={tasks}></TaskList>
    </div>
  )
}

export default MainPage