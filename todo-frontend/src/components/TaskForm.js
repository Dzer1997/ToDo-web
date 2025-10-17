import React from 'react'
import CategorySelect from '../components/CategorySelect'

const TaskForm = ({
    newTaskTitle,
    setNewTaskTitle,
    newTaskDescription,
    setNewTaskDescription,
    newTaskDeadline,
    setNewTaskDeadline,
    newTaskCategory,
    setNewTaskCategory,
    newTaskStatus,
    setNewTaskStatus,
    handleAddTask
}) => {
  return (
    <div>
      <input type="text" value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} />
        <input type="text" value={newTaskDescription} onChange={e => setNewTaskDescription(e.target.value)} />
        <input type="date" value={newTaskDeadline} onChange={e => setNewTaskDeadline(e.target.value)}/>
        <CategorySelect  value={newTaskCategory} onChange={setNewTaskCategory} />
        <select value={newTaskStatus} onChange={e => setNewTaskStatus(e.target.value)}>
          <option value="">Vælg status</option>
          <option value="todo">To Do</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default TaskForm