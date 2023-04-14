import React, { useState } from "react";
import FireTruckIcon from '@mui/icons-material/FireTruck';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import { Popover, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Switch} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonOutlined";
import { toast } from 'react-toastify';

const WorkerPermission = ({powerPermission}) => {

    const [checked, setChecked] = React.useState(['collector']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
      
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
      
        // Toggle the other switch based on the current value of this switch
        if (value === 'collector' && newChecked.indexOf('janitor') !== -1) {
          const janitorIndex = newChecked.indexOf('janitor');
          newChecked.splice(janitorIndex, 1);
        } else if (value === 'janitor' && newChecked.indexOf('collector') !== -1) {
          const collectorIndex = newChecked.indexOf('collector');
          newChecked.splice(collectorIndex, 1);
        }
      
        setChecked(newChecked);
    };
      
      
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenPopover = (event) => {
        if (!powerPermission) {
            return toast.error("Bạn không có quyền để truy cập, yêu cầu Back Officer.");
        }
        setAnchorEl(event.currentTarget);
        
    };

    const handleClosePopover = () => {
        setAnchorEl(null);
    };

    return (
        <>
        
        <PersonAddIcon onClick={handleOpenPopover} sx={{ color: "#fff"}}/>
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
                sx: {
                    borderRadius: "10px",
                    width: "200px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    bgcolor: "#fff",
                    color: "#000",
                },
            }}
            >
            <List
            subheader={<ListSubheader sx={{ bgcolor: "#f5f5f5", color: "#000", fontSize: "16px", lineHeight: "24px", fontWeight: 700 }}>Thay đổi chức vụ</ListSubheader>}
            sx={{ width: '100%', maxWidth: 360, bgcolor: "#fff", color: "#000" }}
            >
            <ListItem sx={{ "&:hover": { bgcolor: "#f5f5f5" } }}>
                <ListItemIcon>
                <FireTruckIcon sx={{ color: "#008000" }} />
                </ListItemIcon>
                <ListItemText id="switch-list-label-collector" primary="Collector" />
                <Switch
                edge="end"
                onChange={handleToggle('collector')}
                checked={checked.indexOf('collector') !== -1}
                inputProps={{
                    'aria-labelledby': 'switch-list-label-collector',
                }}
                />
            </ListItem>
            <ListItem sx={{ "&:hover": { bgcolor: "#f5f5f5" } }}>
                <ListItemIcon>
                <CleaningServicesIcon sx={{ color: "#008000" }} />
                </ListItemIcon>
                <ListItemText id="switch-list-label-janitor" primary="Janitor" />
                <Switch
                edge="end"
                onChange={handleToggle('janitor')}
                checked={checked.indexOf('janitor') !== -1}
                inputProps={{
                    'aria-labelledby': 'switch-list-label-janitor',
                }}
                />
            </ListItem>
            </List>
        </Popover>
        </>
    );
};

export default WorkerPermission;
