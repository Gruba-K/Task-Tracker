import IndTask from "./IndTask"

const Task = ({tasks,fadeeve,status}) => {
  
  return (
    <>
       {tasks.map((task)=>(
        <IndTask key={task.id} task={task} fadeeve={fadeeve} status={status}/>
       ))} 
    </>
  )
}

export default Task