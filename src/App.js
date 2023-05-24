import './App.css';
import React, { useState,useEffect } from 'react'
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showTask, setShowTask] = useState(false);
  const [tasks,settasks]= useState([]);
  // when page refresh useEffect takeplace.
  useEffect(()=>{
    const getTask = async () => {
      const taskFromServer = await fetchTasks();
      settasks(taskFromServer);
    }
    getTask();
  },[])

// fetch task
const fetchTasks = async () =>{
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json();
  return data;
}
// Add Task
const adtask= async(task) =>{
  const id = (Math.floor(Math.random()*1000)+1).toString();
  const newtask ={id,...task};
  const res = await fetch(`http://localhost:5000/tasks`,
  {
    method:'POST',
    headers:
    {
      'content-type':'application/json',
    },
    body:JSON.stringify(newtask),
  })
 const data = await res.json();
  settasks([...tasks,data]);
}

// Delete task
const fadeeve = async(id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,
              {method:'DELETE',}
            )
  settasks(tasks.filter((task)=>(
    task.id !== id
  )));
}
// Reminder
const reminder = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const data = await res.json();
  const updtask = {...data,reminder:!data.reminder};
  const res1 = await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers:{
      'content-type':'application/json',
    },
    body:JSON.stringify(updtask),
  })
  const data1 = await res1.json();
  // console.log(data1);
  settasks(
    tasks.map((task)=>(
    task.id === id ? 
    {...task,reminder:data1.reminder} :
     task 
  )))
 
};
// Add button click event

  return (
   
      <Router>
      <div className="container">
        <Header title="Task Tracker" showTask={showTask} cleve={(e)=>{e.preventDefault();setShowTask(!showTask);}}/>
        
        <Routes>
          <Route path="/about" Component={About}/>
          <Route path="/" exact Component={(props) =>
          (
            <>
              {showTask && <AddTask adtask={adtask}/>}
              {tasks.length >0 ?
              (<Task tasks={tasks} fadeeve={fadeeve} status={reminder}/>):
              (<h3>NO Task To Show!</h3>)
              }
              <Footer/>
            </>
          )} />
        </Routes>
      
      
      </div>
      </Router> 
    
  );
}

export default App;
