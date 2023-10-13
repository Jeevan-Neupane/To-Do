import { TaskContainer, EmptyHeading } from "../../../Styles/containers";
import useGlobalState from "../../../Hooks/useGlobalState";
import TaskMapper from "../TaskMapper/TaskMapper";
function CompeletedTasks() {
  const { state } = useGlobalState();
  const { tasks } = state;

  const completedTasks = tasks.filter((task) => {
    return task.status === true;
  });

  if (completedTasks.length === 0) {
    return (
      <TaskContainer>
        <EmptyHeading>No Task Exist</EmptyHeading>
      </TaskContainer>
    );
  }

  return (
    <TaskContainer>
      <TaskMapper tasks={completedTasks} />
    </TaskContainer>
  );
}

export default CompeletedTasks;
