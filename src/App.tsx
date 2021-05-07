import React, {  useState } from 'react';
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

    const newTasks = [...tasks, { name, done: false }]
    setTasks(newTasks);
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit} >
                <input type="text" onChange={e => setNewtask(e.target.value)} value={newTask} className="form-control" />
                <button>
                  save
                </button>
              </form>
            </div>
          </div>
          {
            tasks.map((t: iTask, i: number) => {

              return <h1 key={i}>{t.name}</h1>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
