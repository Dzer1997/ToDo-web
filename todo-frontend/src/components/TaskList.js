import React from 'react'
import TaskItem from '../components/TaskItem'

const TaskList = ({tasks}) => {
  return (
    <div>
      {tasks?.map(task => task?.id && (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList