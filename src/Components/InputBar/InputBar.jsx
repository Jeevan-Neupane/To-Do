import { MainDiv, TaskInput, AddButton } from "./InputBarStyle";
import { useEffect, useState, useRef } from "react";
import useGlobalState from "../../Hooks/useGlobalState";
import { useNavigate } from "react-router-dom";

function InputBar() {
  const { AddTask } = useGlobalState();
  const [task, setTask] = useState("");
  const navigate = useNavigate();
  const { state, ChangeEditedTask, onEditIconClicked } = useGlobalState();
  const { editTask } = state;
  const inputRef = useRef(null);
  const [focus, setFocus] = useState(false);

  const onTaskEntered = (events) => {
    setTask(events.target.value);
  };

  useEffect(() => {
    if (editTask) {
      setTask(editTask.name);
      inputRef.current.focus();
    }
  }, [editTask]);

  useEffect(() => {
    inputRef.current.focus();
  }, [focus]);

  const onTaskSubmit = (events) => {
    events.preventDefault();

    if (!editTask) {
      const taskDetails = {
        id: Math.floor(Math.random() * 1234400),
        name: task,
        status: false,
      };
      AddTask(taskDetails);
    } else {
      setFocus(!focus);
      ChangeEditedTask(editTask.id, task, false);

      onEditIconClicked(null);
    }

    setTask("");
    navigate("/");
  };

  return (
    <MainDiv onSubmit={onTaskSubmit}>
      <TaskInput
        type="text"
        placeholder="Enter A Task"
        value={task}
        onChange={onTaskEntered}
        required
        ref={inputRef}
      />
      <AddButton>Add</AddButton>
    </MainDiv>
  );
}

export default InputBar;
