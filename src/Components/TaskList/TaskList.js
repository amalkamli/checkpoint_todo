import React from 'react'
import Task from './Task/Task'

const TaskList = ({tasks}) => {
  return (
    <div>
      {tasksmap((el)=><Task el={el}/>)}
    </div>
  )
}

export default TaskList