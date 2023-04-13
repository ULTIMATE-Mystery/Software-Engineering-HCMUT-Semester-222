// import React, { useState, useEffect } from 'react';
// import { Box, Button, TextField, Typography, Grid } from '@mui/material';
// import { SocialIcon } from 'react-social-icons';
// import { toast, ToastContainer } from 'react-toastify';
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { IconButton, InputAdornment } from "@mui/material";
// import '../../components/Login/./login.css';
// import '../../components/Worker/./glassmorphism.css';

// const LoginPage = ( {setAuthenticated, setUserID, setAllUserAccount, setUserLogin, setUserAccount }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [account, setAccount] = useState([]); 
//   const [localUser, setLocalUser] = useState([]);

//   const [showPassword, setShowPassword] = useState(false);


//   const handleClickShowPassword = (index) => {
//     setShowPassword(!showPassword);
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   useEffect(() => {
//     // get all account from mongo
//     fetch('http://localhost:5000/uwc/account', {
//       method: "GET",
//     })
//       .then(res => res.json())
//       .then(data => {
//         setAccount(data.data);
//     })
//     .catch(err => console.error(err));

//     fetch('http://localhost:5000/uwc/worker', {
//       method: "GET",
//     })
//       .then(res => res.json())
//       .then(data => {
//         setAllUserAccount(data.data);
//         setLocalUser(data.data);
//     })
//     .catch(err => console.error(err));
//     // document.body.classList.add('login-page');
//     document.body.classList.add('login-page');
//     return () => {
//       document.body.classList.remove('login-page');
//     }
//   }, []);
    
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
    
//     const user = account.find((u) => u.username === email && u.password === password);
//     setUserAccount(user);

//     if (user) {
//       toast.success("Đăng nhập thành công");
//       localStorage.setItem("authenticated", true);
//       setAuthenticated(true);
//       console.log(`User ${user.username} logged in as ${user.userType}`);
//       setUserID(user.workerID);
//       setUserLogin(localUser.find((u) => u._id === user.workerID));

//     } else {
//       const errorMsg = account.some((u) => u.username === email)
//         ? "Sai mật khẩu"
//         : "Tài khoản không tồn tại";
//       toast.error(errorMsg);
//     }
    
//     event.preventDefault();
    
//   };
  
//   return (
//     // <Box m="50px" >
//     <Box
//       className="glassmorphism"
//       sx={{
//         width: '300px',
//         height: 'auto',
//         p: '15px',
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//       }}
//     >
//       <Typography variant="h4" gutterBottom textAlign="center" marginBottom={5}>
//         Login
//       </Typography>
//       <form onSubmit={handleSubmit} autocomplete="off">

//       <Box gap="20px" sx={{ width: '100%', mb: '10px', justifyContent: 'center' }}>
//           <TextField
//             inputProps={{
//               autocomplete: 'new-password',
//               form: {
//                 autocomplete: 'off',
//               },
//             }}
//             fullWidth
//             variant="outlined"
//             type="email"
//             label="Email"
//             placeholder="Nhập email của bạn"
//             value={email}
//             sx={{
//               gridColumn: 'span 2',
//               margin: '5px',
//             }}
//             onChange={handleEmailChange}
//           />
//         </Box>
//         <Box gap="20px" sx={{ width: '100%', mb: '10px', justifyContent: 'center' }}>
//           <TextField
//               inputProps={{
//                 autocomplete: 'new-password',
//                 form: {
//                   autocomplete: 'off',
//                 },
//               }}
//               fullWidth
//               variant="outlined"
//               type={showPassword ? "text" : "password"}
//               label="Mật khẩu của bạn"
//               value={password}
//               onChange={handlePasswordChange}
//               sx={{ gridColumn: 'span 2', margin: '5px' }}
//               InputProps={{
//               endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton
//                   onClick={() => handleClickShowPassword(0)}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//               ),
//               }}
//             />
//         </Box>
//         <Button 
//             fullWidth 
//             type="submit" 
//             variant="contained"
//             className="login-button"
//             sx={{ gridColumn: 'span 2', margin: '5px' }}
//             style={{
//                 borderRadius: 20,
//             }}
//         >
//           Login
//         </Button>

//         <Typography variant="subtitle1"  textAlign="center" margin={5} sx={{ justifyContent: "center" }}>
//         Hoặc đăng nhập bằng:
//         </Typography>
//         <Box sx={{ textAlign: "center" }}>
//             <Grid container spacing={1} sx={{ width: "100%", justifyContent: "center" }}>
//                 <Grid item xs = {4}>
//                 <Button>
//                     <SocialIcon url="https://google.com" />
//                 </Button>
//                 </Grid>

//                 <Grid item xs = {4}>
//                     <Button>
//                         <SocialIcon url="https://facebook.com" />                    
//                     </Button>
//                 </Grid>

//                 <Grid item xs = {4}>
//                     <Button>
//                         <SocialIcon url="https://github.com" className='SocialIcon' />
//                     </Button>
                    
//                 </Grid>
//             </Grid>
//         </Box>
//       </form>
//       <ToastContainer hideProgressBar={true} limit={1} autoClose={3000}></ToastContainer>  
//     </Box>
//     // </Box>
//   );
// }

// export default LoginPage;


import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { toast, ToastContainer } from 'react-toastify';
import TextInput from "../../components/Chat/TextInput";
import MyButton from "../../components/Chat/MyButton";
import { Link } from 'react-router-dom';
import '../../components/Login/./login.css';
import '../../components/Worker/./glassmorphism.css';

const LoginPage = ( { setAuthenticated, setUserID, setAllUserAccount, setUserLogin, setUserAccount } ) => {
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

  const onSubmit = (event) => {
    
    const user = account.find((u) => u.username === email && u.password === password);
    setUserAccount(user);

    if (user) {
      // toast.success("Đăng nhập thành công");
      localStorage.setItem("authenticated", true);
      setAuthenticated(true);
      console.log(`User ${user.username} logged in as ${user.userType}`);
      setUserID(user.workerID);
      setUserLogin(localUser.find((u) => u._id === user.workerID));

    } else {
      const errorMsg = account.some((u) => u.username === email)
        ? "Sai mật khẩu"
        : "Tài khoản không tồn tại";
      toast.error(errorMsg);
    }
    
    event.preventDefault();
    
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Xin chào 👋</div>
        
        <div className="form-subtitle">
          Chưa có tài khoản? 
          <Link 
            to="/signup" 
            style={{ color: "#fa541c", textDecoration: "none" }}
          > Đăng ký</Link>
        </div>


        <div className="auth">
        <TextInput
          label="Tên đăng nhập"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          label="Password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <MyButton type="submit">Log In</MyButton>
        </div>
      </form>
      <ToastContainer hideProgressBar={true} limit={1} autoClose={3000}></ToastContainer>  
    </div>
  );
};

export default LoginPage;