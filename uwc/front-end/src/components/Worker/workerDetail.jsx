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
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import './glassmorphism.css';
import { tokens } from "../../theme";
import { colors } from '@mui/material';
import { useState } from 'react';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];
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

const PersonalInfo = ({ selectedRowData }) => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const userTaskHistory = selectedRowData.taskHistory;

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
      // sx={{ width: 1 }}
      className="glassmorphism"
      gap="20px"
      gridColumn="span 4"
      gridRow="span 2"
      p="30px"
      >
      <Typography variant="h4" gutterBottom textAlign={"center"} sx={{ color: colors.greenAccent[400] }}>
        TỔNG QUAN
      </Typography>
      {/* General personal information */}

      {/* Task history table */}
      <Typography variant="h6" gutterBottom sx={{ color: colors.greenAccent[400] }}>
        Lịch sử công việc
      </Typography>
      <Table style={{backgroundColor: "transparent"}}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Thời gian bắt đầu</TableCell>
            <TableCell align="right">Thời gian kết thúc</TableCell>
            <TableCell align="right">Tình trạng</TableCell>
            <TableCell align="right">Ghi chú</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {userTaskHistory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={userTaskHistory.id}>
              <TableCell component="th" scope="row" className={classes.tableCell}>

                {row.id}
              </TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.startTime}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.endTime}</TableCell>
              <TableCell 
                  align="right" 
                  className={classes.tableCell}
                  style={
                    row.completedStatus === "Hoàn thành"
                      ? { color: colors.greenAccent[400]  }
                      : row.completedStatus === "Không hoàn thành"
                      ? { color: colors.redAccent[400], }
                      : { color: colors.grey[300]}
                  }
              >{row.completedStatus}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          // component="div"
          count={userTaskHistory.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Table>


    </Box>
  );
}
export default PersonalInfo;