import { 
  Box, 
  Typography, 
  useTheme, 
  Table, 
  TableHead, 
  TableRow, 
  TableBody, 
  TableCell, 
  TablePagination,
  Grid,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import './glassmorphism.css';
import { tokens } from "../../theme";
import { useState } from 'react';

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

const VehicleHistory = ({ selectedRowData }) => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const userHistory = selectedRowData.userHistory;
  const maintenance = selectedRowData.maintenanceHistory;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // set the default rows per page to 5

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box 
      className="glassmorphism"
      gap="20px"
      gridColumn="span 4"
      gridRow="span 2"
      p="15px"
      >
      {/* General personal information */}
      <Grid container spacing={1}>       
        <Grid item xs = {6}>
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            ml={15}
            mb="20px"
        >
        </Box>
        </Grid>
      </Grid>
      {/* Task history table */}
      <Typography variant="h6" gutterBottom sx={{ color: colors.greenAccent[400] }}>
        Lịch sử công việc
      </Typography>
      <Table style={{backgroundColor: "transparent"}}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nhân viên</TableCell>
            <TableCell align="right">MCPs</TableCell>
            <TableCell align="right"> Check in</TableCell>
            <TableCell align="right"> Check out</TableCell>
            <TableCell align="right">Tình trạng lúc nhận</TableCell>
            <TableCell align="right">Tình trạng lúc trả</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {userHistory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={userHistory.id}>
              <TableCell component="th" scope="row" className={classes.tableCell}>
                {row.id}
              </TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.worker}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.MCPs}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.checkIn}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.checkOut}</TableCell>
              <TableCell 
                  align="right" 
                  className={classes.tableCell}
                  style={
                    row.statusReceived === "Ổn định"
                      ? { color: colors.greenAccent[400]  }
                      : { color: colors.redAccent[400]}
                  }
              >{row.statusReceived}</TableCell> 
              <TableCell 
                  align="right" 
                  className={classes.tableCell}
                  style={
                    row.statusGiveback === "Ổn định"
                      ? { color: colors.greenAccent[400]  }
                      : 
                       { color: colors.redAccent[400], }
                       }
              >{row.statusGiveback}</TableCell> 


            </TableRow>
          ))}
        </TableBody>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          count={userHistory.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Table>


      {/* maintenance*/}

      <Typography variant="h6" gutterBottom sx={{ color: colors.greenAccent[400] }}>
        Lịch sử bảo dưỡng
      </Typography>
      <Table style={{backgroundColor: "transparent"}}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Thời gian</TableCell>
            <TableCell align="right">Xưởng xe</TableCell>
            <TableCell align="right">Chi phí</TableCell>
            <TableCell align="right">Nội dung</TableCell>
            <TableCell align="right">Ghi Chú</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {maintenance.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={maintenance.id}>
              <TableCell component="th" scope="row" className={classes.tableCell}>
                {row.id}
              </TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.time}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.gara}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.cost}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.purpose}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.note}</TableCell>

            </TableRow>
          ))}
        </TableBody>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          // component="div"
          count={maintenance.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Table>

    </Box>
  );
}
export default VehicleHistory;