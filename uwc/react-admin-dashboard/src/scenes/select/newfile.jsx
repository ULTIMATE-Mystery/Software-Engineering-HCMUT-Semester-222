import {
  Box, FormGroup
  // , colors 
} from "@mui/material";
import Header from "../../components/Header";
import "./index.css"
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { Formik } from "formik";
// import * as yup from "yup";
// import Select from 'react-select';
// import { Typeahead } from 'react-bootstrap-typeahead';

// import { useDispatch } from "react-redux";
// import FormContainer from "../../components/FormContainer";

import { Form, Button } from 'react-bootstrap'
import { type } from "@testing-library/user-event/dist/type";
// import { date } from "yup";
// import { red } from "@mui/material/colors";
// import { MultiSelect } from "react-multi-select-component";


const SelectWorker = () => {


  const isNonMobile = useMediaQuery("(min-width:600px)");


  const [selected, setSelected] = useState("Chọn loại");

  const [form, setForm] = useState({})

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



  const onClear = () => {
    setForm({
      mcp: '',
      locate: '',
      Date: '',
      startTime: '',
      vehicle: '',
      userId: '',
      note: '',
      endTime: '',
      status: '',


    })

    // setForm=null

  }
  const {
    mcp, Date, locate, startTime, vehicle, userId, note, endTime, status
  } = form
  const validateForm = () => {

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

  const handleSubmit = (e) => {
    e.preventDefault()
    // setMessage('')

    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      fail.style.display = 'block';
      // setMessage('Whoops, please check for errors below highlighted in red')
    }
    else {
      console.log("form submitted")
      console.log(form)


      setTimeout(() => {
        setForm({
          mcp: '',
          locate: '',
          Date: '',
          startTime: '',
          vehicle: '',
          userId: '',
          note: '',
          status: 'Đang thực hiện',
          endTime: ''
        })
      }, 2000);

      success.style.display = 'block';
    }
    
    setTimeout(() => {
      success.style.display = 'none';
      fail.style.display = 'none';
  
    }, 3000);
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
    { value: 'Initial', label: 'Chọn bãi' },
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
    { value: 'Initial', label: 'Chọn tuyến đường' },
    { value: 'Route 1', label: 'R11-A' },
    { value: 'Route 2', label: 'R11-B' },
    { value: 'Route 3', label: 'R12-A' },
    { value: 'Route 4', label: 'R12-B' },
    { value: 'Route 5', label: 'R14-A' },
    { value: 'Route 6', label: 'R15-B' },
    { value: 'Route 7', label: 'R18-A' }
  ]

  const options4 = [
    { value: 'Initial', label: 'Chọn phương tiện' },
    { value: 'Vehicle 1', label: 'THACO TOWNER800-CA' },
    { value: 'Vehicle 2', label: 'THACO TOWNER800-CD' },
    { value: 'Vehicle 3', label: 'THACO TOWNER800-CE' },
    { value: 'Vehicle 4', label: 'THACO TOWNER800-CS' },
    { value: 'Vehicle 5', label: 'THACO TOWNER800-CM' },
    { value: 'Vehicle 6', label: 'THACO TOWNER800-CN' },
    { value: 'Vehicle 7', label: 'THACO TOWNER800-CX' }
  ]

  const options5 = [
    { value: 'Initial', label: 'Chọn nhân viên' },
    { value: 'Collector 1', label: 'Doãn Chí Bình' },
    { value: 'Collector 2', label: 'Âu Dương Phong' },
    { value: 'Collector 3', label: 'Quách Tĩnh' },
    { value: 'Collector 4', label: 'Châu Bá Thông' },
    { value: 'Collector 5', label: 'Châu Tình Trì' },
    { value: 'Collector 6', label: 'Kim Dung' },
    { value: 'Collector 7', label: 'Đoàn Dự' }
  ]

  const options6 = [
    { value: 'Initial', label: 'Chọn khu vực' },
    { value: 'Area 1', label: 'Khu vực 1' },
    { value: 'Area 2', label: 'Khu vực 2' },
    { value: 'Area 3', label: 'Khu vực 3' },
    { value: 'Area 4', label: 'Khu vực 4' },
    { value: 'Area 5', label: 'Khu vực 5' },
    { value: 'Area 6', label: 'Khu vực 6' },
    { value: 'Area 7', label: 'Khu vực 7' }
  ]

  const options7 = [
    { value: 'Initial', label: 'Chọn phương tiện' },
    { value: 'Troller 1', label: 'Xe gom 1' },
    { value: 'Troller 2', label: 'Xe gom 2' },
    { value: 'Troller 3', label: 'Xe gom 3' },
    { value: 'Troller 4', label: 'Xe gom 4' },
    { value: 'Troller 5', label: 'Xe gom 5' },
    { value: 'Troller 6', label: 'Xe gom 6' },
    { value: 'Troller 7', label: 'Xe gom 7' },
    { value: 'Troller 8', label: 'Xe gom 8' },
    { value: 'Troller 9', label: 'Xe gom 9' },
    { value: 'Troller 10', label: 'Xe gom 10' }
  ]
  const options8 = [
    { value: 'Initial', label: 'Chọn nhân viên' },
    { value: 'Janitor 1', label: 'Dương Quá' },
    { value: 'Janitor 2', label: 'Cô Cô' },
    { value: 'Janitor 3', label: 'Đông Phương Bất Bại' },
    { value: 'Janitor 4', label: 'Trương Vô Kỵ' },
    { value: 'Janitor 5', label: 'Hồng Thất Công' },
    { value: 'Janitor 6', label: 'Kiều Phong' },
    { value: 'Janitor 7', label: 'Mộ Dung Phục' },
    { value: 'Janitor 8', label: 'Nhậm Doanh Doanh' },
    { value: 'Janitor 9', label: 'Chu Chỉ Nhược' },
    { value: 'Janitor 10', label: 'Lý Mạc Sầu' },
    { value: 'Janitor 11', label: 'Diệt Tuyệt Sư Thái' },
    { value: 'Janitor 12', label: 'Tạ Tốn' },
    { value: 'Janitor 13', label: 'Kỳ Hiểu Phù' }

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

            <Box
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
                  <FormGroup >
                    <Form.Label className="text-mcp">Điểm tập kết rác</Form.Label>
                    <Form.Select placeholder="Chọn điểm"
                      // options={options2}s
                      className="select-mcp"
                      value={form.mcp}
                      onChange={(e) => setField('mcp', e.target.value)}
                      isInvalid={!!errors.mcp}



                    >
                      {options2.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Form.Select>
                    {/* <Select
                        className="select-mcp"
                        options={options2}
                        placeholder="Chọn bãi"
                        value={form.mcp}

                        onChange={(e) => setField('mcp', e.target.value)}

                        isMulti
                        isClearable={true}
                        isSearchable={true}

                        isOptionDisabled={() => form.mcp.length >= 3}


                      /> */}
                    <div className="mcp-error">
                      <Form.Control.Feedback type='invalid'> {errors.mcp}
                      </Form.Control.Feedback>
                    </div>
                  </FormGroup>
                </div>

                <div className="date-container">
                  <FormGroup >
                    <Form.Label className="text-date">Ngày làm việc</Form.Label>
                    <Form.Control
                      className="select-date"
                      placeholder="Chọn ngày"
                      type="date"
                      value={form.Date}
                      onChange={(e) => setField('Date', e.target.value)}
                      isInvalid={!!errors.Date}
                    >
                    </Form.Control>
                    <div className="date-error">
                      <Form.Control.Feedback type='invalid'> {errors.Date}
                      </Form.Control.Feedback>
                    </div>
                  </FormGroup>

                </div>
              </div>


              <div className="locate-and-time-container">

                <div className="locate-container">


                  <FormGroup >
                    <Form.Label className="text-locate">Tuyến đường</Form.Label>
                    <Form.Select placeholder="Chọn tuyến"

                      className="select-locate"
                      value={form.locate}
                      onChange={(e) => setField('locate', e.target.value)}
                      isInvalid={!!errors.locate}
                    >
                      {options3.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Form.Select>
                    <div className="locate-error">
                      <Form.Control.Feedback type='invalid'> {errors.locate}
                      </Form.Control.Feedback>
                    </div>
                  </FormGroup>
                </div>

                <div className="time-container">


                  <FormGroup >
                    <Form.Label className="text-hour">Giờ làm việc</Form.Label>
                    <Form.Control
                      className="select-hour"
                      placeholder="Chọn giờ"
                      type="time"
                      value={form.startTime}
                      onChange={(e) => setField('startTime', e.target.value)}
                      isInvalid={!!errors.startTime}
                    >
                    </Form.Control>
                    <div className="time-error">
                      <Form.Control.Feedback type='invalid'> {errors.startTime}
                      </Form.Control.Feedback>
                    </div>
                  </FormGroup>
                </div>
              </div>

              <div className="vehicle-container">
                <FormGroup>
                  <Form.Label className="text-vehicle">Phương tiện di chuyển</Form.Label>
                  <Form.Select placeholder="Chọn phương tiện"
                    className="select-vehicle"

                    value={form.vehicle}
                    onChange={(e) => setField('vehicle', e.target.value)}
                    isInvalid={!!errors.vehicle}
                  >
                    {options4.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Select>
                  <div className="vehicle-error">
                    <Form.Control.Feedback type='invalid'> {errors.vehicle}
                    </Form.Control.Feedback>
                  </div>
                </FormGroup>
              </div>

              <div className="collector-container">
                <FormGroup>
                  <Form.Label className="text-collector">Nhân viên</Form.Label>
                  <Form.Select
                    placeholder="Chọn nhân viên"
                    className="select-collector"

                    value={form.userId}
                    onChange={(e) => { setField('userId', e.target.value); console.log(e.target.value) }}
                    isInvalid={!!errors.userId}

                  >
                    {options5.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Select>
                  <div className="collector-error">
                    <Form.Control.Feedback type='invalid'> {errors.userId}
                    </Form.Control.Feedback>
                  </div>
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <Form.Label className="text-note">Ghi chú</Form.Label>
                  <Form.Control
                    placeholder="Thêm thông tin cần lưu ý cho nhân viên"

                    type="text"
                    className="select-note"
                    value={form.note}
                    onChange={(e) => setField('note', e.target.value)}
                  // isInvalid={!!errors.note}
                  >
                  </Form.Control>
                  <Form.Control.Feedback type='invalid'> {errors.note}
                  </Form.Control.Feedback>
                </FormGroup>

              </div>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">

              <div className="button-container">
                <div className="submit-container">
                  <FormGroup>
                    <Button type='submit' onClick={handleSubmit} className="submit-button" variant="contained" >
                      Xác nhận
                    </Button>

                  </FormGroup>
                </div>

                <div className="cancel-container">
                  <FormGroup>

                    <Button className="cancel-button" type="reset" color="secondary" variant="contained" onClick={onClear}>
                      Hủy
                    </Button>

                  </FormGroup>
                </div>
              </div>
            </Box>
          </Form>



          :
          ""

        }


        {selected === "janitor" ?
          // <label> Chon thanh cong Janitor </label>
          <Form>

            <Box
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
                  <FormGroup >
                    <Form.Label className="text-mcp">Điểm tập kết rác</Form.Label>
                    <Form.Select placeholder="Chọn điểm"
                      // options={options2}s
                      className="select-mcp"
                      value={form.mcp}
                      onChange={(e) => setField('mcp', e.target.value)}
                      isInvalid={!!errors.mcp}



                    >
                      {options2.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Form.Select>
                    {/* <Select
                      className="select-mcp"
                      options={options2}
                      placeholder="Chọn bãi"
                      value={form.mcp}

                      onChange={(e) => setField('mcp', e.target.value)}

                      isMulti
                      isClearable={true}
                      isSearchable={true}

                      isOptionDisabled={() => form.mcp.length >= 3}


                    /> */}
                    <div className="mcp-error">
                      <Form.Control.Feedback type='invalid'> {errors.mcp}
                      </Form.Control.Feedback>
                    </div>
                  </FormGroup>
                </div>

                <div className="date-container">
                  <FormGroup >
                    <Form.Label className="text-date">Ngày làm việc</Form.Label>
                    <Form.Control
                      className="select-date"
                      placeholder="Chọn ngày"
                      type="date"
                      value={form.Date}
                      onChange={(e) => setField('Date', e.target.value)}
                      isInvalid={!!errors.Date}
                    >
                    </Form.Control>
                    <div className="date-error">
                      <Form.Control.Feedback type='invalid'> {errors.Date}
                      </Form.Control.Feedback>
                    </div>
                  </FormGroup>

                </div>
              </div>


              <div className="locate-and-time-container">

                <div className="locate-container">


                  <FormGroup >
                    <Form.Label className="text-locate">Khu vực gom rác</Form.Label>
                    <Form.Select placeholder="Chọn khu vực"

                      className="select-locate"
                      value={form.locate}
                      onChange={(e) => setField('locate', e.target.value)}
                      isInvalid={!!errors.locate}
                    >
                      {options6.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Form.Select>
                    <div className="locate-error">
                      <Form.Control.Feedback type='invalid'> {errors.locate}
                      </Form.Control.Feedback>
                    </div>
                  </FormGroup>
                </div>

                <div className="time-container">


                  <FormGroup >
                    <Form.Label className="text-hour">Giờ làm việc</Form.Label>
                    <Form.Control
                      className="select-hour"
                      placeholder="Chọn giờ"
                      type="time"
                      value={form.startTime}
                      onChange={(e) => setField('startTime', e.target.value)}
                      isInvalid={!!errors.startTime}
                    >
                    </Form.Control>
                    <div className="time-error">
                      <Form.Control.Feedback type='invalid'> {errors.startTime}
                      </Form.Control.Feedback>
                    </div>
                  </FormGroup>
                </div>
              </div>

              <div className="vehicle-container">
                <FormGroup>
                  <Form.Label className="text-vehicle">Phương tiện thu gom rác</Form.Label>
                  <Form.Select placeholder="Chọn phương tiện"
                    className="select-vehicle"

                    value={form.vehicle}
                    onChange={(e) => setField('vehicle', e.target.value)}
                    isInvalid={!!errors.vehicle}
                  >
                    {options7.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Select>
                  <div className="vehicle-error">
                    <Form.Control.Feedback type='invalid'> {errors.vehicle}
                    </Form.Control.Feedback>
                  </div>
                </FormGroup>
              </div>

              <div className="collector-container">
                <FormGroup>
                  <Form.Label className="text-collector">Nhân viên</Form.Label>
                  <Form.Select
                    placeholder="Chọn nhân viên"
                    className="select-collector"

                    value={form.userId}
                    onChange={(e) => { setField('userId', e.target.value); console.log(e.target.value) }}
                    isInvalid={!!errors.userId}

                  >
                    {options8.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Select>
                  <div className="collector-error">
                    <Form.Control.Feedback type='invalid'> {errors.userId}
                    </Form.Control.Feedback>
                  </div>
                </FormGroup>
              </div>

              <div>
                <FormGroup>
                  <Form.Label className="text-note">Ghi chú</Form.Label>
                  <Form.Control
                    placeholder="Thêm thông tin cần lưu ý cho nhân viên"

                    type="text"
                    className="select-note"
                    value={form.note}
                    onChange={(e) => setField('note', e.target.value)}
                  // isInvalid={!!errors.note}
                  >
                  </Form.Control>
                  <Form.Control.Feedback type='invalid'> {errors.note}
                  </Form.Control.Feedback>
                </FormGroup>

              </div>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">

              <div className="button-container">
                <div className="submit-container">
                  <FormGroup>
                    <Button type='submit' onClick={handleSubmit} className="submit-button" variant="contained" >
                      Xác nhận
                    </Button>

                  </FormGroup>
                </div>

                <div className="cancel-container">
                  <FormGroup>

                    <Button className="cancel-button" type="reset" color="secondary" variant="contained" onClick={onClear}>
                      Hủy
                    </Button>

                  </FormGroup>
                </div>





              </div>
            </Box>

          </Form>
          :
          //            (form.mcp = '' , form.Date ='', form.vehicle='', form.Time = '', form.worker = '', form.locate = '', form.note ='')
          ""
          }

        <div className="success" id="success"> Tạo nhiệm vụ thành công</div>
        <div className="fail" id="fail"> Tạo nhiệm vụ thất bại</div>



      </div>


    </div>
  );

};






export default SelectWorker;