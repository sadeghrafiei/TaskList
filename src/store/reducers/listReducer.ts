import { deleteList } from "../actions/listActions";
import {
  ADD_LIST,
  ADD_TASK,
  DELETE_LIST,
  DELETE_TASK,
  GET_LISTS,
  GET_LIST_BY_ID,
  Lists,
  ListsAction,
  ListState,
  SET_LISTID_TO_DELETE,
  SET_LIST_TO_EDIT,
  SET_SELECTED_LIST,
  SET_TASK_TO_DELETE,
  SET_TASK_TO_EDIT,
  UNSET_TASK_TO_DELETE,
  UNSET_TASK_TO_EDIT,
  UPDATE_LIST,
  UPDATE_TASK
} from "../types";

const initialState: ListState = {
  lists: {},
  listIdToDelete: "",
  listToEdit: null,
  listById: null,
  selectedList: null,
  taskToDelete: null,
  taskToEdit: null,
};

const getListsFromLS = (): Lists => {
  if (localStorage.getItem("task_list")) {
    return JSON.parse(localStorage.getItem("task_list") || "{}");
  }

  return {};
};

const saveListsToLS = (lists: Lists) => {
  localStorage.setItem("task_list", JSON.stringify(lists));
};

export default (state = initialState, action: ListsAction): ListState => {
  const listsFromLS = getListsFromLS();

  switch (action.type) {
    case ADD_LIST:
      const cloneListsFromLS = { ...listsFromLS };
      cloneListsFromLS[action.payload.id] = action.payload;
      saveListsToLS(cloneListsFromLS);
      return {
        ...state,
        lists: cloneListsFromLS,
      };
    case GET_LISTS:
      return {
        ...state,
        lists: listsFromLS,
      };

    case GET_LIST_BY_ID:
      const list = listsFromLS[action.payload];
      return {
        ...state,
        listById: list,
      };

    case SET_LISTID_TO_DELETE:
      return {
        ...state,
        listIdToDelete: action.payload,
      };

    case SET_LIST_TO_EDIT:
      const listToEdit = listsFromLS[action.payload];
      return {
        ...state,
        listToEdit,
      };

    case DELETE_LIST:
      const clonedListsFromLS2 = { ...listsFromLS };
      const listId = clonedListsFromLS2[action.payload].id;
      delete clonedListsFromLS2[action.payload];
      saveListsToLS(clonedListsFromLS2);

      return {
        ...state,
        lists: clonedListsFromLS2,
        listIdToDelete: "",
        listById: null,
        selectedList:
          state.selectedList && listId === state.selectedList.id
            ? null
            : state.selectedList,
      };
      case UPDATE_LIST: 
      const clonedListsFromLS3 = {...listsFromLS}
      clonedListsFromLS3[action.payload.id].name = action.payload.name;
      saveListsToLS(clonedListsFromLS3);
      return {
          ...state,
          lists: clonedListsFromLS3,
          listToEdit: null
      }

      case SET_SELECTED_LIST: 
      const selectedList = getListsFromLS()[action.payload];
      return {
        ...state,
        selectedList: selectedList
      }

      case ADD_TASK: 
      const clonedListsFromLs4 = { ...listsFromLS};
      clonedListsFromLs4[action.payload.list.id].tasks.push(action.payload.task);
      saveListsToLS(clonedListsFromLs4);
      return {
        ...state,
        lists: clonedListsFromLs4,
        selectedList: clonedListsFromLs4[action.payload.list.id]
      }

      case SET_TASK_TO_DELETE: 
      return {
        ...state,
        taskToDelete: {
          task: action.payload.task,
          list: action.payload.list
        }
      }

      case UNSET_TASK_TO_DELETE: 
      return {
        ...state,
        taskToDelete: null
      }

      case DELETE_TASK:
        const clonedListFromLS5 = {...listsFromLS};
        const clonedTasks = [...clonedListFromLS5[state.taskToDelete!.list.id].tasks];
        const task = clonedTasks.find(task => task.id === state.taskToDelete!.task.id);
        clonedTasks.splice(clonedTasks.indexOf(task!),1);
        clonedListFromLS5[state.taskToDelete!.list.id].tasks = clonedTasks;
        saveListsToLS(clonedListFromLS5)
        return {
          ...state,
          lists: clonedListFromLS5,
          selectedList: clonedListFromLS5[state.taskToDelete!.list.id],
          taskToDelete: null
        }

        case SET_TASK_TO_EDIT: 
        return {
          ...state,
          taskToEdit: {
            task: action.payload.task,
            list: action.payload.list
          }
        }

        case UNSET_TASK_TO_EDIT: 
        return {
          ...state,
          taskToEdit: null
        }

        case UPDATE_TASK: 
        const clonedListsFromS6 = {...listsFromLS};
        const clonedList = {...clonedListsFromS6[action.payload.list.id]};
        const clonedTasks2 = [...clonedList.tasks];
        const task2 = clonedTasks2.find(task => task.id === action.payload.taskId);
        const clonedTask = {...task2!};
        clonedTask.name = action.payload.taskName;
        clonedTask.completed = action.payload.taskState;
        const updatedTasks = clonedTasks2.map(task => task.id === clonedTask.id ? clonedTask : task );
        clonedList.tasks = updatedTasks;
        clonedListsFromS6[clonedList.id] = clonedList;
        saveListsToLS(clonedListsFromS6);

        return {
          ...state,
          lists: clonedListsFromS6,
          selectedList: clonedList,
          taskToEdit: null
        }


    default:
      return state;
  }
};
