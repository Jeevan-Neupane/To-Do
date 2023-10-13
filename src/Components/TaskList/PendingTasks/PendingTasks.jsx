import { TaskContainer,EmptyHeading } from "../../../Styles/containers";
import useGlobalState from "../../../Hooks/useGlobalState";
import TaskMapper from "../TaskMapper/TaskMapper";
function PendingTasks() {
  const { state } = useGlobalState();
  const { tasks } = state;

  const inCompletedTasks = tasks.filter((task) => {
    return task.status !== true;
  });
  if (inCompletedTasks.length === 0) {
    return (
      <TaskContainer>
        <EmptyHeading>No Task Exist</EmptyHeading>
      </TaskContainer>
    );
  }
  return (
    <TaskContainer>
      <TaskMapper tasks={inCompletedTasks} />
    </TaskContainer>
  );
}

export default PendingTasks;
