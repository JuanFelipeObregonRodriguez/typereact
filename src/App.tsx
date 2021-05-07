import React, { Fragment, useState } from 'react';
import './App.css';



type FormEvent = React.FormEvent<HTMLFormElement>;
interface iTask {
  name: string;
  done: boolean;
}
function App():JSX.Element{
 
  const [newTask, setNewtask] = useState<string>('');
  const [tasks, setTasks]=useState<iTask[]>([]);
  
  const handleSubmit = (e: FormEvent ) =>{
     e.preventDefault();
     addTasks(newTask);
    setNewtask('');
    
  }
 const addTasks = (name: string) =>{

  const newTasks = [...tasks, {name, done: false}]
      setTasks(newTasks);
 }

  return (
   <Fragment>
     <form onSubmit={handleSubmit} >
       <input type="text" onChange={e => setNewtask(e.target.value) } value={newTask} />
       <button>
         save
       </button>
     </form>
     {
       tasks.map((t: iTask, i: number) =>{

            return <h1 key={i}>{t.name}</h1>
       })
     }
   </Fragment>
  );
}

export default App;
