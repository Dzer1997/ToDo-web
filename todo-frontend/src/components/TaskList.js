import React from 'react'
import TaskItem from '../components/TaskItem'

const TaskList = ({tasks, handleDeleteTask, handleUpdateTask}) => {
  return (
    <table className='table'>
      <thead>
        <tr className='tr'>
          <th className='th'>Title</th>
          <th className='th'>Description</th>
          <th className='th'>Date</th>
          <th className='th'>status</th>
          <th className='th'>Kategori</th>
          <th className='th'></th>
          <th className='th'></th>
        </tr>
      </thead>
      <tbody>
        {tasks?.map(task => task?.id && (
          <TaskItem key={task.id} task={task} handleDeleteTask={handleDeleteTask} handleUpdateTask={handleUpdateTask} />
        ))}
      </tbody>
    </table>
  )
}

export default TaskList