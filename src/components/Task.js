import { FaTimesCircle, FaEdit, FaClock, FaCheckCircle } from "react-icons/fa";
import "./Task.css";

const Task = ({ task, handleChangeStatus, handleDeleteTask }) => {


  return (
    <div className="task">
      <h3>{task.title}</h3>

      <FaTimesCircle
        className="icon-delete"
        onClick={() => handleDeleteTask(task.id)}
      />

      <div className="actions">
        <button className="btn btn-pending" onClick={() => handleChangeStatus(task.id, 'doing')}>
          <FaClock />
        </button>

        <button className="btn btn-doing" onClick={() => handleChangeStatus(task.id, 'pending')}>
          <FaEdit />
        </button>

        <button className="btn btn-done" onClick={() => handleChangeStatus(task.id, 'done')}>
          <FaCheckCircle />
        </button>
      </div>
    </div>
  )
}

export default Task
