import React from 'react';
import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { BsPersonVcard, BsTrash } from "react-icons/bs";
import { FaRoute, FaCarAlt } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";
import { Icon } from '@iconify/react';
import { AiOutlineHome }  from "react-icons/ai";

export const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem 
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({userLogin}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      maxHeight='100%'
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        // position: "fixed",
        // width: 240,
        height: '100%'
        // overflow: "hidden",
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  UWC 2.0
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {userLogin && userLogin.name ? userLogin.name : "Unknown user"}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]} fontWeight="lighter" fontStyle = "italic">
                {userLogin && userLogin.type ? userLogin.type : "Unknown user type"}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Trang chủ"
              to="/"
              icon={<AiOutlineHome fontSize = {20}/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Nhiệm vụ
            </Typography>
            <Item
              title="Tạo - gán công việc"
              to="/team"
              icon={<MdAssignmentAdd size={20}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Xem nhiệm vụ"
              to="/task"
              icon={<Icon icon="carbon:task-view" width="25" height="25"/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Xem tuyến đường"
              to="/route"
              icon={<FaRoute size={20}/>}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Thông tin
            </Typography>
            <Item
              title="Thông tin nhân viên"
              to="/workerinfo"
              icon={<BsPersonVcard size={20}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Thông tin MCPs"
              to="/form"
              icon={<BsTrash size={20}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Thông tin phương tiện"
              to="/vehicle"
              icon={<FaCarAlt size={20}/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Lịch làm việc"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Khác
            </Typography>
            <Item
              title="Trợ giúp"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
