import { tokens } from "../../theme";
import {
  Button,
  useTheme,
  TextField,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// import axios from 'axios'; // import axios library for HTTP requests
import "./glassmorphism.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WorkerEdit = ({ selectedRowData, userID }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [formValues, setFormValues] = useState({
    // changed data
    name: selectedRowData?.name,
    gender: selectedRowData?.gender,
    dob: selectedRowData?.dob,
    phone: selectedRowData?.phone,
    idcard: selectedRowData?.idcard,
    email: selectedRowData?.email,
    address: selectedRowData?.address,
    // fixed data
    idUser: selectedRowData?.idUser,
    taskHistory: selectedRowData?.taskHistory,
    status: selectedRowData?.status,
    type: selectedRowData?.type,
    _id: selectedRowData?._id,
  });

  const handleFieldChange = (fieldName, fieldValue) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [fieldName]: fieldValue,
    }));
  };

  function handleApplyChange() {
    toast.success("Thay đổi thông tin thành công", {
      position: toast.POSITION.TOP_RIGHT,
    });

    fetch(`http://localhost:5000/uwc/worker/${formValues._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data updated successfully");
        } else if (response.status === 404) {
          console.log("Error updating data: Resource not found");
        } else {
          console.log("Error updating data: " + response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  }

  return (
    <Box
      // sx={{ width: 0.7 }}
      className="glassmorphism"
      gap="20px"
      gridColumn="span 4"
      gridRow="span 2"
      p="15px"
    >
      <Typography
        variant="h4"
        gutterBottom
        textAlign={"center"}
        sx={{ color: colors.greenAccent[400] }}
      >
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
            onChange={(e) => handleFieldChange("name", e.target.value)}
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
            onChange={(e) => handleFieldChange("gender", e.target.value)}
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
            onChange={(e) => handleFieldChange("dob", e.target.value)}
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
            onChange={(e) => handleFieldChange("phone", e.target.value)}
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
            onChange={(e) => handleFieldChange("idcard", e.target.value)}
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
            onChange={(e) => handleFieldChange("email", e.target.value)}
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
            onChange={(e) => handleFieldChange("address", e.target.value)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
        >
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
              handleApplyChange();
            }}
          >
            Thay đổi thông tin
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default WorkerEdit;
