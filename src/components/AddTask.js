import React,{useState} from 'react'

const AddTask = ({adtask}) => {
    const [ntask,setntask]=useState('');
    const[ntime,setntime] = useState('');
    const [nrem,setnrem]= useState(false);

    const formevent = (e) =>{
        e.preventDefault();
        adtask({"text":ntask,"day":ntime,"reminder":nrem})
        setntask('');
        setntime('');
        setnrem(false);
    };

  return (
    <form className="add-task" onSubmit={(e)=>(formevent(e))}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" 
            placeholder='Enter the task' 
            className="form-control" 
            value={ntask}
            onChange={(e)=> setntask(e.target.value)}></input>
        </div>
        <div className="form-control">
            <label>Day </label>
            <input type="text" 
            placeholder='Enter the Day' 
            className="form-control" 
            value={ntime}
            onChange={(e)=> setntime(e.target.value)}></input>
        </div>
        <div className="form-control-check">
            <label>Set reminder</label>
            <input type="checkbox" 
            className="form-control-check" 
            onChange={(e)=> setnrem(e.currentTarget.checked)}></input>
        </div>
        <button className="btn btn-block form-control">submit</button>
       
    </form>
  )
}

export default AddTask