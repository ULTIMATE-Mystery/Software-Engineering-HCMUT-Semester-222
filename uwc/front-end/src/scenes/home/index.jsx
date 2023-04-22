import { Box, Button, Typography, useTheme, Grid } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import '../../components/Worker/./glassmorphism.css';
import { useNavigate } from "react-router-dom";
import {Table, TableRow, TableBody, TableCell, Avatar} from '@mui/material';
import MCPsProgressBar from "../../components/Chart/LinearProgress";
import { makeStyles } from '@material-ui/core/styles';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TodayEvents from "../../components/Home/Calendar";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  tableCell: {
    borderBottom: "none"
  },
}));

const HomePage = ({allUserAccount, vehicle}) => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();


  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TRANG CHỦ" subtitle="Trang thông tin tổng quan" />
      </Box>
      <Grid container spacing={1} sx={{ width: "100%" }}>
        <Grid item xs={6}>
        <Box
          className="glassmorphism"
          maxHeight={245} 
          gap="20px"
          gridColumn="span 4"
          gridRow="span 2"
          p="15px"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography color='white' fontSize={18} justifyContent='flex-start' sx={{ flexGrow: 1, marginLeft: '25px' }}>
              MCPs
            </Typography>
            <Button 
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => navigate('/workerinfo')}
              style={{
                backgroundColor: colors.greenAccent[600],
                marginRight: '30px',
              }}
              sx={{ flexShrink: 0 }}
            >
              <Typography color="white">
                Xem chi tiết
              </Typography>
            </Button>
          </Box>
          <MCPsProgressBar progress={75} name={"Lê Văn Sỹ"} />
          <MCPsProgressBar progress={96} name={"Nguyễn Đức Thọ"} />
          <MCPsProgressBar progress={20} name={"Lý Thường Kiệt"} />  
        </Box>

        </Grid>
        <Grid item xs={6}>
        <Box
          className="glassmorphism"
          maxHeight={245} 
          gap="20px"
          gridColumn="span 4"
          gridRow="span 2"
          p="15px"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch'
          }}
        >
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography color='white' fontSize={18} justifyContent='flex-start' sx={{ flexGrow: 1, marginLeft: '25px' }}>
              Phương tiện
            </Typography>
            <Button 
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => navigate('/workerinfo')}
              style={{
                backgroundColor: colors.greenAccent[600],
                marginRight: '30px',
                // paddingBottom: '0px'
              }}
              sx={{ flexShrink: 0 }}
            >
              <Typography color="white">
                Xem chi tiết
              </Typography>
            </Button>
          </Box>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginLeft: '10px' }}>
            <Table>
              <TableBody style={{ width: '100%' }}>
                {vehicle.slice(0, 3).map((row) => (
                  <TableRow padding="100px"> {/* Add the padding property here */}
                    <TableCell 
                      component="th" 
                      scope="row" 
                      className={classes.tableCell} 
                      style={{
                        paddingRight: '40px',
                        paddingBottom: '13px'
                      }}
                    >
                        
                        <Typography
                          variant="h6" 
                          sx={{ 
                            // color: colors.greenAccent[400], 
                            display: 'flex', 
                            alignItems: 'center'
                          }}
                        >
                          {row.typeCar[0] !== 'G' ? 
                          <ShoppingCartIcon 
                            style={ {
                              color: row.Status === "Có thể sử dụng" ? colors.greenAccent[400] :
                                    row.Status === "Đang sử dụng" ? colors.redAccent[400] :
                                    colors.grey[300],
                            }}
                            fontSize="large"
                          /> : 
                          <FireTruckIcon 
                            style={ {
                              color: row.Status === "Có thể sử dụng" ? colors.greenAccent[400] :
                                    row.Status === "Đang sử dụng" ? colors.redAccent[400] :
                                    colors.grey[300],
                            }}
                            fontSize="large" 
                          />}
                        <span 
                          style={ {
                            color: row.Status === "Có thể sử dụng" ? colors.greenAccent[400] :
                                  row.Status === "Đang sử dụng" ? colors.redAccent[400] :
                                  colors.grey[300],
                                  marginLeft: '15px'
                          }}
                        >
                          {row.typeCar}
                        </span>
                      </Typography>
                    </TableCell>
                    <TableCell 
                      align="l" 
                      className={classes.tableCell}
                      style={ {
                        color: row.Status === "Có thể sử dụng" ? colors.greenAccent[400] :
                              row.Status === "Đang sử dụng" ? colors.redAccent[400] :
                              colors.grey[300],
                        paddingBottom: '13px',
                      }}
                    >
                      <Typography variant="h6" >
                        {row.Status}
                      </Typography>
                      
                    </TableCell>
                    <TableCell 
                      align="left" 
                      className={classes.tableCell} 
                      style={ {
                        paddingRight: '40px', 
                        color: row.Status === "Có thể sử dụng" ? colors.greenAccent[400] :
                              row.Status === "Đang sử dụng" ? colors.redAccent[400] :
                              colors.grey[300],
                        paddingBottom: '13px',
                      }}
                    >
                      <Typography variant="h6" >
                        {row.plateNumber}
                      </Typography>
                    </TableCell>
                  </TableRow >
                ))}
              </TableBody>
            </Table>     
            </div>     
        </Box>
        </Grid>

        <Grid item xs={6}>
        <Box
          className="glassmorphism"
          maxHeight={245} 
          gap="20px"
          gridColumn="span 4"
          gridRow="span 2"
          p="15px"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography color='white' fontSize={18} justifyContent='flex-start' sx={{ flexGrow: 1, marginLeft: '25px' }}>
              Nhân viên
            </Typography>
            <Button 
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => navigate('/workerinfo')}
              style={{
                backgroundColor: colors.greenAccent[600],
                marginRight: '30px',
                // paddingBottom: '1'
              }}
              sx={{ flexShrink: 0 }}
            >
              <Typography color="white">
                Xem chi tiết
              </Typography>
            </Button>
          </Box>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginLeft: '10px' }}>
            <Table>
              <TableBody style={{ width: '100%' }}>
                {allUserAccount.slice(0, 3).map((row) => (
                  <TableRow padding="100px"> {/* Add the padding property here */}
                    <TableCell 
                      component="th" 
                      scope="row" 
                      className={classes.tableCell} 
                      style={{
                        paddingRight: '40px',
                        paddingBottom: '0px',
                      }}
                    >
                      <Typography variant ="h6" sx={{ color: colors.greenAccent[400], display: 'flex', alignItems: 'center' }}>
                        <Avatar name={row.name} size="30" round={true}/>
                        <span style={{ marginLeft: '15px' }}>{row.name}</span>
                      </Typography>
                    </TableCell>
                    <TableCell 
                      align="left" 
                      className={classes.tableCell} 
                      style={{
                        paddingRight: '40px', 
                        paddingBottom: '0px'
                      }}
                    >
                      <Typography variant="h6" >
                        {row.type}
                      </Typography>
                      
                    </TableCell>
                    <TableCell 
                      align="l" 
                      className={classes.tableCell}
                      style={ {
                        color: row.status === "Đang hoạt động" ? colors.greenAccent[400] :
                              row.status === "Không hoạt động" ? colors.redAccent[400] :
                              colors.grey[300],
                        paddingBottom: '0px',
                      }}
                    >
                      <Typography variant="h6" >
                        {row.status}
                      </Typography>
                      
                    </TableCell>
                  </TableRow >
                ))}
              </TableBody>
            </Table>     
            </div>     
        </Box>
        </Grid>
          
        <Grid item xs={6}>
        <Box
          className="glassmorphism"
          maxHeight={245} 
          gap="20px"
          gridColumn="span 4"
          gridRow="span 2"
          p="15px"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch'
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography color='white' fontSize={18} justifyContent='flex-start' sx={{ flexGrow: 1, marginLeft: '25px' }}>
              Lịch hôm nay
            </Typography>
            <Button 
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => navigate('/calendar')}
              style={{
                backgroundColor: colors.greenAccent[600],
                marginRight: '30px',
              }}
              sx={{ flexShrink: 0 }}
            >
              <Typography color="white">
                Xem chi tiết
              </Typography>
            </Button>
          </Box>
          <TodayEvents />
        </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
