import { TaskContainer, EmptyHeading } from "../../../Styles/containers";
import useGlobalState from "../../../Hooks/useGlobalState";
import TaskMapper from "../TaskMapper/TaskMapper";

function AllTasks() {
  const { state } = useGlobalState();
  const { tasks } = state;

  if (tasks.length === 0) {
    return (
      <TaskContainer>
        <EmptyHeading>No Task Exist</EmptyHeading>
      </TaskContainer>
    );
  }

  return (
    <TaskContainer>
      <TaskMapper tasks={tasks} />
    </TaskContainer>
  );
}

export default AllTasks;
