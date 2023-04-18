import React, { useState } from 'react'

export const TodoForm = ({ addTodo }) => {

  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value)
    setValue("")
  }

  return (
    <form className='todo--form' onSubmit={handleSubmit}>
      <input type='text' placeholder='Qual a tarefa de hoje?' className='todo--input' onChange={(e) => setValue(e.target.value)}
        value={value} />
      <button type='submit' className='todo--btn'>Adicionar</button>
    </form>
  )
}