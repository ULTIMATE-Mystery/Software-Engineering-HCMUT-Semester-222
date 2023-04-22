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

  }





  const handleChange = (e) => {

    console.log(e.target.value);

    setSelected(e.target.value);
  };

  function handleChangeMCP(data) {
    console.log(data);
    setSelectedMCP(data);
    setField("mcp", selectedMCP.value)
  }

  function handleChangeRoute(data) {
    console.log(data);
    setSelectedRoute(data);
  }

  function handleChangeVehicle(data) {
    console.log(data);
    setSelectedVehicle(data);
  }

  function handleChangeCollector(data) {
    console.log(data);
    setSelectedCollector(data);
  }

  function handleChangeJanitor(data) {
    console.log(data);
    setSelectedJanitor(data);
  }

  const handleChangeDate = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  }

  const handleChangeTime = (e) => {
    console.log(e.target.value);
    setTime(e.target.value);
  }

  const handleChangeNote = (e) => {
    console.log(e.target.value);
    setNote(e.target.value);
  }


  const [form, setForm] = useState({
    mcp: '',
    Date: '',
    startTime: '',
    endTime: '',
    locate: '',
    vehicle: '',
    userId: '',
    note: '',
    status: ''
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
      mcp, Date, locate, startTime, vehicle, userId, note, endTime, status
    } = form

    const newErrors = {}

    if (!mcp || mcp === '') newErrors.mcp = "Bạn chưa chọn MCP"

    if (!Date || Date === '') newErrors.Date = "Bạn chưa chọn ngày"

    if (!locate || locate === '') newErrors.locate = "Bạn chưa chọn tuyến đường"

    if (!startTime || startTime === '') newErrors.startTime = "Bạn chưa chọn thời gian"

    if (!vehicle || vehicle === '') newErrors.vehicle = "Bạn chưa chọn phương tiện"

    if (!userId || userId === '') newErrors.userId = "Bạn chưa chọn nhân viên"

    // if (!note || note === '') newErrors.collector = "Bạn chưa chọn nhân viên"

    return newErrors
  }

  const success = document.getElementById('success');
  const fail = document.getElementById('fail');

  const handleFormSubmit = (e) => {

    form.mcp = selectedMCP.value;
    form.Date = Date;
    form.locate = selectedRoute.value;
    form.startTime = Time;
    form.vehicle = selectedVehicle.value;
    form.userId = selectedCollector.value;
    if (!selectedMCP) {
      form.mcp = "";
    }
    if (!Date) {
      form.Date = '';
      setDate(null);
    }


    if (!selectedRoute) {
      form.locate = "";
    }
    if (!Time) {
      form.startTime = '';
      setTime(null);
    }
    if (!selectedVehicle) {
      form.vehicle = "";
    }
    if (!selectedCollector) {
      form.userId = "";
    }



    if (!note) {
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
    // console.log(values);


    e.preventDefault()
    // setMessage('')

    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      fail.style.display = 'block';
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
          endTime: ''
        })
        setSelectedMCP("");
        setSelectedRoute("");
        setSelectedVehicle("");
        setSelectedCollector("");
        setDate("");
        setTime("");
        setNote("");

      }, 2000);

      success.style.display = 'block';
    }

    setTimeout(() => {
      success.style.display = 'none';
      fail.style.display = 'none';

    }, 3000);
  };




  const options = [
    { value: 'Initial', text: 'Chọn loại' },
    { value: 'collector', text: 'Collector' },
    { value: 'janitor', text: 'Janitor' },
  ];


  const options2 = [
    { value: 'MCP 1', label: 'Nguyễn Thái Sơn' },
    { value: 'MCP 2', label: 'Võ Văn Ngân' },
    { value: 'MCP 3', label: 'Lê Văn Sỹ' },
    { value: 'MCP 4', label: 'Lý Thường Kiệt' },
    { value: 'MCP 5', label: 'Điện Biên Phủ' },
    { value: 'MCP 6', label: 'Mai Chí Thọ' },
    { value: 'MCP 7', label: 'Hoàng Văn Thụ' },
    { value: 'MCP 8', label: 'Phan Xích Long' },
    { value: 'MCP 9', label: 'Phan Đình Phùng' },
    { value: 'MCP 10', label: 'Phan Đăng Lưu' },
    { value: 'MCP 11', label: 'Hồ Văn Huê' },
    { value: 'MCP 12', label: 'Trường Sa' },
    { value: 'MCP 13', label: 'Lê Quang Định' },
    { value: 'MCP 14', label: 'Nguyễn Thiện Thuật' },
    { value: 'MCP 15', label: 'Nguyễn Thị Tú' },
    { value: 'MCP 16', label: 'Trần Văn Kỷ' },
    { value: 'MCP 17', label: 'Ung Văn Khiêm' },
    { value: 'MCP 18', label: 'Xô Viết Nghệ Tĩnh' },
  ]

  const options3 = [
    { value: 'Route 1', label: 'R11-A' },
    { value: 'Route 2', label: 'R11-B' },
    { value: 'Route 3 ', label: 'R12-A' },
    { value: 'Route 4 ', label: 'R12-B' },
    { value: 'Route 5 ', label: 'R14-A' },
    { value: 'Route 6 ', label: 'R15-B' },
    { value: 'Route 7 ', label: 'R18-A' }
  ]

  const options4 = [
    { value: 'Vehicle 1', label: 'THACO TOWNER800-CA' },
    { value: 'Vehicle 2', label: 'THACO TOWNER800-CD' },
    { value: 'Vehicle 3 ', label: 'THACO TOWNER800-CE' },
    { value: 'Vehicle 4 ', label: 'THACO TOWNER800-CS' },
    { value: 'Vehicle 5 ', label: 'THACO TOWNER800-CM' },
    { value: 'Vehicle 6 ', label: 'THACO TOWNER800-CN' },
    { value: 'Vehicle 7 ', label: 'THACO TOWNER800-CX' }
  ]

  const options5 = [
    { value: 'Collector 1', label: 'Doãn Chí Bình' },
    { value: 'Collector 2', label: 'Âu Dương Phong' },
    { value: 'Collector 3 ', label: 'Quách Tĩnh' },
    { value: 'Collector 4 ', label: 'Châu Bá Thông' },
    { value: 'Collector 5 ', label: 'Châu Tình Trì' },
    { value: 'Collector 6 ', label: 'Kim Dung' },
    { value: 'Collector 7 ', label: 'Đoàn Dự' }
  ]

  const options6 = [

    { value: 'Janitor 1', label: 'Dương Quá' },
    { value: 'Janitor 2', label: 'Cô Cô' },
    { value: 'Janitor 3 ', label: 'Đông Phương Bất Bại' },
    { value: 'Janitor 4 ', label: 'Trương Vô Kỵ' },
    { value: 'Janitor 5 ', label: 'Hồng Thất Công' },
    { value: 'Janitor 6 ', label: 'Kiều Phong' },
    { value: 'Janitor 7 ', label: 'Mộ Dung Phục' },
    { value: 'Janitor 8 ', label: 'Nhậm Doanh Doanh' },
    { value: 'Janitor 9 ', label: 'Chu Chỉ Nhược' },
    { value: 'Janitor 10 ', label: 'Lý Mạc Sầu' },
    { value: 'Janitor 11 ', label: 'Diệt Tuyệt Sư Thái' },
    { value: 'Janitor 12 ', label: 'Tạ Tốn' },
    { value: 'Janitor 13 ', label: 'Kỳ Hiểu Phù' }

  ]






  return (

    <div>

      <div className="header-custom">
        <Header title="TẠO - GÁN CÔNG VIỆC" />
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

        
        {selected === "collector" ?

          <div>  
          <form onSubmit={handleFormSubmit}>
             <div className="box-assign">
            <Box
              color="white"
              className="grid-layout"
              display="grid"
              gap="10px"
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
                    options={options2}
                    placeholder="Chọn bãi"
                    value={selectedMCP}

                    onChange={(handleChangeMCP)}

                    // isMulti
                    // isClearable={true}
                    isSearchable={true}

                    // isOptionDisabled={() => selectedMCP.length >= 3}
                    isInvalid={!!errors.mcp}

                  />

                  <div className="mcp-error">
                    <span type='invalid' aria-disabled> {errors.mcp}
                    </span>
                  </div>

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
                      isInvalid={!!errors.Date}
                    />


                  </div>

                  <div className="date-error">
                    <span type='invalid' aria-disabled> {errors.Date}
                    </span>
                  </div>

                </div>
              </div>

              <div className="locate-and-time-container">
                <div className="locate-container">
                  <label className="text-locate">Tuyến đường</label>
                  <Select
                    className="select-locate"
                    options={options3}
                    placeholder="Chọn tuyến đường"
                    value={selectedRoute}
                    onChange={handleChangeRoute}


                    isSearchable={true}
                    isInvalid={!!errors.locate}
                  />

                  <div className="locate-error">
                    <span type='invalid' aria-disabled> {errors.locate}
                    </span>
                  </div>

                </div>

                <div className="time-container">
                  <div> <label className="text-hour">Giờ làm việc</label> </div>
                  <div>
                    <input

                      className="select-hour"
                      type="time"
                      value={Time}
                      onChange={handleChangeTime}
                      isInvalid={!!errors.startTime}

                    />
                    <div className="time-error">
                      <span type='invalid' aria-disabled> {errors.startTime}
                      </span>
                    </div>

                  </div>


                </div>
              </div>

              <div className="vehicle-container">
                <label className="text-vehicle">Phương tiện</label>
                <Select
                  className="select-vehicle"
                  options={options4}
                  placeholder="Chọn phương tiện"
                  value={selectedVehicle}
                  onChange={handleChangeVehicle}

                  isSearchable={true}
                  isInvalid={!!errors.vehicle}
                />
                <div className="vehicle-error">
                  <span type='invalid' aria-disabled> {errors.vehicle}
                  </span>
                </div>

              </div>

              <div className="collector-container">
                <label className="text-collector">Nhân viên</label>
                <Select
                  className="select-collector"
                  options={options5}
                  placeholder="Chọn nhân viên"
                  value={selectedCollector}
                  onChange={handleChangeCollector}

                  // isMulti
                  // isClearable={true}
                  isSearchable={true}
                  // isOptionDisabled={() => selectedCollector.length >= 2}
                  isInvalid={!!errors.userId}

                />
                <div className="collector-error">
                  <span type='invalid' aria-disabled> {errors.userId}
                  </span>
                </div>


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
              <Button className="submit-button" type="submit" color="secondary"  variant="contained" onClick={onClear}>
                Xác nhận
              </Button>
              </div>
              <div className="cancel-container">
              <Button className="cancel-button" type="reset"  color="error" variant="contained" onClick={handleFormSubmit}>
                Hủy
              </Button>
              </div>

            </div>
            </Box>
          </form>
          </div>   


          : ""}


        {selected === "janitor" ?
          <label> Chon thanh cong Janitor </label>

          : ""}




      <div className="success" id="success"> Tạo nhiệm vụ thành công</div>
      <div className="fail" id="fail"> Tạo nhiệm vụ thất bại</div>


    </div>
  );

};



// const checkoutSchema = yup.object().shape({
//   mcp: yup.string().required("required"),
//   datework: yup.string().required("required"),
//   locate: yup.string().required("required"),
//   hourwork: yup
//     .string()
//     .required("required"),
//   worker: yup.string().required("required"),
//   vehicle: yup.string().required("required"),
//   note: yup.string().required("required"),
// });
// const initialValues = {
//   mcp: "",
//   locate: "",
//   worker: "",
//   vehicle: "",
//   note: "",
//   datework: "",
//   hourwork: "",
// };


export default SelectWorker;