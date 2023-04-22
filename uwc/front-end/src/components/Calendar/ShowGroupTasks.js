import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scenes/calendar/calendar.css';

const ShowGroupTasks = ({ show, tasks, toggle, visible }) => {
    const date = new Date(tasks[0]?.startDate);
    const tday = new Date();

    return (
        <>
            {visible && <div className="modal-backdrop fade show"></div>}
            <div className={"modal fade " + (visible ? "show d-block" : "")}>
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{date.toLocaleString("vi-VN", {
                                weekday: "long",
                                day: "2-digit",
                                month: "long",
                                year: "numeric"
                            })}</h5>
                            <button
                                type="button"
                                onClick={toggle}
                                className="btn-close"
                            ></button>
                        </div>
                        <div
                            className="modal-body bg-light"
                            style={{ maxHeight: 400, overflowY: "auto" }}
                        >
                            {tasks.map((task) => (
                                <button
                                    key={task.id}
                                    onClick={() => {
                                        toggle();
                                        show(task.id);
                                    }}
                                    className={
                                        `btn btn-md d-block w-100 p-2 mb-3 text-truncate mx-auto rounded-pill 
                                        ${tday <= new Date(task.startDate) ? "green" : "gray"}`
                                    }
                                >
                                    <div className="row justify-content-center">
                                        <div className='col-md'>8:00 - 12:00</div>
                                        <div className='col-md'>{task.name}</div>
                                        <div className='col-md'>Nguyen Van A</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
// END: Show grouped tasks in a popup

export default ShowGroupTasks;