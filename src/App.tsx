import { useState } from "react";
import "./App.css";

type TodoListType={id:string,title:string}[]

const TodoList:TodoListType=[
  {id:"1",title:"dished"},
  {id:"2",title:"clean room"},
  {id:"3",title:"tasks"},
  {id:"4",title:"shower"},
]

function App() {

  const [tasks,setTasks]=useState(TodoList)
  const [newTask,setNewTask]=useState("")

  const addTask=()=>{
    setTasks((prev)=>[...prev,{id:Date.now()+"",title:newTask}])
    setNewTask("")
  }

  const handleRemove=(id:string)=>{
    const UpdatedTask=tasks.filter((item)=>item.id!==id)
    setTasks(UpdatedTask)
  }

  return (
    <>
      <div>
        <button className="AddButton" onClick={addTask}>Add Task</button>
        <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
      </div>
      {tasks?.map((item)=>{
        return(
          <div className="TaskItem">
            <p>{item.title}</p>
            <button onClick={()=>handleRemove(item.id)}>Remove Task</button>
          </div>
        )
      })}
    </>
  );
}

export default App;
