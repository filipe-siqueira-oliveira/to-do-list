import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {

  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id)
    setValue("")
  }

  return (
    <form className='todo--form' onSubmit={handleSubmit}>
      <input type='text' placeholder='Atualizar tarefa' className='todo--input' onChange={(e) => setValue(e.target.value)}
        value={value} />
      <button type='submit' className='todo--btn'>Atualizar</button>
    </form>
  )
}