import { Box, FormGroup } from "@mui/material";
import Header from "../../components/Header";
import "./index.css"
import React, { useState, useEffect} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup";
import Select from 'react-select';
import { Typeahead } from 'react-bootstrap-typeahead';
import {Form, Button} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import FormContainer from "../../components/FormContainer";


const SelectWorker = () => {


  const isNonMobile = useMediaQuery("(min-width:600px)");


  const [selected, setSelected] = useState("Chọn loại");
  // const [selectedMCP, setSelectedMCP] = useState([]);
  // const [selectedRoute, setSelectedRoute] = useState([]);
  // const [selectedVehicle, setSelectedVehicle] = useState([]);
  // const [selectedCollector, setSelectedCollector] = useState([]);
  // const [selectedJanitor, setSelectedJanitor] = useState([]);
  // const [Date, setDate] = useState([]);
  // const [Time, setTime] = useState([]);
  // const [note, setNote] = useState([]);
  // const [worklist,setWorklist] = useState([
  //   {
  //     mcp: '',
  //     route: '',
  //     worker: '',
  //     vehicle: '',
  //     note: '',
  //   }
  // ]);
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]:value
    })

    if (!!errors[field])
    setErrors({
      ...errors,
      [field]:null
    })
  }

  // const onClear = () => {
  //   setSelectedMCP("");
  //   setSelectedRoute("");
  //   setSelectedVehicle("");
  //   setSelectedCollector("");
  //   setDate(null);
  //   setTime(null);

  // }

  const validateForm = () =>{
    const {
      mcp,date,route,time,vehicle,collector,note
    } = form
    const newErrors = {}

    if(!mcp || mcp === '') newErrors.mcp = "Bạn chưa chọn MCP"

    if(!date || date === '') newErrors.date = "Bạn chưa chọn ngày"

    if(!route || route === '') newErrors.route = "Bạn chưa chọn tuyến đường"
    
    if(!time || time === '') newErrors.time = "Bạn chưa chọn thời gian"

    if(!vehicle || vehicle === '') newErrors.vehicle = "Bạn chưa chọn phương tiện"

    if(!collector || collector === '') newErrors.collector = "Bạn chưa chọn nhân viên"
    
    // if(!note || note === '') newErrors.collector = "Bạn chưa chọn nhân viên"
    return newErrors
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    // setMessage('')

    const formErrors = validateForm()

    if(Object.keys(formErrors).length>0){
      setErrors(formErrors)
      // setMessage('Whoops, please check for errors below highlighted in red')
    }
    else {
      console.log("form submitted")
      console.log(form)
      // registerUser(form)
    }
  }


  // const handleFormSubmit = (values) => {

  //   console.log(values);
  // };


  const handleChange = (e) => {

    console.log(e.target.value);

    setSelected(e.target.value);
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
      <div>
        <div className="custom-select">
          <label className="text-select"> Loại hình nhân viên </label>

          <select value={selected} onChange={(e) => handleChange(e)} className="select-worker"
          >

            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}

          </select>
        </div>
        {selected === "collector" ?

            <Form>
              <FormGroup controlId='mcp'>
                <Form.Label>Điểm tập kết rác</Form.Label>
                <Form.Select placeholder="Chọn điểm"
                // options={options2}
                value={form.mcp}
                onChange={(e) => setField('mcp', e.target.value)}
                isInvalid={!!errors.mcp}
                
                >
                  <option>Chọn bãi</option>
                  <option value='MCP1'> Lý Thường Kiệt </option>
                  <option value='MCP2'> Hồ Văn Huê </option>
                  <option value='MCP3'> Tô Vĩnh Diện </option>
                  <option value='MCP4'> Võ Văn Ngân </option>
                </Form.Select>
                <Form.Control.Feedback type='invalid'> {errors.mcp}
                </Form.Control.Feedback>
              </FormGroup>

              <FormGroup controlId='date'>
                <Form.Label>Ngày làm việc</Form.Label>
                <Form.Control 
                placeholder="Chọn ngày"
                type="date"
                value={form.date}
                onChange={(e) => setField('mcp', e.target.value)}
                isInvalid={!!errors.date}
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'> {errors.date}
                </Form.Control.Feedback>
              </FormGroup>

              <FormGroup controlId='route'>
                <Form.Label>Tuyến đường</Form.Label>
                <Form.Select placeholder="Chọn tuyến"

                options={options3}
                value={form.route}
                onChange={(e) => setField('route', e.target.value)}
                isInvalid={!!errors.route}
                >
                </Form.Select>
                <Form.Control.Feedback type='invalid'> {errors.route}
                </Form.Control.Feedback>
              </FormGroup>

              <FormGroup controlId='time'>
                <Form.Label>Giờ làm việc</Form.Label>
                <Form.Control 
                placeholder="Chọn ngày"
                type="time"
                value={form.time}
                onChange={(e) => setField('time', e.target.value)}
                isInvalid={!!errors.time}
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'> {errors.time}
                </Form.Control.Feedback>
              </FormGroup>

              <FormGroup controlId='vehicle'>
                <Form.Label>Phương tiện di chuyển</Form.Label>
                <Form.Select placeholder="Chọn phương tiện"

                options={options4}
                value={form.vehicle}
                onChange={(e) => setField('vehicle', e.target.value)}
                isInvalid={!!errors.vehicle}
                >
                </Form.Select>
                <Form.Control.Feedback type='invalid'> {errors.vehicle}
                </Form.Control.Feedback>
              </FormGroup>

              <FormGroup controlId='collector'>
                <Form.Label>Phương tiện di chuyển</Form.Label>
                <Form.Select placeholder="Chọn nhân viên"

                options={options5}
                value={form.collector}
                onChange={(e) => setField('collector', e.target.value)}
                isInvalid={!!errors.collector}
                >
                </Form.Select>
                <Form.Control.Feedback type='invalid'> {errors.collector}
                </Form.Control.Feedback>
              </FormGroup>
              
              
              <FormGroup controlId='note'>
                <Form.Label>Ghi chú</Form.Label>
                <Form.Control 
                placeholder="Thêm"

                type="text"

                value={form.note}
                onChange={(e) => setField('note', e.target.value)}
                isInvalid={!!errors.note}
                >
                </Form.Control>
                <Form.Control.Feedback type='invalid'> {errors.note}
                </Form.Control.Feedback>
              </FormGroup>

              <FormGroup controlId='submit'>
                <Button type='submit' onClick={handleSubmit} className='my-2' variant="primary" >
                Xác nhận
                </Button>

              </FormGroup>
            </Form>



          : ""}


        {selected === "janitor" ?
          <label> Chon thanh cong Janitor </label>

          : ""}



      </div>


    </div>
  );

};






export default SelectWorker;