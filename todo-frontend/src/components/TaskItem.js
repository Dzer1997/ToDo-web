import React from 'react'


const TaskItem = ({task, handleDeleteTask, handleUpdateTask}) => {
  const formattedDeadline = task.deadline ? new Date(task.deadline).toLocaleDateString() : "Ingen deadline"
  return (
        <tr >
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{formattedDeadline}</td>
            <td>{task.status ? "Done" : "To-Do"}</td>
            <td>{task.category ? task.category.name  : "Ingen kategori"}</td>
            <td><button className='delete-btn' onClick={() => handleDeleteTask(task.id)}>delete</button></td>
            <td><button className='status-btn' onClick={() => handleUpdateTask(task.id, { status: !task.status })}>
            {task.status ? "Marker Done" : "Marker To-Do"}</button></td>
        </tr>  
  )
}

export default TaskItem