import { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './calendar.css';
import data from './data.json'

import GroupTasks from '../../components/Calendar/GroupTasks';
import ShowTaskModal from '../../components/Calendar/ShowTaskModal';
import EditTaskModal from '../../components/Calendar/EditTaskModal';

// START: Calendar
const Calendar = () => {
  let today = new Date();
  let grid = { id: 0, day: 0 };
  const weekspMonth = [0, 1, 2, 3, 4];
  const weekDays = ["cn", "t2", "t3", "t4", "t5", "t6", "t7"];
  const [tasks, setTasks] = useState(data);
  const [monthDifference, setMonthDifference] = useState(0);
  const [currentTask, setCurrentTask] = useState({});
  const [month, setMonth] = useState({
    today,
    firstDay: new Date(today.getFullYear(), today.getMonth(), 1),
    lastDay: new Date(today.getFullYear(), today.getMonth() + 1, 0)
  });
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    today = new Date();
    grid = { id: 0, day: 0 };
    today.setMonth(today.getMonth() + monthDifference);
    setMonth({
      today,
      firstDay: new Date(today.getFullYear(), today.getMonth(), 1),
      lastDay: new Date(today.getFullYear(), today.getMonth() + 1, 0)
    });
  }, [monthDifference]);

  const getDayTasks = (day = 0) => {
    let a = new Date();
    let b = new Date();

    a.setMonth(a.getMonth() + monthDifference);
    b.setMonth(b.getMonth() + monthDifference);

    a.setDate(day);
    b.setDate(day - 1);

    a.setHours(23);
    b.setHours(0);

    return tasks.filter((task) => {
      let c = new Date(task?.startDate);
      let d = new Date(task?.startDate);

      c.setHours(23);
      d.setHours(0);

      return c < a && b < d;
    });
  };

  const updateTask = ({ id, name, type, vehicle, area, emp, startDate, start, end, note }) => {
    setTasks([
      ...tasks.filter((task) => task.id !== id),
      {
        id: id,
        name: name,
        type: type,
        vehicle: vehicle,
        area: area,
        emp: emp,
        startDate: startDate,
        start: start,
        end: end,
        note: note,
      }
    ]);
  };


  const deleteTask = () => {
    if (window.confirm("You are about to delete a task")) {
      setTasks([...tasks.filter((task) => task.id !== currentTask.id)]);
      setShowModal(false);
    }
  };

  const monthListVi = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
  const curMonth = month.today.toLocaleString("default", { month: "numeric" });
  const dMonth = monthListVi[curMonth - 1];

  return (
    <div className="container" id="CALENDAR">
      <ShowTaskModal
        visible={showModal}
        erase={deleteTask}
        task={currentTask}
        toggle={() => setShowModal(!showModal)}
        update={() => {
          setShowModal(!showModal);
          setShowEditModal(!showEditModal);
        }}
      />
      <EditTaskModal
        visible={showEditModal}
        task={currentTask}
        updateTask={updateTask}
        toggle={() => setShowEditModal(!showEditModal)}
      />
      <div className="container cal">
        <div className="d-flex justify-content-between mb-1 tHead">
          <div className="
          badge-create 
          text-dark fs-4">
            {`${dMonth} `}
            {
              month.today.toLocaleString("default", { year: "numeric" })
            }
          </div>
          <div className="btn-change-month-container">
            <button
              className="btn ms-1 turn"
              onClick={() => setMonthDifference(monthDifference - 1)}
            >
              <i className="fi fi-br-angle-left t"></i>
            </button>
            <button
              className="btn ms-1 turn"
              onClick={() => setMonthDifference(monthDifference + 1)}
            >
              <i className="fi fi-br-angle-right t"></i>
            </button>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-borderless table-responsive text-center">
            <thead>
              <tr className="text-uppercase">
                {weekDays.map((day, id) => (
                  <th className="weekdays" key={id}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weekspMonth.map((week, index) => (
                <tr key={index}>
                  {weekDays.map((day, id) => {
                    if (grid.day || month.firstDay.getDay() === grid.id)
                      grid.day++;
                    grid.id++;
                    if (grid.day > month.lastDay.getDate()) grid.day = 0;
                    return (
                      <td key={id} className={"box"}>
                        {grid.day !== 0 && (
                          <>
                            <span
                              className={
                                monthDifference === 0 &&
                                  grid.day === new Date().getDate()
                                  ? "today"
                                  : ""
                              }
                            >
                              {grid.day}
                            </span>
                            <GroupTasks
                              tasks={getDayTasks(grid.day)}
                              show={(id) => {
                                setCurrentTask(tasks.find((a) => id === a.id));
                                setShowModal(!showModal);
                              }}
                            />
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Calendar;
// END: Calendar
