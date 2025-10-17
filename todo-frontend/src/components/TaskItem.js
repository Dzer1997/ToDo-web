import React from 'react'


const TaskItem = ({task}) => {
  const formattedDeadline = task.deadline ? new Date(task.deadline).toLocaleDateString() : "Ingen deadline"
  return (
    <div>
        <div>
            {task.title}
            {task.description}
            {formattedDeadline}
            {task.status ? "Done" : "To-Do"}
            {task.category ? task.category.name  : "Inge kategori"}
        </div>
    </div>
  )
}

export default TaskItem