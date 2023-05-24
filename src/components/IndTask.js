import {FaTimes} from 'react-icons/fa';
const IndTask = ({task,fadeeve,status}) => {
  return (
    <div className={`task ${task.reminder? 'reminder':''}`}  onDoubleClick={()=>status(task.id)}>
       <h3>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() =>fadeeve(task.id)}/></h3> 
       <p>{task.day}</p>
       
    </div>
  )
}

export default IndTask