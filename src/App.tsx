import React, { useState } from 'react';
import './App.css';



type FormEvent = React.FormEvent<HTMLFormElement>;
interface iTask {
  name: string;
  done: boolean;
}
function App(): JSX.Element {

  const [newTask, setNewtask] = useState<string>('');
  const [tasks, setTasks] = useState<iTask[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTasks(newTask);
    setNewtask('');

  }
  const addTasks = (name: string) => {

    const newTasks: iTask[] = [...tasks, { name, done: false }]
    setTasks(newTasks);
  }

 const toggleDoneTask = (i: number)=>{

    const newTasks: iTask[] = {...tasks};
    newTasks[i].done = !newTasks[i].done;

  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit} >
                <input type="text" onChange={e => setNewtask(e.target.value)} value={newTask} className="form-control" />
                <button className="btn btn-success btn-block mt-2">
                  save
                </button>
              </form>
            </div>
          </div>
          {
            tasks.map((t: iTask, i: number) => (
              <div className="card card-body mt-2" key={i}>
                <h1 style={{ textDecoration: t.done ? 'line-through' : '' }} >{t.name}</h1>
                <div>
                  <button  className="btn btn-secondary" onClick={()=>toggleDoneTask(i)}>
                    {t.done ? '✓' : '✗'}
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
