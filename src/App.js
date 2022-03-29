/** Import Styles of a component */
import './App.css';

/** Use react hook for storing data */
import { useState, useEffect } from 'react';

/** react router */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/** Import other components */
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTaskForm from './components/AddTaskForm';
import Footer from './components/Footer';
import About from './components/About';

/** Main Entry Point */
function App() {
  /** API Server URL */
  const serverURL = 'http://localhost:5050/tasks';

  /** useState const included list of tasks, setTask function for apply changes in a store and default list of data */
  const [tasks, setTasks] = useState([]);

  /** toggle form state */
  const [show, setShow] = useState(false);

  /** Fetch data using useEffect react hook and set the state */
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();

      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  /** fetch tasks function */
  const fetchTasks = async () => {
    const res = await fetch(serverURL);
    const data = await res.json();

    return data;
  };

  /** fetch task function */
  const fetchTask = async (id) => {
    const res = await fetch(`${serverURL}/${id}`);
    const data = await res.json();

    return data;
  };

  /** Delete task function */
  const deleteTask = async (id) => {
    await fetch(`${serverURL}/${id}`, {
      method: 'DELETE'
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  /** Toggle Reminder function */
  const toggleReminder = async (id) => {
    const taskToggleServer = await fetchTask(id);
    const updatedTask = { ...taskToggleServer, reminder: !taskToggleServer.reminder };
    const res = await fetch(`${serverURL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await res.json();

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !data.reminder} : task))
  }

  /** Add task */
  const addTask = async (task) => {
    const res = await fetch(serverURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  /** show components, list of the tasks */
  return (
    <Router>
      <div className="App">
        <Header onToggleTaskForm={() => setShow(!show)} toggleButton={show} />
        
        <Routes>
          <Route path="/" exact element={
            <>
              {show && <AddTaskForm addTask={addTask} />}
              {tasks.length ? <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} /> : 'There are no tasks yet!'}
            </>
          } />

          <Route path="/about" element={<About />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

/** Export Main Entry Point */
export default App;
