import { FC } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

const App:FC = () => {
  return(
    <div className="App">
      <Header title="Task list App" subtitle="Create some lists add some tasks to each list" />

      <div className="container px-5">
        <div className="columns">
          <Sidebar />
        </div>
      </div>
    </div>
  )
  }


export default App;
