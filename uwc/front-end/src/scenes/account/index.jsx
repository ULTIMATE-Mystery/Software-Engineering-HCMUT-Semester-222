import { tokens } from "../../theme";
import { Button, useTheme, TextField, Grid, Box, Typography } from "@mui/material";
import React, { useState } from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../components/Header";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";

const EditInfor = ( {userAccount, setUserAccount} ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordNew, setShowPasswordNew] = useState(false);
    const [showPasswordNewConfirm, setShowPasswordNewConfirm] = useState(false);

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewpassword] = useState('');

    const handleClickShowPassword = (index) => {
      if (!index) setShowPassword(!showPassword);
      else if (index === 1) setShowPasswordNew(!showPasswordNew);
      else if (index === 2) setShowPasswordNewConfirm(!showPasswordNewConfirm);

    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    // const [formValues, setFormValues] = useState({
    //   _id: userAccount?._id,
    // });
        
    // const handleFieldChange = (fieldName, fieldValue) => {
    
    // setFormValues((prevFormValues) => ({
    //     ...prevFormValues,
    //     [fieldName]: fieldValue,
    // }));
    // };

    const formValues = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmNewPassword: confirmNewPassword,
      _id: userAccount?._id,
    }
    const handleApplyChange = () => {
      console.log(formValues);
      if (formValues.oldPassword !== userAccount.password) {
        toast.error("Mật khẩu không chính xác", { 
          position: toast.POSITION.TOP_RIGHT,
          toastId: 'my-toast-id',
          autoClose: 3000,
        });
      }
      else if (formValues.newPassword !== formValues.confirmNewPassword) {
        toast.error("Mật khẩu xác nhận không khớp", { 
          position: toast.POSITION.TOP_RIGHT,
          toastId: 'my-toast-id',
          autoClose: 3000,
        });
      } else {
        fetch(`http://localhost:5000/uwc/account/${formValues._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValues)
        })

            .then(response => {
                if (response.ok) {
                  userAccount.password = formValues.newPassword;
                  setUserAccount(userAccount);
                  toast.success("Thay đổi thông tin thành công", { 
                    position: toast.POSITION.TOP_RIGHT,
                    toastId: 'my-toast-id',
                    autoClose: 3000,
                  });
                } else if (response.status === 404) {
                    console.log('Error updating data: Resource not found');
                } else {
                    console.log('Error updating data: ' + response.statusText);
                }
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
      }
 
    }
      
    return (  
      <Box m="20px">
        <ToastContainer hideProgressBar={true} limit={1} autoClose={3000}></ToastContainer>  
          {/* HEADER */}
            <Header title="QUẢN LÝ TÀI KHOẢN" subtitle="Thay đổi thông tin bảo mật" />
        <form onSubmit={handleApplyChange}>
        <Box 
            className="glassmorphism"
            gap="20px"
            gridColumn="span 4"
            gridRow="span 2"
            p="15px"
            sx={{
              width: 0.5,
              // '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <Typography variant="h4" gutterBottom textAlign={"center"} sx={{ color: colors.greenAccent[400] }}>
        Đổi mật khẩu
        </Typography>       
            <Grid container spacing={1} sx={{ width: "100%" }}>
            <Grid item xs={12}>
            <TextField
              inputProps={{
                autocomplete: 'new-password',
                form: {
                  autocomplete: 'off',
                },
              }}
              fullWidth
              variant="outlined"
              type={showPassword ? "text" : "password"}
              label="Mật khẩu cũ"
              value={formValues.oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              InputProps={{
              endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => handleClickShowPassword(0)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              ),
              }}
            />
            </Grid>

            <Grid item xs={12}>
            <TextField
              inputProps={{
                autocomplete: 'new-password',
                form: {
                  autocomplete: 'off',
                },
              }}
              fullWidth
              variant="outlined"
              type={showPasswordNew ? "text" : "password"}
              label="Mật khẩu mới"
              value={formValues.newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              InputProps={{
              endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => handleClickShowPassword(1)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                {showPasswordNew ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              ),
              }}
            />
            </Grid>

            <Grid item xs={12}>
            <TextField
              inputProps={{
                autocomplete: 'new-password',
                form: {
                  autocomplete: 'off',
                },
              }}
              fullWidth
              variant="outlined"
              type={showPasswordNewConfirm ? "text" : "password"}
              label="Nhập lại mật khẩu mới"
              value={formValues.confirmNewPassword}
              onChange={(e) => setConfirmNewpassword(e.target.value)}
              InputProps={{
              endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => handleClickShowPassword(2)}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                {showPasswordNewConfirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              ),
              }}
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
                handleApplyChange();
                }}
            >
                Lưu thay đổi
            </Button>
            
            </Grid>
            </Grid>
            
            </Box>
            </form>
            </Box>
      // </div>
            
    );
}
export default EditInfor;
