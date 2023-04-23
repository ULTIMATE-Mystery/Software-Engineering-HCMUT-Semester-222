import { tokens } from "../../theme";
import {  useTheme,  Grid, Box, Typography } from "@mui/material";
import React from "react";
import './glassmorphism.css';


const VehicleInfo = ( {selectedRowData} ) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      
         <Box 
      className="glassmorphism"
      gap="20px"
      gridColumn="span 4"
      gridRow="span 3"
      p="15px"
      >

  <Box display="flex" justifyContent="center" alignItems="center" margin-bottom = "20 px">
                <img
                  alt="profile-user"
                  height="150 px"
                  src={selectedRowData.image}
                  style={{ cursor: "pointer", borderRadius: " 10 px" }}
                />
  </Box> 
  <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.greenAccent[400]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  TỔNG QUAN
                </Typography>

              </Box>
     
      {/* General vehicle information */}
      <Grid container spacing={1}>
        <Grid item xs = {6}>
        <Box       
          gap="20px"
          gridColumn="span 4"
          gridRow="span 2"
          marginBottom="20px"
          display="flex"
          alignItems="center"
        >
          <div>
            <Typography variant="h6" gutterBottom>
              <Box component="span"  color={colors.greenAccent[400]}>ID: </Box> 
               {selectedRowData.id}
            </Typography>

            <Typography variant="h6" gutterBottom> 
              <Box component="span"  color={colors.greenAccent[400]}>Loại xe </Box> 
               {selectedRowData.typeCar}
            </Typography>

            <Typography variant="h6" gutterBottom> 
              <Box component="span"  color={colors.greenAccent[400]}>Tình trạng: </Box> 
               {selectedRowData.Status}
            </Typography>
            <Typography variant="h6" gutterBottom> 
              <Box component="span"  color={colors.greenAccent[400]}>Nhân viên: </Box> 
               {selectedRowData.worker}
            </Typography>
            <Typography variant="h6" gutterBottom> 
              <Box component="span"  color={colors.greenAccent[400]}>Mức độ hư hỏng </Box> 
               {selectedRowData.damage}
            </Typography>
            <Typography variant="h6" gutterBottom> 
              <Box component="span"  color={colors.greenAccent[400]}>Biển số: </Box> 
               {selectedRowData.plateNumber}
            </Typography>
            <Typography variant="h6" gutterBottom> 
              <Box component="span"  color={colors.greenAccent[400]}>Số khung: </Box> 
               {selectedRowData.frameNumber}
            </Typography>
            <Typography variant="h6" gutterBottom> 
              <Box component="span"  color={colors.greenAccent[400]}>Dung tích: </Box> 
               {selectedRowData.capacity}
            </Typography>
            <Typography variant="h6" gutterBottom> 
              <Box component="span"  color={colors.greenAccent[400]}>Hao tổn nhiên liệu: </Box> 
               {selectedRowData.fuel}
            </Typography>
            <Typography variant="h6" gutterBottom> 
              <Box component="span"  color={colors.greenAccent[400]}>Năm sản xuất: </Box> 
               {selectedRowData.yearOfMake}
            </Typography>
          </div>

        </Box>
        </Grid>
        </Grid>
        </Box>
    );
};
export default VehicleInfo;
