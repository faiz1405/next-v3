import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <form action={newTodo}>
      <input
        name="content"
        type="text"
        className="border border-gray-300 input"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default NewTodoForm
