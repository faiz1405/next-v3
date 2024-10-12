'use client'
import { completTodo, editTodo, deleteTodo } from '@/utils/actions'
import { useTransition } from 'react'

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition()
  return (
    <>
      <div
        className={`border border-black/20 cursor-pointer ${
          todo.completed ? 'line-through text-gray-900' : ''
        }`}
        onClick={() => startTransition(() => completTodo(todo.id))}
      >
        {todo.content}
      </div>

      <button
        onClick={() =>
          editTodo(todo.id, prompt('Edit this todo:', todo.content))
        }
      >
        Edit
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </>
  )
}

export default Todo
