import { createContext, useEffect, useReducer } from "react";
import reducer from "./ReducerFile";
import setLocalStorage from "../Hooks/useLocalStorage";
import getLocalData from "../Hooks/getLocalData";
const intialState = {
  tasks: getLocalData(),
  darkTheme: false,
  editTask: null,
};

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    setLocalStorage(state.tasks);
  }, [state]);

  const ThemeToggler = (value) => {
    dispatch({
      type: "THEME_TOGGLER",
      payload: value,
    });
  };

  const AddTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  const OnCheckBoxChecked = (id) => {
    dispatch({
      type: "CHECKBOX_STATUS",
      payload: id,
    });
  };

  const DeleteTask = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const onEditIconClicked = (task) => {
    dispatch({
      type: "SET_EDIT_TASK",
      payload: task,
    });
  };

  const ChangeEditedTask = (id, name, status) => {
    dispatch({
      type: "CHANGE_EDITED_TASK",
      payload: {
        id,
        name,
        status,
      },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        ThemeToggler,
        AddTask,
        OnCheckBoxChecked,
        DeleteTask,
        onEditIconClicked,
        ChangeEditedTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
