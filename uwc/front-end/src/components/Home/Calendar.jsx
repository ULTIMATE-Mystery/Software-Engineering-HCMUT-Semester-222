import { useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const TodayEvents = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleCheckinClick = ({id}) => {
    
  };

  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Thu gom rác khu vực Lê Văn Sỹ MCPs",
      time: "4:00 AM",
    },
    {
      id: 2,
      title: "Thu gom rác khu vực Lý Thường Kiệt MCPs",
      time: "7:30 PM",
    },
    {
      id: 3,
      title: "Thu gom rác khu vực Nguyễn Đức Thọ MCPs",
      time: "9:00 PM",
    },
  ]);

  return (
    <Box sx={{ overflowY: 'auto', scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
      {events.map((event) => (
        <Box
            maxWidth={520}
            key={event.id}
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                borderRadius: '4px',
                backgroundColor: colors.greenAccent[700],
                marginBottom: '10px',
                marginLeft: '25px',
            }}
        >
          <Box sx={{ marginRight: '15px' }}>
            <Typography variant='h5'>{event.title}</Typography>
            <Typography variant='subtitle1'>{event.time}</Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            onClick={handleCheckinClick(event.id)}
            sx={{
                borderRadius: '4px',
                backgroundColor: "lightblue",
                padding: '5px 10px',
                marginLeft: 'auto',
                '&:hover': {
                backgroundColor: 'lightblue',
                color: 'white'
                }
            }}
            >
            <Typography color='dark'>
                Check-in
            </Typography>
            </Button>

        </Box>
      ))}
      {events.length === 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <Typography variant='subtitle1' color='textSecondary'>
            No events today
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TodayEvents;
