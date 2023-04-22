import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import "./index.css"
import React, { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
// import * as yup from "yup";
import Select from 'react-select';

// import {Form} from 'react-bootstrap'
// import { useDispatch } from "react-redux";

import { selectMCP, selectRoute, selectVehicle, selectCollector, selectArea, selectTroller, selectJanitor } from "../../data/DataTask";

const SelectWorker = () => {


  const isNonMobile = useMediaQuery("(min-width:600px)");


  const [selected, setSelected] = useState("Chọn loại");
  const [selectedMCP, setSelectedMCP] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState([]);
  const [selectedCollector, setSelectedCollector] = useState([]);

  const [selectedJanitor, setSelectedJanitor] = useState([]);
  const [selectedArea, setSelectedArea] = useState([]);
  const [selectedTroller, setSelectedTroller] = useState([]);

  const [Date, setDate] = useState([]);
  const [Time, setTime] = useState([]);
  const [note, setNote] = useState([]);


  const onClear = () => {
    setSelectedMCP("");
    setSelectedRoute("");
    setSelectedVehicle("");
    setSelectedCollector("");
    setDate(null);
    setTime(null);

    setSelectedArea("");
    setSelectedTroller("");
    setSelectedJanitor("");

  }





  const handleChange = (e) => {

    console.log(e.target.value);

    setSelected(e.target.value);
    form.type=e.target.value;
    // console.log(form.type);
  };



  function handleChangeMCP(data) {
    console.log(data);
    setSelectedMCP(data);
    form.mcp= data.label;
    // form.type=selected.text;
    // setField("mcp", selectedMCP.value)
  }

  function handleChangeRoute(data) {
    console.log(data);
    setSelectedRoute(data);
    form.locate = data.label;
  }



  function handleChangeVehicle(data) {
    console.log(data);
    setSelectedVehicle(data);
    form.vehicle = data.label;
  }

  function handleChangeCollector(data) {
    console.log(data);
    setSelectedCollector(data);
    form.userId=data.label;
  }
  function handleChangeArea(data) {
    console.log(data);
    setSelectedArea(data);
    form.locate = data.label;
  }

  function handleChangeTroller(data) {
    console.log(data);
    setSelectedTroller(data);
    form.vehicle = data.label;
  }

  function handleChangeJanitor(data) {
    console.log(data);
    setSelectedJanitor(data);
    form.userId = data.label;
  }

  const handleChangeDate = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
    form.Date = e.target.value;
  }

  const handleChangeTime = (e) => {
    console.log(e.target.value);
    setTime(e.target.value);
    form.startTime= e.target.value;
  }

  const handleChangeNote = (e) => {
    console.log(e.target.value);
    setNote(e.target.value);
    form.note= e.target.value;
  }

  const options = [
    { value: 'Initial', text: 'Chọn loại' },
    { value: 'Collector', text: 'Collector' },
    { value: 'Janitor', text: 'Janitor' },
  ];

  const [form, setForm] = useState({
    mcp: '',
    Date: '',
    startTime: '',
    endTime: '',
    locate: '',
    vehicle: '',
    userId: '',
    note: '',
    status: '',
    type: ''
  })

  const [errors, setErrors] = useState({})

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null
      })
  }

  const validateForm = () => {
    const {
      mcp, Date, locate, startTime, vehicle, userId, note, endTime, status, type
    } = form

    const newErrors = {}

    if (!mcp || mcp === '') newErrors.mcp = "Bạn chưa chọn MCP"

    if (!Date || Date === '') newErrors.Date = "Bạn chưa chọn ngày"

    if (!locate || locate === '') newErrors.locate = "Bạn chưa chọn tuyến đường hoặc khu vực"

    if (!startTime || startTime === '') newErrors.startTime = "Bạn chưa chọn thời gian"

    if (!vehicle || vehicle === '') newErrors.vehicle = "Bạn chưa chọn phương tiện"

    if (!userId || userId === '') newErrors.userId = "Bạn chưa chọn nhân viên"



    // if (!note || note === '') newErrors.collector = "Bạn chưa chọn nhân viên"

    return newErrors
  }

  const success = document.getElementById('success');
  const fail = document.getElementById('fail');

  const handleFormSubmit = (e) => {
    // form.type = selected.text;
    // form.mcp = selectedMCP.label;
    // form.Date = Date;
    // form.locate = selectedRoute.label;
    // form.startTime = Time;
    // form.vehicle = selectedVehicle.label;
    // form.userId = selectedCollector.label;
    // if (!selectedMCP) {
    //   form.mcp = '';
    // }
    // if (!Date) {
    //   form.Date = '';
    //   setDate(null);
    // }


    // if (!selectedRoute) {
    //   form.locate = '';
    // }
    // if (!Time) {
    //   form.startTime = '';
    //   setTime(null);
    // }
    // if (!selectedVehicle) {
    //   form.vehicle = '';
    // }
    // if (!selectedCollector) {
    //   form.userId = '';
    // }



    if (!note || note.length === 0) {
      form.note = "";
    }
    else {
      form.note = note;
    }

    // console.log("MCP: ",form.mcp);
    // console.log("Date: ",form.Date);
    // console.log("Locate: ",form.locate);
    // console.log("Time: ",form.startTime);
    // console.log("Vehicle: ",form.vehicle);
    // console.log("Note: ",form.note);
    // console.log(form);



    e.preventDefault()
    // setMessage('')

    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      fail.style.display = 'block';
      console.log("form error: ", form)
      // setMessage('Whoops, please check for errors below highlighted in red')
    }
    else {
      form.status = "Đang thực hiện"
      form.endTime = ''
      console.log("form submitted", form)


      setTimeout(() => {
        setForm({
          mcp: '',
          locate: '',
          Date: '',
          startTime: '',
          vehicle: '',
          userId: '',
          note: '',
          status: "Đang thực hiện",
          endTime: '',
          type: selected,

        })
        setSelectedMCP("");
        setSelectedRoute("");
        setSelectedVehicle("");
        setSelectedCollector("");
        setDate("");
        setTime("");
        setNote("");

        setSelectedArea("");
        setSelectedTroller("");
        setSelectedJanitor("");

      }, 2000);

      success.style.display = 'block';
    }

    setTimeout(() => {
      success.style.display = 'none';
      fail.style.display = 'none';

    }, 3000);
  };








const validate = form => {

}





  return (

    <Box m='20px'>

      <div className="header-custom">
        <Header title="TẠO - GÁN CÔNG VIỆC" 
         subtitle="Chọn loại hình nhân viên"
        />
        
      </div >


      <div className="custom-select">
        <div>
          <label className="text-select"> Loại hình nhân viên </label>
        </div>
        <div>
          <select value={selected} onChange={(e) => handleChange(e)} className="select-worker"

          >

            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}

          </select>
        </div>
      </div>


      {selected === "Collector" ?


        <div>


          <form onSubmit={handleFormSubmit}>
            
            <div className="box-assign">
              <Box
                m = "40px 25px 10px 25px"
                height="65vh"
                color="white"
                className="grid-layout"
                display="grid"
                gap="20px"
                gridTemplateColumns="repeat(4, minmax(2, 4fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                {/* <span className="text-attribute">Các thông số</span> */}
                <div className="mcp-and-date-container">
                  <div className="mcp-container">
                    <label className="text-mcp">Bãi tập kết rác</label>
                    <Select
                      className="select-mcp"
                      options={selectMCP}
                      placeholder="Chọn bãi"
                      value={selectedMCP}

                      onChange={(handleChangeMCP)}

                      // isMulti
                      // isClearable={true}
                      isSearchable={true}

                      // isOptionDisabled={() => selectedMCP.length >= 3}
                      // isInvalid={!!errors.mcp}

                    />

                    {/* <div className="mcp-error">
                      <span type='invalid'> {errors.mcp}
                      </span>
                    </div> */}
                    {/* {Formik.errors.selectedMCP ? <div>"Nhập dữ liệu" </div> : null} */}

                  </div>


                  <div className="date-container">
                    <div>
                      <label className="text-date">Ngày làm việc</label>
                    </div>
                    <div>
                      <input
                        className="select-date"
                        type="date"
                        value={Date}

                        onChange={(handleChangeDate)}
                        // isInvalid={!!errors.Date}
                      />


                    </div>
{/* 
                    <div className="date-error">
                      <span type='invalid' aria-disabled> {errors.Date}
                      </span>
                    </div> */}

                  </div>
                </div>

                <div className="locate-and-time-container">
                  <div className="locate-container" >
                    <label className="text-locate">Tuyến đường</label>
                    <Select
                      className="select-locate"
                      options={selectRoute}
                      placeholder="Chọn tuyến đường"
                      value={selectedRoute}
                      onChange={handleChangeRoute}




                      isSearchable={true}
                      // isInvalid={!!errors.locate}
                    />

                    {/* <div className="locate-error">
                      <span type='invalid' aria-disabled="false"> {errors.locate}
                      </span>
                    </div> */}

                  </div>

                  <div className="time-container">
                    <div> <label className="text-hour">Giờ làm việc</label> </div>
                    <div>
                      <input

                        className="select-hour"
                        type="time"
                        value={Time}
                        onChange={handleChangeTime}
                        // isInvalid={!!errors.startTime}

                      />
                      {/* <div className="time-error">
                        <span type='invalid' aria-disabled> {errors.startTime}
                        </span>
                      </div> */}

                    </div>


                  </div>
                </div>

                <div className="vehicle-container">
                  <label className="text-vehicle">Phương tiện</label>
                  <Select
                    className="select-vehicle"
                    options={selectVehicle}
                    placeholder="Chọn phương tiện"
                    value={selectedVehicle}
                    onChange={handleChangeVehicle}

                    isSearchable={true}
                    // isInvalid={!!errors.vehicle}
                  />
                  {/* <div className="vehicle-error">
                    <span type='invalid' aria-disabled> {errors.vehicle}
                    </span>
                  </div> */}

                </div>

                <div className="collector-container">
                  <label className="text-collector">Nhân viên</label>
                  <Select
                    className="select-collector"
                    options={selectCollector}
                    placeholder="Chọn nhân viên"
                    value={selectedCollector}
                    onChange={handleChangeCollector}

                    // isMulti
                    // isClearable={true}
                    isSearchable={true}
                    // isOptionDisabled={() => selectedCollector.length >= 2}
                    // isInvalid={!!errors.userId}

                  />
                  {/* <div className="collector-error">
                    <span type='invalid' aria-disabled> {errors.userId}
                    </span>
                  </div> */}


                </div>

                <div>
                  <div>
                    <label className="text-note"> Lưu ý</label>
                  </div>
                  <div>

                    <input

                      className="select-note"
                      type="text"
                      placeholder="Ghi chú thêm thông tin cần thiết"

                      value={note}
                      onChange={handleChangeNote}


                    />

                  </div>

                </div>

              </Box>
            </div>
            <Box display="flex" justifyContent="end" mt="20px">
              <div className="button-container">
              <div className="submit-container">
                  <Button className="submit-button" type="submit" color="secondary" variant="contained" onClick={handleFormSubmit}>
                    Xác nhận
                  </Button>
                </div>
              <div className="cancel-container">
                  <Button className="cancel-button" type="reset" color="error" variant="contained" onClick={onClear}>
                    Hủy
                  </Button>
                </div>



              </div>
            </Box>
          </form>
        </div>


        : ""}


      {selected === "Janitor" ?
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="box-assign">
              <Box
                m = "40px 25px 10px 25px"
                height="65vh"
                color="white"
                className="grid-layout"
                display="grid"
                gap="20px"
                gridTemplateColumns="repeat(4, minmax(2, 4fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <div className="mcp-and-date-container">
                  <div className="mcp-container">
                    <label className="text-mcp">Bãi tập kết rác</label>
                    <Select
                      className="select-mcp"
                      options={selectMCP}
                      placeholder="Chọn bãi"
                      value={selectedMCP}

                      onChange={(handleChangeMCP)}

                      // isMulti
                      // isClearable={true}
                      isSearchable={true}

                      // isOptionDisabled={() => selectedMCP.length >= 3}
                      // isInvalid={!!errors.mcp}

                    />

                    {/* <div className="mcp-error">
                      <span type='invalid'> {errors.mcp}
                      </span>
                    </div> */}

                  </div>


                  <div className="date-container">
                    <div>
                      <label className="text-date">Ngày làm việc</label>
                    </div>
                    <div>
                      <input
                        className="select-date"
                        type="date"
                        value={Date}

                        onChange={(handleChangeDate)}
                        // isInvalid={!!errors.Date}
                      />


                    </div>
{/* 
                    <div className="date-error">
                      <span type='invalid' aria-disabled> {errors.Date}
                      </span>
                    </div> */}

                  </div>
                </div>

                <div className="locate-and-time-container">
                  <div className="locate-container">
                    <label className="text-locate">Khu vực</label>
                    <Select
                      className="select-locate"
                      options={selectArea}
                      placeholder="Chọn khu vực"
                      value={selectedArea}
                      onChange={handleChangeArea}


                      isSearchable={true}
                      // isInvalid={!!errors.locate}
                    />
{/* 
                    <div className="locate-error">
                      <span type='invalid' aria-disabled="false"> {errors.locate}
                      </span>
                    </div> */}

                  </div>

                  <div className="time-container">
                    <div> <label className="text-hour">Giờ làm việc</label> </div>
                    <div>
                      <input

                        className="select-hour"
                        type="time"
                        value={Time}
                        onChange={handleChangeTime}
                        // isInvalid={!!errors.startTime}

                      />
                      {/* <div className="time-error">
                        <span type='invalid' aria-disabled> {errors.startTime}
                        </span>
                      </div> */}

                    </div>


                  </div>
                </div>

                <div className="vehicle-container">
                  <label className="text-vehicle">Phương tiện</label>
                  <Select
                    className="select-vehicle"
                    options={selectTroller}
                    placeholder="Chọn xe thu gom"
                    value={selectedTroller}
                    onChange={handleChangeTroller}

                    isSearchable={true}
                    // isInvalid={!!errors.vehicle}
                  />
                  {/* <div className="vehicle-error">
                    <span type='invalid' aria-disabled> {errors.vehicle}
                    </span>
                  </div> */}

                </div>

                <div className="collector-container">
                  <label className="text-collector">Nhân viên</label>
                  <Select
                    className="select-collector"
                    options={selectJanitor}
                    placeholder="Chọn nhân viên"
                    value={selectedJanitor}
                    onChange={handleChangeJanitor}

                    // isMulti
                    // isClearable={true}
                    isSearchable={true}
                    // isOptionDisabled={() => selectedCollector.length >= 2}
                    // isInvalid={!!errors.userId}

                  />
                  {/* <div className="collector-error">
                    <span type='invalid' aria-disabled> {errors.userId}
                    </span>
                  </div> */}


                </div>

                <div>
                  <div>
                    <label className="text-note"> Lưu ý</label>
                  </div>
                  <div>

                    <input

                      className="select-note"
                      type="text"
                      placeholder="Ghi chú thêm thông tin cần thiết"

                      value={note}
                      onChange={handleChangeNote}


                    />

                  </div>

                </div>

              </Box>
            </div>
            <Box display="flex" justifyContent="end" mt="20px">
              <div className="button-container">
                <div className="submit-container">
                  <Button className="submit-button" type="submit" color="secondary" variant="contained" onClick={handleFormSubmit}>
                    Xác nhận
                  </Button>
                </div>
                <div className="cancel-container">
                  <Button className="cancel-button" type="reset" color="error" variant="contained" onClick={onClear}>
                    Hủy
                  </Button>
                </div>

              </div>
            </Box>
          </form>
        </div>

        : ""}




      <div className="success" id="success"> Tạo nhiệm vụ thành công</div>
      <div className="fail" id="fail"> Tạo nhiệm vụ thất bại</div>


    </Box>
  );

};






export default SelectWorker;