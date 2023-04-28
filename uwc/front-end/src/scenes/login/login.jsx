import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { toast, ToastContainer } from 'react-toastify';
import TextInput from "../../components/Chat/TextInput";
import MyButton from "../../components/Chat/MyButton";
import { Link } from 'react-router-dom';
import axios from "axios";
import '../../components/Login/./login.css';
import '../../components/Worker/./glassmorphism.css';

const LoginPage = ( { setAuthenticated, setUserID, setAllUserAccount, setUserLogin, setUserAccount, setUser, setVehicle } ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [account, setAccount] = useState([]); 
  const [localUser, setLocalUser] = useState([]);

  useEffect(() => {
    // get all account from mongo
    fetch('https://uwc-backend-74hn.onrender.com/uwc/account'
    , {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setAccount(data.data);
    })
    .catch(err => console.error(err));

    fetch('https://uwc-backend-74hn.onrender.com/uwc/vehicle', {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setVehicle(data.data);
    })
    .catch(err => console.error(err));

    fetch('https://uwc-backend-74hn.onrender.com/uwc/worker', {
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
    
    axios
      .post("https://uwc-backend-74hn.onrender.com/authenticate", { username: email })
      .then((r) => setUser({ ...r.data, secret: email }) )
      .catch((e) => console.log("Auth Error", e));

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
        <MyButton type="submit">Đăng nhập</MyButton>
        </div>
      </form>
      <ToastContainer hideProgressBar={true} limit={1} autoClose={3000}></ToastContainer>  
    </div>
  );
};

export default LoginPage;