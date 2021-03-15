import { FC } from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Notification from './Components/Notfication'
import { RootState } from './store/store';

const App:FC = () => {
  const notificationMsg = useSelector((state: RootState) => state.notificaion.message)

  return(
    <div className="App">
      <Header title="Task list App" subtitle="Create some lists add some tasks to each list" />

      <div className="container px-5">
        <div className="columns">
          <Sidebar />
        </div>
      </div>

      <Notification msg={notificationMsg} />
    </div>
  )
  }


export default App;
