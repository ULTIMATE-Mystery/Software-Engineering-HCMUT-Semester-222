import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { toast, ToastContainer } from 'react-toastify';
import TextInput from "../../components/Chat/TextInput";
import MyButton from "../../components/Chat/MyButton";
import { Link } from 'react-router-dom';
import '../../components/Login/./login.css';
import '../../components/Worker/./glassmorphism.css';
import { useNavigate } from 'react-router-dom';

function insertDataWorker(account, nOfUser) {
    // insert new user
    const account_temp = account;
    account = {
        name: account.name,
        type: account.userType,
        address: "",
        dob: "",
        email: "",
        gender: "",
        idUser: nOfUser + 1,
        idcar: "",
        phone: "",
        status: "Đang hoạt động",
        taskHistory: [],
    }
    fetch(`https://uwc-backend-74hn.onrender.com/uwc/worker/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })
    .then(response => {
    if (response.ok) {
        console.log('Create new user data success');
        return response.json(); // parse the response body as JSON
    } else if (response.status === 404) {
        console.log('Error updating data: Resource not found');
        throw new Error('Resource not found');
    } else {
        console.log('Error updating data: ' + response.statusText);
        throw new Error(response.statusText);
    }
    })
    .then(data => {
        // setGetCollectionID(data);
        insertUser(account_temp, data);    
        return true; // return a resolved Promise
    })
    .catch(error => {
        console.error('Error updating data:', error);
        return false; // return a rejected Promise
    });
}

function insertUser(account, getCollectionID) {
    // insert new user
    account = {
        ...account,
        workerID: getCollectionID,
    }

    fetch(`https://uwc-backend-74hn.onrender.com/uwc/account/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })
    .then(response => {
    if (response.ok) {
        console.log('Create new user success');
        return response.json(); // parse the response body as JSON
    } else if (response.status === 404) {
        console.log('Error updating data: Resource not found');
        throw new Error('Resource not found');
    } else {
        console.log('Error updating data: ' + response.statusText);
        throw new Error(response.statusText);
    }
    })
    .catch(error => {
    console.error('Error updating data:', error);
    return false; // return a rejected Promise
    });
}
  

const SignUpPage = ( {nOfUser} ) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [allUserAccount, setAllUserAccount] = useState('');
    const [getCollectionID, setGetCollectionID] = useState('');

    const account = {
        name: name,
        username: email,
        password: password,
        userType: "User",
        workerID: "",
    }

const onSubmit = (event) => {
    event.preventDefault();

    fetch('https://uwc-backend-74hn.onrender.com/uwc/account', {
    method: "GET",
    })
    .then(res => res.json())
    .then(data => {
        const allUserAccount = data.data;
        const nOfUser = allUserAccount.length;
        setAllUserAccount(data.data);

        const existingUser = allUserAccount.find(u => u.username === email);

        if (existingUser) {
        toast.error('Tên đăng nhập đã tồn tại');
        } else if (password !== confirmPassword) {
        toast.error('Mật khẩu không khớp');
        } else {
            insertDataWorker(account, nOfUser);
              
            toast.success('Tạo thành công');
            setTimeout(() => {
            navigate('/login');
            }, 1500);
        }
    })
    .catch(err => console.error(err));

  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Đăng ký tài khoản</div>
        
        <div className="form-subtitle">
          Đã có tài khoản? 
          <Link 
            to="/login" 
            style={{ color: "#fa541c", textDecoration: "none" }}
          > Đăng nhập</Link>
        </div>


        <div className="auth">

        <TextInput
          label="Họ và tên"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          label="Tên đăng nhập"
          name="email"
        //   placeholder="adam@lamorre.co"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          label="Mật khẩu"
          name="password"
        //   placeholder="********"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextInput
          label="Xác nhận mật khẩu"
          name="confirmPassword"
        //   placeholder="********"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <MyButton type="submit">Đăng ký</MyButton>
        </div>
        {/* <div className="form-bottom" style={{ justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="form-bottom-title">
                    Hoặc đăng ký bằng:
                </div>
                <SocialIcon
                    url="https://www.facebook.com/"
                    network="facebook"
                    bgColor="#4d63ff"
                />
                <SocialIcon
                    url="https://github.com/"
                    network="github"
                    // bgColor="#00acee"
                />
                <SocialIcon
                    url="https://google.com/"
                    network="google"
                    // bgColor="#00acee"
                />
        </div> */}
      </form>
      <ToastContainer hideProgressBar={true} limit={1} autoClose={3000}></ToastContainer>  
    </div>
  );
};

export default SignUpPage;