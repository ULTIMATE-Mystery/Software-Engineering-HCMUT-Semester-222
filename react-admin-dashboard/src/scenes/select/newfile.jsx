import {
  Box, FormGroup
} from "@mui/material";
import Header from "../../components/Header";
import "./index.css"
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
// import fs from "graceful-fs"
// import RNFS from "react-native-fs";

// import { Formik } from "formik";
// import * as yup from "yup";
// import Select from 'react-select';
// import { Typeahead } from 'react-bootstrap-typeahead';

// import { useDispatch } from "react-redux";
// import FormContainer from "../../components/FormContainer";

import { Form, Button } from 'react-bootstrap';
// import { type } from "@testing-library/user-event/dist/type";
import { selectMCP, selectRoute, selectVehicle, selectCollector, selectArea, selectTroller, selectJanitor } from "../../data/DataTask";
// import form from "../../data/AssignTask"
// import { date } from "yup";
// import { red } from "@mui/material/colors";
// import { MultiSelect } from "react-multi-select-component";
// import { writeFile } from 'react-native-fs';

// 
import Select from 'react-select';

const SelectWorker = () => {


  const isNonMobile = useMediaQuery("(min-width:600px)");


  const [selected, setSelected] = useState("Chọn loại");

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



  const onClear = (e) => {
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
    // e.target.reset();
    // setForm=null

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

  // let jsonile = require('jsonfile');

  // for (const i = 0; i < 11; i++) {
  //     jsonFile.writeFile('data.json', "id :" + i + " square :" + i * i);
  // }

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

        {/* <div className="select-assign">
          <span aria-invalid> . </span>
        </div> */}


        


        {selected === "collector" ?

          <div > 
          <Form>
            <div className="box-assign">
            <Box
              marginTop="10px"
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
                  <FormGroup >
                    <Form.Label className="text-mcp">Điểm tập kết rác</Form.Label>
                    <Form.Select placeholder="Chọn điểm"
                      // options={options2}s
                      className="select-mcp"
                      value={form.mcp}
                      onChange={
                        (e) => 
                        {
                        setField('mcp', e.target.value);
                        console.log(e.target.value);
                      }
                      }
                      isInvalid={!!errors.mcp}



                    >
                      {selectMCP.map(option => (
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
                      onChange={(e) => 
                        {
                          setField('Date', e.target.value);
                          console.log(e.target.value);
                        }
                      }
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
                      onChange={(e) => 
                        {
                          setField('locate', e.target.value);
                          console.log(e.target.value);
                        }
                      }
                      isInvalid={!!errors.locate}
                    >
                      {selectRoute.map(option => (
                        <option key={option.value} value={option.value}  >
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
                      onChange={(e) => 
                        {
                          setField('startTime', e.target.value);
                          console.log(e.target.value);
                        }
                      }
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
                    onChange={(e) => 
                      {
                        setField('vehicle', e.target.value);
                        console.log(e.target.value);
                      }
                  }
                    isInvalid={!!errors.vehicle}
                  >
                    {selectVehicle.map(option => (
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
                    onChange={(e) => 
                      {
                        setField('userId', e.target.value);
                        console.log(e.target.value);
                      }
                    }
                    isInvalid={!!errors.userId}

                  >
                    {selectCollector.map(option => (
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
                    onChange={(e) => 
                      {
                        setField('note', e.target.value);
                        console.log(e.target.value);
                      }
                  }
                  // isInvalid={!!errors.note}
                  >
                  </Form.Control>
                  <Form.Control.Feedback type='invalid'> {errors.note}
                  </Form.Control.Feedback>
                </FormGroup>

              </div>
            </Box>
            </div>
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

          </div>       

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
              gap="10px"
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
                      onChange={(e) => 
                        {
                          setField('mcp', e.target.value);
                          console.log(e.target.value);
                        }
                    }
                      isInvalid={!!errors.mcp}



                    >
                      {selectMCP.map(option => (
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
                      onChange={(e) => 
                        {
                          setField('Date', e.target.value);
                          console.log(e.target.value);
                        }
                      }
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
                      onChange={(e) => 
                        {
                          setField('locate', e.target.value);
                          console.log(e.target.value);
                        }
                      }
                      isInvalid={!!errors.locate}
                    >
                      {selectArea.map(option => (
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
                      onChange={(e) => 
                        {
                          setField('startTime', e.target.value);
                          console.log(e.target.value);
                        }
                      }
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
                    onChange={(e) => 
                      {
                        setField('vehicle', e.target.value);
                        console.log(e.target.value);
                      }
                    }
                    isInvalid={!!errors.vehicle}
                  >
                    {selectTroller.map(option => (
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
                    onChange={(e) => { 
                      {
                        setField('userId', e.target.value);
                        console.log(e.target.value);
                      }
                    }}
                    isInvalid={!!errors.userId}

                  >
                    {selectJanitor.map(option => (
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
                    onChange={(e) => 
                      {
                        setField('note', e.target.value);
                        console.log(e.target.value);
                      }
                  }
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
  );

};






export default SelectWorker;