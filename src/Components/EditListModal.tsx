import { FormEvent, FC, useState } from 'react';
import { List } from '../store/types';
import {setListToEdit , updateList , setNotification} from '../store/actions';
import {useDispatch} from 'react-redux'

interface EditListModalProps {
    list: List;
}

const EditListModal: FC<EditListModalProps> = ({ list }) => {
    const dispatch = useDispatch()
    const [listName, setListName] = useState(list.name);

    const hideModalHandler = () => {
        dispatch(setListToEdit(''))
     }
    const submitHandler = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault();

        if(listName.trim()=== '') {
            return alert('List name is required!')
        }
        if(listName.trim() === list.name) {
            return alert('list name is the same as before!')
        }

        dispatch(updateList(list.id , listName.trim()))
        dispatch(setNotification(`List "${list.name}" updated!`))
    }
    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setListName(e.currentTarget.value)
    }

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={hideModalHandler}></div>
                <form className="modal-card" onSubmit={submitHandler}>
                    <header className="modal-card-head">
                        <p className="modal-card-title">Edit List</p>
                        <button type="button" className="delete" onClick={hideModalHandler}></button>
                    </header>
                    <div className="modal-card-body">
                        <div className="field">
                            <div className="label">
                                List Name
                            </div>
                            <div className="control">
                            <input type="text" 
                            className="input" 
                            name="listName" 
                            placeholder="List name" 
                            value={listName} 
                            onChange={changeHandler} />
                            </div>
                        </div>
                    </div>
                    <footer className="modal-card-foot">
                        <button type="submit" className="button is-success">Save Changes</button>
                        <button type="button" className="button" onClick={hideModalHandler}>Cancel</button>
                    </footer>
                </form>
        </div>
    )
}

export default EditListModal