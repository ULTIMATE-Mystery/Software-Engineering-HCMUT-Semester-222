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
import { MCPSList } from "../../data/MCPlist";

const CustomColor = styled('div')({
  background: 'linear-gradient(180deg, rgba(66,109,236,1) 0%, rgba(134,201,145,1) 100%)',
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  
});

const active = {backgroundColor: '#708090', borderRadius: '1rem', height: '62px', width: '330px'}
const inactive = {}

export const MCPs = () => {
  const [chosenMCP, setChosenMCP] = useState(MCPSList[0]);
  const [selected, setSelected] = useState(0);
  const handleClick = (divNum) => {
      setSelected(divNum);
  };
  return (
      <div id="MCPSPage">
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
                      <Card style={{height: '650px', borderRadius: "1rem", boxShadow: "5px 5px 15px 0px rgba(0, 0, 0, 0.1)"}}>
                              <CardContent >
                                  <CustomColor>
                                      <Typography gutterBottom variant="h5" >
                                          <strong>MCPs</strong>
                                      </Typography>
                                  </CustomColor>
                                  {MCPSList.map((info,index) => (
                                      <div key={index} style={(selected === index) ? active : inactive} 
                                          onClick={()=>{
                                              setChosenMCP(MCPSList[index]);
                                              handleClick(index);
                                          }}>
                                          <div style={{ marginLeft: '12px', paddingTop: '10px'}}>
                                              <Typography variant="body1" component="div" style={{ marginBottom: "-15px", marginLeft: '1px'}}>
                                                  <strong>{info.name}</strong></Typography>
                                                  <ProgressBar
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
                                                  ></ProgressBar>
                                          </div>
                                      </div>
                                  ))} 
                              </CardContent>
                      </Card>
                  </Grid>
                  <Grid item xs={15} sm={10} md={10} lg={11.2}>
                      <Card style={{height: '650px', borderRadius: "1rem", boxShadow: "5px 5px 15px 0px rgba(0, 0, 0, 0.1)"}}>
                              <CardContent>
                              <Grid container columns={9.5} spacing={5}>
                                  <Grid item container columns={9.5} spacing={2}>
                                      <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                                          <CustomColor>
                                              <Typography gutterBottom variant="h6" component="h5">
                                                  <strong>Thông tin MCP</strong>
                                              </Typography>
                                          </CustomColor>
                                      </Grid>
                                      <Grid item sm={2.75} md={2.75} xs={2.75} lg={2.75}>
                                          <Typography variant="body2" component="div">
                                              <strong>Tên: </strong> {chosenMCP.name}
                                          </Typography>
                                      </Grid>
                                      <Grid item sm={2.25} md={2.25} xs={2.25} lg={2.25}>
                                          <Typography variant="body2" component="div">
                                              <strong>ID: </strong> {chosenMCP.ID}
                                          </Typography>
                                      </Grid>
                                      <Grid item sm={2.25} md={2.25} xs={2.25} lg={2.25}>
                                          <Typography variant="body2" component="div">
                                              <strong>Năm sản xuất: </strong> {chosenMCP.year}
                                          </Typography>
                                      </Grid>
                                      <Grid item sm={2.25} md={2.25} xs={2.25} lg={2.25}>
                                          <Typography variant="body2" component="div">
                                              <strong>Tình trạng: </strong> {chosenMCP.status}
                                          </Typography>
                                      </Grid>
                                      <Grid item sm={2.25} md={2.25} xs={2.75} lg={2.75}>
                                          <Typography variant="body2" component="div">
                                              <strong>Dung tích: </strong> {chosenMCP.capacity}
                                          </Typography>
                                      </Grid>
                                      <Grid item sm={2.25} md={2.25} xs={2.25} lg={2.25}>
                                          <Typography variant="body2" component="div">
                                              <strong>Đã sử dụng: </strong> {chosenMCP.inUse}
                                          </Typography>
                                      </Grid>
                                      <Grid item sm={4.5} md={4.5} xs={4.5} lg={4.5}>
                                          <Typography variant="body2" component="div">
                                              <strong>Màu sơn: </strong> {chosenMCP.color}
                                          </Typography>
                                      </Grid>
                                      <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                                          <Typography variant="body2" component="div">
                                              <strong>Địa chỉ: </strong> {chosenMCP.address}
                                          </Typography>
                                      </Grid>
                                      <Grid item container columns={9.5} spacing={2}>
                                          <Grid item sm={9.5} md={9.5} xs={9.5} lg={9.5}>
                                              <Typography variant="body2" component="div">
                                                  <strong>Lịch sử sử dụng: </strong>
                                              </Typography>
                                          </Grid>
                                          <Grid item sm={9.5} xs={9.5} md={9.5} lg={9.5}>
                                              <Box sx={{ height: 450, width: '100%', '& .super-app-theme--header': {backgroundColor: '#708090'},}} >
                                                  <DataGrid
                                                      rows={chosenMCP.data}
                                                      columns={chosenMCP.columns}
                                                      rowsPerPageOptions={[3]}
                                                      disableSelectionOnClick
                                                      experimentalFeatures={{ newEditingApi: true }}
                                                      rowHeight={50}
                                                  />
                                              </Box>
                                          </Grid> 
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

export default MCPs;