import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

function SingleTaskContainer() {
  let { taskId } = useParams(); //get id from URL
  taskId = parseInt(taskId); //convert to integer

  //get task from state based on URL parameter
  const task = useSelector(state =>
    state.tasks.find(task => task.id === taskId)
  );

  if (!task) {
    return (
      <section>
        <h2>Task not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="task">
        <h2>{task.title}</h2>
        <p className="task-title">{task.title}</p>
      </article>
    </section>
  );
}

export default SingleTaskContainer;