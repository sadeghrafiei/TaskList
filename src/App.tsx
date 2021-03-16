import { FC } from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Notification from './Components/Notfication'
import { RootState } from './store/store';
import DeleteListModal from './Components/DeleteListModal';
import EditListModal from './Components/EditListModal';

const App:FC = () => {
  const notificationMsg = useSelector((state: RootState) => state.notificaion.message)
  const listIdToDelete =useSelector((state: RootState) => state.list.listIdToDelete)
  const listToEdit = useSelector((state: RootState) => state.list.listToEdit)
  return(
    <div className="App">
      <Header title="Task list App" subtitle="Create some lists add some tasks to each list" />

      <div className="container px-5">
        <div className="columns">
          <Sidebar />
        </div>
      </div>

      <Notification msg={notificationMsg} />
      {listIdToDelete && <DeleteListModal listId={listIdToDelete} />} 
      {listToEdit && <EditListModal list={listToEdit} />}
    </div>
  )
  }


export default App;
