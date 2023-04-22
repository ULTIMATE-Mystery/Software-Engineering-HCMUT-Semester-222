import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ProgressBar from 'react-animated-progress-bar';
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
// import { Button } from 'react-bootstrap';
import { Button } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

const CustomColor = styled('div')({
  background: 'linear-gradient(180deg, rgba(66,109,236,1) 0%, rgba(134,201,145,1) 100%)',
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"

});

const VehicleList = [
  {
    key: 1, name: "Xe chở rác THACO TOWNER800-CA", percentage: "30", color_bar: '#97E075',
    ID: 5501463, weight: "2 tấn", status: "Đang thực hiện", power: "1500 HP",capacity: "2000L", inUse: "300L", address: "Bãi đỗ tập trung 1 - Nguyễn Thái Sơn, Phường 3, Quận Gò Vấp, TP.HCM",
    columns: [{ headerName: "ID Task", field: 'id', width: "100", headerClassName: 'super-app-theme--header' },
    { headerName: 'Nhân viên', field: 'worker', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Thời gian kết thúc', field: 'endtime', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header' },
    { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header' }],
    data: [{
      "id": 55234,
      "worker": "Lý Mạc Sầu",
      "starttime": "12/10/2022 16:00",
      "endtime": "12/10/2022 17:00",
      "status": "Đang thực hiện",
      "note": ""
    },
    {
      "id": 55235,
      "worker": "Đông Phương Bất Bại",
      "starttime": "11/10/2022 16:00",
      "endtime": "11/10/2022 17:00",
      "status": "Hoãn",
      "note": "Xe bảo trì"
    },
    {
      "id": 55236,
      "worker": "Dương Quá",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },
    {
      "id": 55237,
      "worker": "ABC",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },
    {
      "id": 55238,
      "worker": "DEF",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },
    {
      "id": 55239,
      "worker": "GHJ",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },
    {
      "id": 55240,
      "worker": "EKL",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },
    {
      "id": 55241,
      "worker": "E0",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },
    {
      "id": 55242,
      "worker": "E1",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },
    {
      "id": 55243,
      "worker": "E2",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },
    {
      "id": 552434,
      "worker": "E3",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },
    {
      "id": 552435,
      "worker": "E4",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },
    {
      "id": 552436,
      "worker": "E5",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },
    {
      "id": 552437,
      "worker": "E6",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },
    {
      "id": 552438,
      "worker": "E7",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    },

  ]
  },
  {
    key: 2, name: "Xe chở rác THACO TOWNER800-CB", percentage: "50", color_bar: '#97E075',
    ID: 5601463, weight: "1 tấn", status: "Đang thực hiện", power: "1000 HP",capacity: "1200L", inUse: "100L", address: "Bãi đỗ tập trung 2 - Nguyễn Thái Sơn, Phường 3, Quận Gò Vấp, TP.HCM",
    columns: [{ headerName: "ID Task", field: 'id', width: "100", headerClassName: 'super-app-theme--header' },
    { headerName: 'Nhân viên', field: 'worker', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Thời gian kết thúc', field: 'endtime', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header' },
    { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header' }],
    data: [{
      "id": 56234,
      "worker": "Kim Dung",
      "starttime": "12/10/2022 16:00",
      "endtime": "12/10/2022 17:00",
      "status": "Đang thực hiện",
      "note": ""
    },
    {
      "id": 56235,
      "worker": "Kiều Phong",
      "starttime": "11/10/2022 16:00",
      "endtime": "11/10/2022 17:00",
      "status": "Hoãn",
      "note": "Xe bảo trì"
    },
    {
      "id": 56236,
      "worker": "Chu Chỉ Nhược",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    }

  ]
  },
  {
    key: 3, name: "Xe chở rác THACO TOWNER800-CD", percentage: "50", color_bar: '#97E075',
    ID: 5701463, weight: "1.2 tấn", status: "Đang thực hiện", power: "1200 HP",capacity: "1400L", inUse: "200L", address: "Bãi đỗ tập trung 1 - Nguyễn Thái Sơn, Phường 3, Quận Gò Vấp, TP.HCM",
    columns: [{ headerName: "ID Task", field: 'id', width: "100", headerClassName: 'super-app-theme--header' },
    { headerName: 'Nhân viên', field: 'worker', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Thời gian kết thúc', field: 'endtime', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header' },
    { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header' }],
    data: [{
      "id": 57234,
      "worker": "Diệt Tuyệt Sư Thái",
      "starttime": "12/10/2022 16:00",
      "endtime": "12/10/2022 17:00",
      "status": "Đang thực hiện",
      "note": ""
    },
    {
      "id": 57235,
      "worker": "Châu Tinh Trì",
      "starttime": "11/10/2022 16:00",
      "endtime": "11/10/2022 17:00",
      "status": "Hoãn",
      "note": "Xe bảo trì"
    },
    {
      "id": 57236,
      "worker": "Hồng Thất Công",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    }

  ]
  },
  {
    key: 4, name: "Xe chở rác THACO TOWNER800-CE", percentage: "60", color_bar: '#97E075',
    ID: 5801463, weight: "1.4 tấn", status: "Đang thực hiện", power: "1800 HP",capacity: "1600L", inUse: "250L", address: "Bãi đỗ tập trung 1 - Nguyễn Thái Sơn, Phường 3, Quận Gò Vấp, TP.HCM",
    columns: [{ headerName: "ID Task", field: 'id', width: "100", headerClassName: 'super-app-theme--header' },
    { headerName: 'Nhân viên', field: 'worker', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Thời gian kết thúc', field: 'endtime', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header' },
    { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header' }],
    data: [{
      "id": 58234,
      "worker": "Cô Cô",
      "starttime": "12/10/2022 16:00",
      "endtime": "12/10/2022 17:00",
      "status": "Đang thực hiện",
      "note": ""
    },
    {
      "id": 58235,
      "worker": "Doãn Chí Bình",
      "starttime": "11/10/2022 16:00",
      "endtime": "11/10/2022 17:00",
      "status": "Hoãn",
      "note": "Xe bảo trì"
    },
    {
      "id": 58236,
      "worker": "Châu Bá Thông",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    }

    
  ]
  },
  {
    key: 5, name: "Xe chở rác THACO TOWNER800-CS", percentage: "80", color_bar: '#97E075',
    ID: 5901463, weight: "1 tấn", status: "Đang thực hiện", power: "1000 HP",capacity: "1200L", inUse: "300L", address: "Bãi đỗ tập trung 1 - Nguyễn Thái Sơn, Phường 3, Quận Gò Vấp, TP.HCM",
    columns: [{ headerName: "ID Task", field: 'id', width: "100", headerClassName: 'super-app-theme--header' },
    { headerName: 'Nhân viên', field: 'worker', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Thời gian kết thúc', field: 'endtime', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header' },
    { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header' }],
    data: [{
      "id": 59234,
      "worker": "Quách Tĩnh",
      "starttime": "12/10/2022 16:00",
      "endtime": "12/10/2022 17:00",
      "status": "Đang thực hiện",
      "note": ""
    },
    {
      "id": 59235,
      "worker": "Đoàn Dự",
      "starttime": "11/10/2022 16:00",
      "endtime": "11/10/2022 17:00",
      "status": "Hoãn",
      "note": "Xe bảo trì"
    },
    {
      "id": 59236,
      "worker": "Tạ Tốn",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    }

  ]
  },
  {
    key: 6, name: "Xe chở rác THACO TOWNER800-CX", percentage: "50", color_bar: '#97E075',
    ID: 6001463, weight: "1.5 tấn", status: "Đang thực hiện", power: "1500 HP",capacity: "1400L", inUse: "200L", address: "Bãi đỗ tập trung 2 - Nguyễn Thái Sơn, Phường 3, Quận Gò Vấp, TP.HCM",
    columns: [{ headerName: "ID Task", field: 'id', width: "100", headerClassName: 'super-app-theme--header' },
    { headerName: 'Nhân viên', field: 'worker', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Thời gian bắt đầu', field: 'starttime', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Thời gian kết thúc', field: 'endtime', width: "150", headerClassName: 'super-app-theme--header' },
    { headerName: 'Tình trạng', field: 'status', width: "170", headerClassName: 'super-app-theme--header' },
    { headerName: 'Ghi chú', field: 'note', width: "188", headerClassName: 'super-app-theme--header' }],
    data: [{
      "id": 60234,
      "worker": "Hồng Thất Công",
      "starttime": "12/10/2022 16:00",
      "endtime": "12/10/2022 17:00",
      "status": "Đang thực hiện",
      "note": ""
    },
    {
      "id": 60235,
      "worker": "Kim Dung",
      "starttime": "11/10/2022 16:00",
      "endtime": "11/10/2022 17:00",
      "status": "Hoãn",
      "note": "Xe bảo trì"
    },
    {
      "id": 60236,
      "worker": "Cô Cô",
      "starttime": "11/10/2022 15:00",
      "endtime": "11/10/2022 16:00",
      "status": "Đã hoàn thành",
      "note": ""
    }]
  }
];

const active = { backgroundColor: '#a88a8a', borderRadius: '1rem', height: '86px', width: '330px' }
const inactive = {}

export const Vehicle = () => {
  const [chosenVehicle, setChosenVehicle] = useState(VehicleList[0]);
  const [selected, setSelected] = useState(0);
  const handleClick = (divNum) => {
    setSelected(divNum);
  };

  const ViewDetail = () =>{
    

  }
  return (
    <div id="VehiclePage">
      <Box sx={{ flexGrow: 1 }} >
        <Grid
          container
          spacing={5}
          columns={16}
          justifyContent="center"
          flexDirection={{ xs: "column", sm: "row" }}
          columnSpacing={3}
        >
          <Grid item sm={6} xs={13} md={6} lg={4.7} >
            <Card style={{ height: '700px', borderRadius: "1rem", boxShadow: "5px 5px 15px 0px rgba(0, 0, 0, 0.1)" }}>
              <CardContent >
                <CustomColor>
                  <Typography gutterBottom variant="h5" fontSize="25px">
                    <strong>Thông tin phương tiện</strong>
                  </Typography>
                </CustomColor>
                {VehicleList.map((info, index) => (
                  <div key={index} style={(selected === index) ? active : inactive}
                    onClick={() => {
                      setChosenVehicle(VehicleList[index]);
                      handleClick(index);
                    }}>
                    <div style={{ marginLeft: '12px', paddingTop: '20px' }}>
                      <Typography variant="body1" component="div" style={{marginBottom: "50px", marginLeft: '1px' }} 
                      backgroundColor ="white" color="green" textAlign="center" height="50px" width="300px" borderRadius="10px" fontSize="17px">
                        <strong>{info.name}</strong></Typography>
                      {/* <ProgressBar
                        width="auto"
                        height="9px"
                        rect
                        fontColor={info.color_bar}
                        percentage={info.percentage}
                        rectPadding="0px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#D94949"
                        trackBorderColor="#b6b6b6"
                        defColor={{
                          fair: '#97E075',
                          good: '#FFE76B',
                          excellent: '#D94949',
                          poor: '#97E075',
                        }}
                      ></ProgressBar> */}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={15} sm={10} md={10} lg={11.2}>
            <Card style={{ height: '700px', borderRadius: "1rem", boxShadow: "5px 5px 15px 0px rgba(0, 0, 0, 0.1)" }}>
              <CardContent>
                <Grid container columns={9.5} spacing={5}>
                  <Grid item container columns={9.5} spacing={2}>
                    <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                      <CustomColor>
                        <Typography gutterBottom variant="h6" component="h5" fontSize="25px">
                          <strong>Thông tin phương tiện</strong>
                        </Typography>
                      </CustomColor>
                    </Grid>
                    <Grid item sm={3.5} md={3.5} xs={3.5} lg={3.5} >
                      <Typography variant="body2" component="div" fontSize="15px">
                        <strong>Tên: </strong> {chosenVehicle.name}
                      </Typography>
                    </Grid>
                    <Grid item sm={3} md={3} xs={3} lg={3}>
                      <Typography variant="body2" component="div" fontSize="15px">
                        <strong>Trọng lượng: </strong> {chosenVehicle.weight}
                      </Typography>
                    </Grid>
                    <Grid item sm={3} md={3} xs={3} lg={3}>
                      <Typography variant="body2" component="div" fontSize="15px">
                        <strong>Công suất: </strong> {chosenVehicle.power}
                      </Typography>
                    </Grid>
                    {/* <Grid item sm={2.25} md={2.25} xs={2.25} lg={2.25}>
                                          <Typography variant="body2" component="div">
                                              <strong>Tình trạng: </strong> {chosenVehicle.status}
                                          </Typography>
                                      </Grid> */}

                    <Grid item sm={3} md={3} xs={3.5} lg={3.5} >
                      <Typography variant="body2" component="div" fontSize="15px">
                        <strong>Dung tích thùng chứa nhiên liệu: </strong> {chosenVehicle.capacity}
                      </Typography>
                    </Grid>
                    <Grid item sm={3} md={3} xs={3} lg={3}>
                      <Typography variant="body2" component="div" fontSize="15px">
                        <strong>Mức tiêu hao nhiên liệu trung bình: </strong> {chosenVehicle.inUse}
                      </Typography>
                    </Grid>
                    <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                      <Typography variant="body2" component="div" fontSize="15px">
                        <strong>Địa chỉ bãi đỗ tập trung: </strong> {chosenVehicle.address}
                      </Typography>
                    </Grid>
                    {/* <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                                          <Typography variant="body2" component="div">
                                              <strong>Địa chỉ: </strong> {chosenVehicle.address}
                                          </Typography>
                                      </Grid> */}
                    <Grid item container columns={9.5} spacing={2}>
                      <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                        <Typography variant="body2" component="div" fontSize="15px">
                          <strong>Lịch sử sử dụng: </strong>
                        </Typography>
                      </Grid>
                      <Grid item sm={9.5} xs={9.5} md={9.5} lg={9.5} fontSize="15px">
                        <Box sx={{ height: 400, width: '100%', '& .super-app-theme--header': { backgroundColor: '#4d77f0' }, }} >
                          <DataGrid
                            rows={chosenVehicle.data}
                            columns={chosenVehicle.columns}
                            pageSize={6}
                            rowsPerPageOptions={[6]}
                            
                            // disableSelectionOnClick
                            

                            experimentalFeatures={{ newEditingApi: true }}
                            rowHeight={49}

                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                    <Button 
                    onClick={() => {
                      alert('Xem thông tin phương tiện chi tiết');
                    }
                    }
                    variant='contained'
                    startIcon={<InfoIcon/>}
                    > Chi tiết
                    </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Vehicle;