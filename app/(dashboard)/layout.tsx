import NewTodoForm from '@/components/NewTodoForm'

const DasboardLayout = ({ children }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DasboardLayout
