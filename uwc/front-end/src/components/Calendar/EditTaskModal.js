import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scenes/Schedule/index.css';

const CForm = ({ updateTask, task }) => {
    const [name, setName] = React.useState("");
    const [vehicle, setVehicle] = React.useState("");
    const [emp, setEmp] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [start, setStart] = React.useState("");
    const [end, setEnd] = React.useState("");
    const [note, setNote] = React.useState("");

    React.useEffect(() => {
        setName(task?.name || "");
        setVehicle(task?.vehicle || "");
        setEmp(task?.emp || "");
        setStart(task?.start || "");
        setEnd(task?.end || "");
        setNote(task?.note || "");
        setStartDate(task?.startDate || "");
    }, [task]);

    const handleSubmit = (e) => {
        e.prtaskDefault();
        let b = new Date(startDate);
        updateTask({
            name: name?.trim(),
            startDate: b.toISOString(),
            id: Number.parseInt(task?.id),
            vehicle: vehicle,
            emp: emp,
            start: start,
            end: end,
            note: note?.trim()
        });
        setName("");
        setStartDate("");
        setNote("");
        // toggle();
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">Công việc</label>
                        <input
                            type="text"
                            value={name}
                            required={true}
                            placeholder="Name"
                            className="form-control mb-2"
                            onChange={(el) => setName(el.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">Phương tiện</label>
                        <select
                            value={['Xe tải A', 'Xe tải B', 'Xe tải C']}
                            required={true}
                            className="form-control mb-2"
                            onChange={(el) => setVehicle(el.target.value)}
                        >
                            <option value={vehicle}>{vehicle}</option>
                            {['Xe tải A', 'Xe tải B', 'Xe tải C'].map((item, id) => (
                                <option key={id} value={item.value}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">Collector</label>
                        <select
                            value={['c1', 'c2', 'c3']}
                            required={true}
                            className="form-control mb-2"
                            onChange={(el) => setEmp(el.target.value)}
                        >
                            <option value={emp}>{emp}</option>
                            {['Nguyen A', 'Nguyen B', 'Nguyen C'].map((item, id) => (
                                <option key={id} value={item.value}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">Ngày</label>
                        <input
                            type="date"
                            required={true}
                            value={startDate}
                            placeholder="Start"
                            className="form-control mb-2"
                            onChange={(el) => setStartDate(el.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label className="fw-lighter">Bắt đầu</label>
                        <input
                            type="time"
                            required={true}
                            value={start}
                            placeholder="Start"
                            className="form-control mb-2"
                            onChange={(el) => setStart(el.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label className="fw-lighter">Kết thúc</label>
                        <input
                            type="time"
                            required={true}
                            value={end}
                            placeholder="End"
                            className="form-control mb-2"
                            onChange={(el) => setEnd(el.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="fw-lighter">Note</label>
                        <textarea
                            rows={3}
                            value={note}
                            placeholder="Note"
                            className="form-control mb-2"
                            onChange={(el) => setNote(el.target.value)}
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="d-grid">
                <button className="btn edit" type="submit">
                    Lưu thay đổi
                </button>
            </div>
        </form>
    )
}

const JForm = ({ updateTask, task }) => {
    const [name, setName] = React.useState("");
    const [vehicle, setVehicle] = React.useState("");
    const [area, setArea] = React.useState("");
    const [emp, setEmp] = React.useState("");
    const [startDate, setStartDate] = React.useState("");
    const [start, setStart] = React.useState("");
    const [end, setEnd] = React.useState("");
    const [note, setNote] = React.useState("");

    React.useEffect(() => {
        setName(task?.name || "");
        setVehicle(task?.vehicle || "");
        setArea(task?.area || "");
        setEmp(task?.emp || "");
        setStart(task?.start || "");
        setEnd(task?.end || "");
        setNote(task?.note || "");
        setStartDate(task?.startDate || "");
    }, [task]);

    const handleSubmit = (e) => {
        e.prtaskDefault();
        let b = new Date(startDate);
        updateTask({
            name: name?.trim(),
            startDate: b.toISOString(),
            id: Number.parseInt(task?.id),
            vehicle: vehicle,
            area: area,
            emp: emp,
            start: start,
            end: end,
            note: note?.trim()
        });
        setName("");
        setStartDate("");
        setNote("");
        // toggle();
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">Công việc</label>
                        <input
                            type="text"
                            value={name}
                            required={true}
                            placeholder="Name"
                            className="form-control mb-2"
                            onChange={(el) => setName(el.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">Troller</label>
                        <select
                            value={vehicle}
                            required={true}
                            className="form-control mb-2"
                            onChange={(el) => setVehicle(el.target.value)}
                        >
                            <option value={vehicle}>{vehicle}</option>
                            {['Troller 001', 'Trollor 002', 'Troller 003'].map((item, id) => (
                                <option key={id} value={item.value}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">Janitor</label>
                        <select
                            value={emp}
                            required={true}
                            className="form-control mb-2"
                            onChange={(el) => setEmp(el.target.value)}
                        >
                            <option value={emp}>{emp}</option>
                            {['Nguyen A', 'Nguyen B', 'Nguyen C'].map((item, id) => (
                                <option key={id} value={item.value}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">MCP</label>
                        <select
                            value={area}
                            required={true}
                            className="form-control mb-2"
                            onChange={(el) => setArea(el.target.value)}
                        >
                            <option value={area}>{area}</option>
                            {['MCP 1', 'MCP 2', 'MCP 3'].map((item, id) => (
                                <option key={id} value={item.value}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="fw-lighter">Ngày</label>
                        <input
                            type="date"
                            required={true}
                            value={startDate}
                            placeholder="Start"
                            className="form-control mb-2"
                            onChange={(el) => setStartDate(el.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label className="fw-lighter">Bắt đầu</label>
                        <input
                            type="time"
                            required={true}
                            value={start}
                            placeholder="Start"
                            className="form-control mb-2"
                            onChange={(el) => setStart(el.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="form-group">
                        <label className="fw-lighter">Kết thúc</label>
                        <input
                            type="time"
                            required={true}
                            value={end}
                            placeholder="End"
                            className="form-control mb-2"
                            onChange={(el) => setEnd(el.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <label className="fw-lighter">Ghi chú</label>
                        <textarea
                            rows={3}
                            value={note}
                            placeholder="Note"
                            className="form-control mb-2"
                            onChange={(el) => setNote(el.target.value)}
                        ></textarea>
                    </div>
                </div>
            </div>
            <div className="d-grid">
                <button className="btn edit" type="submit">
                    Lưu thay đổi
                </button>
            </div>
        </form>
    );
}

const EditTaskModal = ({ task, toggle, visible, updateTask }) => {
    return (
        <>
            {visible && <div className="modal-backdrop fade show"></div>}
            <div className={"modal fade " + (visible ? "show d-block" : "")}>
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Task</h5>
                            <button
                                type="button"
                                onClick={toggle}
                                className="btn-close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {
                                task.type === "collector" ? <CForm updateTask={updateTask} task={task} /> :
                                    <JForm updateTask={updateTask} task={task} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditTaskModal;