import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scenes/calendar/calendar.css';

import ShowGroupTasks from './ShowGroupTasks';

const GroupTasks = ({
  show,
  tasks,
  maxSize = 4
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const tday = new Date();
  
  return (
    <>
      <ShowGroupTasks
        show={show}
        tasks={tasks}
        visible={showModal}
        toggle={() => setShowModal(!showModal)}
      />

      {tasks.length !== 0 &&
        (tasks.length < maxSize ? (
          tasks.map((task) => (
            <button
              key={task.id}
              onClick={() => show(task.id)}
              className={`btn btn-sm d-block w-100 text-truncate mx-auto taskBtn ${
                tday <= new Date(task.startDate) ? "green" : "gray"
              }`} 
            >
              {task.name}
            </button>
          ))
        ) : (
          <button
            onClick={() => setShowModal(!showModal) }
            className="btn btn-sm d-block w-100 text-truncate mx-auto taskBtn "
          >
            See more...
          </button>
        ))}
    </>
  );
};
// END: Group many tasks into 1 button

export default GroupTasks;