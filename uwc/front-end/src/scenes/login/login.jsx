import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import '../../components/Login/./login.css';
import '../../components/Worker/./glassmorphism.css';

const LoginPage = ( {setAuthenticated, setUserID, setAllUserAccount, setUserLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [account, setAccount] = useState([]); 
  const [localUser, setLocalUser] = useState([]);

  useEffect(() => {
    // get all account from mongo
    fetch('http://localhost:5000/uwc/account', {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setAccount(data.data);
        
    })
    .catch(err => console.error(err));

    fetch('http://localhost:5000/uwc/worker', {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setAllUserAccount(data.data);
        setLocalUser(data.data);
    })
    .catch(err => console.error(err));
    // document.body.classList.add('login-page');
    document.body.classList.add('login-page');
    return () => {
      document.body.classList.remove('login-page');
    }
  }, []);
    
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {

    const user = account.find((u) => u.username === email && u.password === password);

    if (user) {
      toast.success("Login success");
      localStorage.setItem("authenticated", true);
      setAuthenticated(true);
      console.log(`User ${user.username} logged in as ${user.userType}`);
      setUserID(user.workerID);
      setUserLogin(localUser.find((u) => u._id == user.workerID));

    } else {
      const errorMsg = account.some((u) => u.username === email)
        ? "Wrong password"
        : "User does not exist";
      toast.error(errorMsg);
    }
    
    event.preventDefault();
    
  };
  
  return (
    <Box
      className="loginGlass"
      sx={{
        // width: '300px',
        height: 'auto',
        p: '15px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center" marginBottom={5}>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box gap="20px" sx={{ width: '100%', mb: '10px', justifyContent: 'center' }}>
          <TextField
            fullWidth
            variant="outlined"
            type="email"
            label="Email"
            placeholder="Nhập email của bạn"
            value={email}
            sx={{ gridColumn: 'span 2', margin: '5px' }}
            onChange={handleEmailChange}
            inputProps={{ autoComplete: 'off' }}
          />
        </Box>
        <Box gap="20px" sx={{ width: '100%', mb: '10px', justifyContent: 'center' }}>
          <TextField
            fullWidth
            variant="outlined"
            type="password"
            label="Password"
            placeholder="Nhập mật khẩu của bạn"
            value={password}
            sx={{ gridColumn: 'span 2', margin: '5px' }}
            onChange={handlePasswordChange}
            inputProps={{ autoComplete: 'off' }}
          />
        </Box>
        <Button 
            fullWidth 
            type="submit" 
            variant="contained"
            className="login-button"
            sx={{ gridColumn: 'span 2', margin: '5px' }}
            style={{
                borderRadius: 20,
            }}
        >
          Login
        </Button>

        <Typography variant="subtitle1"  textAlign="center" margin={5} sx={{ justifyContent: "center" }}>
        Hoặc đăng nhập bằng:
        </Typography>
        <Box sx={{ textAlign: "center" }}>
            <Grid container spacing={1} sx={{ width: "100%", justifyContent: "center" }}>
                <Grid item xs = {4}>
                <Button>
                    <SocialIcon url="https://google.com" />
                </Button>
                </Grid>

                <Grid item xs = {4}>
                    <Button>
                        <SocialIcon url="https://facebook.com" />                    
                    </Button>
                </Grid>

                <Grid item xs = {4}>
                    <Button>
                        <SocialIcon url="https://github.com" />
                    </Button>
                    
                </Grid>
            </Grid>
        </Box>
      </form>
      <ToastContainer hideProgressBar={true} limit={1} autoClose={3000}></ToastContainer>  
    </Box>
  );
}

export default LoginPage;
