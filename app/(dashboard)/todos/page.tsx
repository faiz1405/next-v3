import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  const todos = await db.todo.findMany({})
  return todos
}

const getDataId = async (id) => {
  const todo = await db.todo.findUnique({
    where: {
      id,
    },
  })
  return todo
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
