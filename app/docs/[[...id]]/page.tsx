import style from './style.module.css'
const DocsIdPage = ({ params }) => {
  console.log(params)
  return (
    <div>
      <h1 className={style.title}>Docs Id {params.id}</h1>
    </div>
  )
}

export default DocsIdPage
