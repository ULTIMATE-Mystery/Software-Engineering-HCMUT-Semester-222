import { tokens } from "../../theme";
import { Button, useTheme, TextField, Grid, Box, Typography } from "@mui/material";
import React from "react";
import './glassmorphism.css';


const handleInfoChange = () => {

};

const WorkerEdit = ( {selectedRowData} ) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (    
        <Box 
            // sx={{ width: 0.7 }}
            className="glassmorphism"
            gap="20px"
            gridColumn="span 4"
            gridRow="span 2"
            p="15px"
        >
        <Typography variant="h4" gutterBottom textAlign={"center"} sx={{ color: colors.greenAccent[400] }}>
        CÁ NHÂN
        </Typography>       
            <Grid container spacing={1} sx={{ width: "100%" }}>
            <Grid item xs={6}>
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Họ và tên"
                defaultValue={selectedRowData?.name}
                sx={{ gridColumn: "span 2", margin: "5px" }}
            />
            </Grid>

            <Grid item xs={6}>
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Giới tính"
                defaultValue={selectedRowData?.gender}
                sx={{ gridColumn: "span 2", margin: "5px" }}
            />
            </Grid>

            <Grid item xs={6}>
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Ngày sinh"
                defaultValue={selectedRowData?.dob}
                sx={{ gridColumn: "span 2", margin: "5px" }}
            />
            </Grid>

            <Grid item xs={6}>
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Số điện thoại"
                defaultValue={selectedRowData?.phone}
                sx={{ gridColumn: "span 2", margin: "5px" }}
            />
            </Grid>

            <Grid item xs={12}>
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Chứng minh nhân dân"
                defaultValue={selectedRowData?.idcard}
                sx={{ gridColumn: "span 2", margin: "5px" }}
            />
            </Grid>

            <Grid item xs={12}>
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Email"
                defaultValue={selectedRowData?.email}
                sx={{ gridColumn: "span 2", margin: "5px" }}
            />
            </Grid>

            <Grid item xs={12}>
            <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Địa chỉ"
                defaultValue={selectedRowData?.address}
                sx={{ gridColumn: "span 2", margin: "5px", marginRight: "20px" }}
            />
            </Grid>

            <Grid item xs={12} container justifyContent="center" alignItems="center">
            <Button
                sx={{
                backgroundColor: "#2579f2",
                color: "primary",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px",
                }}
                variant="outlined"
                onClick={() => {
                handleInfoChange();
                }}
            >
                Thay đổi thông tin
            </Button>
            </Grid>

            </Grid>

            </Box>
    );
}
export default WorkerEdit;
