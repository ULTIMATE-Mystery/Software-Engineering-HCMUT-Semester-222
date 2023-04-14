import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { BsChatDots } from "react-icons/bs";
import AccountButton from '../../components/Dropdown/account';
import { Link } from 'react-router-dom';
import WorkerPermission from "../../components/Worker/workerPermission";

const Topbar = ({setAuthenticated }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleSettingsHover = () => {
  }
  const open = Boolean(anchorEl);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" autoComplete="off" />
        <IconButton type="button" sx={{ p: 1 }} autoComplete="off">
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton >
          <Link to="/chat" style={{ color: 'inherit' }}>
            <BsChatDots />
          </Link>
        </IconButton>


       <IconButton onMouseEnter={handleSettingsHover}>
          <SettingsOutlinedIcon/>
        </IconButton> 

        <IconButton>
          <AccountButton setAuthenticated={setAuthenticated } />
          {/* <WorkerPermission/> */}

        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
