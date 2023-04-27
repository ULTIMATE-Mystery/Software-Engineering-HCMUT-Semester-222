import React, { useState, useEffect } from "react";
import { Popover, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Switch} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonOutlined";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import { toast } from 'react-toastify';


const WorkerPermission = ({powerPermission, userRowType, userID}) => {
    const [checked, setChecked] = useState([userRowType]);

    useEffect(() => {
        setChecked([userRowType]);
    }, [userRowType]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
      
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
      
        // Toggle the other switch based on the current value of this switch
        if (value === 'Collector') {
            if (newChecked.indexOf('Janitor') !== -1) {
                const janitorIndex = newChecked.indexOf('Janitor');
                newChecked.splice(janitorIndex, 1);
            } else if (newChecked.indexOf('Back Officer') !== -1) {
                const janitorIndex = newChecked.indexOf('Back Officer');
                newChecked.splice(janitorIndex, 1);
            }
        } else if (value === 'Janitor') {
            if (newChecked.indexOf('Collector') !== -1) {
                const janitorIndex = newChecked.indexOf('Collector');
                newChecked.splice(janitorIndex, 1);
            } else if (newChecked.indexOf('Back Officer') !== -1) {
                const janitorIndex = newChecked.indexOf('Back Officer');
                newChecked.splice(janitorIndex, 1);
            }
        } else if (value === 'Back Officer') {
            if (newChecked.indexOf('Collector') !== -1) {
                const janitorIndex = newChecked.indexOf('Collector');
                newChecked.splice(janitorIndex, 1);
            } else if (newChecked.indexOf('Janitor') !== -1) {
                const janitorIndex = newChecked.indexOf('Janitor');
                newChecked.splice(janitorIndex, 1);
            }
        }
      
        setChecked(newChecked);

        const result = newChecked[newChecked.length - 1];
        const finalResult = {
            "type": result ? result : 'User',
        }

        fetch(`http://localhost:5000/uwc/worker/${userID}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(finalResult)
        })

        .then(response => {
            if (response.ok) {
                console.log('Data updated successfully');
            } else if (response.status === 404) {
                console.log('Error updating data: Resource not found');
            } else {
                console.log('Error updating data: ' + response.statusText);
            }
        })
        .catch(error => {
            console.error('Error updating data:', error);
        });
    };
      
      
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenPopover = (event) => {
        if (!powerPermission) {
            return toast.error("Bạn không có quyền để truy cập, yêu cầu Admin hoặc Back Officer.");
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
                    width: "230px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                    bgcolor: "#fff",
                    color: "#000",
                },
            }}
            >
            <List
            subheader={<ListSubheader sx={{ bgcolor: "#f5f5f5", color: "#000", fontSize: "16px", lineHeight: "24px", fontWeight: 700 }}>Thay đổi chức vụ</ListSubheader>}
            sx={{ width: '100%', maxWidth: 450, bgcolor: "#fff", color: "#000" }}
            >
            <ListItem sx={{ "&:hover": { bgcolor: "#f5f5f5" } }}>
                <ListItemIcon>
                <SupervisorAccountIcon sx={{ color: "#008000" }} />
                </ListItemIcon>
                <ListItemText id="switch-list-label-backofficer" primary="Back Officer" />
                <Switch
                edge="end"
                onChange={handleToggle('Back Officer')}
                checked={checked.indexOf('Back Officer') !== -1}
                inputProps={{
                    'aria-labelledby': 'switch-list-label-backofficer',
                }}
                />
            </ListItem>
            <ListItem sx={{ "&:hover": { bgcolor: "#f5f5f5" } }}>
                <ListItemIcon>
                <FireTruckIcon sx={{ color: "#008000" }} />
                </ListItemIcon>
                <ListItemText id="switch-list-label-collector" primary="Collector" />
                <Switch
                edge="end"
                onChange={handleToggle('Collector')}
                checked={checked.indexOf('Collector') !== -1}
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
                onChange={handleToggle('Janitor')}
                checked={checked.indexOf('Janitor') !== -1}
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
