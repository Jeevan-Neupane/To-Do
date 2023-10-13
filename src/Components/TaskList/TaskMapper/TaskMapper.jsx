import { TaskName, TaskBox, Checkbox } from "./TaskMapperStyle";
import { useLocation } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { IconsBox } from "./TaskMapperStyle";
import useGlobalState from "../../../Hooks/useGlobalState";

function TaskMapper({ tasks }) {
  const location = useLocation();

  const { OnCheckBoxChecked, DeleteTask, onEditIconClicked } = useGlobalState();

  return (
    <>
      {tasks.map((task) => {
        return (
          <TaskBox key={task.id}>
            {location.pathname === "/" && (
              <Checkbox
                type="checkbox"
                checked={task.status}
                onChange={() => {
                  OnCheckBoxChecked(task.id);
                }}
              />
            )}

            <TaskName iscompleted={task.status ? "yes" : "no"}>
              {task.name}
            </TaskName>

            <IconsBox>
              {location.pathname !== "/tasks/completed" && (
                <BiEdit
                  onClick={() => {
                    onEditIconClicked(task);
                  }}
                />
              )}
              <AiFillDelete
                onClick={() => {
                  DeleteTask(task.id);
                }}
              />
            </IconsBox>
          </TaskBox>
        );
      })}
    </>
  );
}

export default TaskMapper;
