import { Box, Button, IconButton, Typography, useTheme, Grid, TextField } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import '../../components/Worker/./glassmorphism.css';
import MyButton from "../../components/Chat/MyButton";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
      <Grid container spacing={1} sx={{ width: "100%" }}>
        <Grid item xs={6}>
          <Box
            className="glassmorphism"
            gap="20px"
            gridColumn="span 4"
            gridRow="span 2"
            p="15px"
            sx={{
              position: 'relative',
              display: 'flex',           
              justifyContent: 'flex-end' 
            }}
          >
          <Button
            sx={{
              backgroundColor: '#2579f2',
              color: 'primary',
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px',
            }}
            variant="outlined"
            onClick={() => {
            // handleApplyChange();
            }}
          >
          Xem chi tiết
          </Button>
          {/* Other content goes here */}
          </Box>
        </Grid>
        <Grid item xs={6}>
        <Box
            className="glassmorphism"
            gap="20px"
            gridColumn="span 4"
            gridRow="span 2"
            p="15px"
            sx={{
              position: 'relative',
              display: 'flex',           
              justifyContent: 'flex-end' 
            }}
          >
          <Button
            sx={{
              backgroundColor: '#2579f2',
              color: 'primary',
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px',
            }}
            variant="outlined"
            onClick={() => {
            // handleApplyChange();
            }}
          >
          Xem chi tiết
          </Button>
          {/* Other content goes here */}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            className="glassmorphism"
            gap="20px"
            gridColumn="span 4"
            gridRow="span 2"
            p="15px"
            sx={{
              position: 'relative',
              display: 'flex',           
              justifyContent: 'flex-end' 
            }}
          >
          <Button
            sx={{
              backgroundColor: '#2579f2',
              color: 'primary',
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px',
            }}
            variant="outlined"
            onClick={() => {
            // handleApplyChange();
            }}
          >
          Xem chi tiết
          </Button>
          {/* Other content goes here */}
          </Box>
        </Grid>
        <Grid item xs={6}>
        <Box
            className="glassmorphism"
            gap="20px"
            gridColumn="span 4"
            gridRow="span 2"
            p="15px"
            display="flex"
            justifyContent="flex-end"
            // sx={{
            //   position: 'relative',
            //   display: 'flex',     
            //   // justifyContent: 'flex-end',
            // }}
          >
          <Button
            sx={{

              backgroundColor: '#2579f2',
              color: 'primary',
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px',
            }}
            variant="outlined"
            onClick={() => {
            // handleApplyChange();
            }}
          >
          Xem chi tiết
          </Button>
          {/* Other content goes here */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
