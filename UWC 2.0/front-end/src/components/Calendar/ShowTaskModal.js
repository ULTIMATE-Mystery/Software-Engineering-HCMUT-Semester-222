import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../scenes/calendar/calendar.css';

const JTask = ({task}) => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 taskd">
        MCP: {task.area}
      </div>
      <div className="col-md-6 taskd">
        Troller: {task.vehicle}
      </div>
      <div className="col-md-6 taskd">
        Janitor: {task.emp}
      </div>
      <div className="col-md-6 taskd"> 
      </div>
      <div className="col-md-12 taskd">
        Ngày: {task.startDate}
      </div>
      <div className="col-md-6 taskd">
        Bắt đầu: {task.start}
      </div>
      <div className="col-md-6 taskd">
        Kết thúc: {task.end}
      </div>
      <div className="col-md-12 taskd">
        Ghi chú: {task.note}
      </div>
    </div>
  )
}

const CTask = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 taskd">
        Route ID:
      </div>
      <div className="col-md-6 taskd">
        Phương tiện:
      </div>
      <div className="col-md-12 taskd">
        Collector:
      </div>
      <div className="col-md-6 taskd">
        Bắt đầu:
      </div>
      <div className="col-md-6 taskd">
        Kết thúc:
      </div>
      <div className="col-md-12 taskd">
        Ngày:
      </div>
      <div className="col-md-12 taskd">
        Ghi chú:
      </div>
    </div>
  );
}

const ShowTaskModal = ({ visible, task, update, toggle, erase }) => {
  let b = new Date(task?.startDate);

  return (
    <>
      {visible && <div className="modal-backdrop fade show"></div>}
      <div className={"modal fade " + (visible ? "show d-block" : "")}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{task?.name}</h5>
              <button
                type="button"
                onClick={toggle}
                className="btn-close"
              ></button>
            </div>
            <div className="modal-body">
              {task?.for === 'collector' ? <CTask task={task}/> : <JTask task={task} />}
            </div>
            <div className="modal-footer">
              <button className="btn rounded-pill edit" onClick={update}>
                Chỉnh sửa
              </button>
              <button className="btn rounded-pill delete" onClick={erase}>
                Xoá
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// END: Show Task Modal
export default ShowTaskModal;