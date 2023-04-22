import React, { useState } from "react";
import { IconButton, Popover, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import '../../components/Worker/./glassmorphism.css';
import { Link } from 'react-router-dom';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const AccountButton = ({setAuthenticated}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    // history.push('/login');
    localStorage.removeItem("authenticated");
    setAuthenticated(false);
  };

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <IconButton onClick={handleOpenPopover}>
        <PersonOutlinedIcon />
    </IconButton>
    <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        PaperProps={{
            style: {
              borderRadius: "10px",
              width: "200px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
        <List>
            <ListItem button component={Link} to="/account">
              <ListItemIcon>
                <AccountBoxOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Quản lý tài khoản" />
            </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Đăng xuất" />
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default AccountButton;
