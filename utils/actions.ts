'use server'
import { revalidatePath } from 'next/cache'
import db from '../utils/db'

export const completTodo = async (id) => {
  await db.todo.update({
    where: {
      id,
    },
    data: {
      completed: true,
    },
  })

  revalidatePath('/todos')
}

export const editTodo = async (id, content) => {
  await db.todo.update({
    where: {
      id,
    },
    data: {
      content,
    },
  })

  revalidatePath('/todos')
}

export const newTodo = async (formdata) => {
  const todo = await db.todo.create({
    data: {
      content: formdata.get('content'),
    },
  })
  revalidatePath('/todos')
}

export const deleteTodo = async (id) => {
  await db.todo.delete({
    where: {
      id,
    },
  })
  revalidatePath('/todos')
}
