import {FC} from 'react';
import CreateNewList from './createNewList';

const Sidebar: FC = () =>{
    return (
        <div className="column is-3">
            <CreateNewList />
        </div>
    )
}

export default Sidebar