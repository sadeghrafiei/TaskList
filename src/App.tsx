import { FC } from 'react';
import './App.css';
import Header from './Components/Header';

const App:FC = () => {
  return(
    <div className="App">
      <Header title="Task list App" subtitle="Create some lists add some tasks to each list" />
    </div>
  )
  }


export default App;
