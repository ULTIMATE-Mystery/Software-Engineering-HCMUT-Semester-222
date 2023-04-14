import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { toast, ToastContainer } from 'react-toastify';
import '../../components/Worker/./glassmorphism.css';
import DescriptionIcon from '@mui/icons-material/Description';
import { MdArrowBack } from 'react-icons/md';
import PersonalInfo from '../../components/Worker/workerDetail';
import WorkerEdit from '../../components/Worker/workerEdit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { 
  Box,
  Button, 
  useTheme,
  Typography, 
  Table, 
  TableHead, 
  TableRow, 
  TableBody, 
  TableCell, 
  TablePagination,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

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

const WorkerInfo = ({setAllUserAccount, setUserLogin, userID}) => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [workers, setWorkers] = useState([]);

  const [updateInfo, setUpdateInfo] = useState(0); // use to re-render back button
  // get worker collection from mongo
  useEffect(() => {
    fetch('http://localhost:5000/uwc/worker', {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        setWorkers(data.data);
        setAllUserAccount(data.data);
              })
      .catch(err => console.error(err));
  }, [updateInfo]);

  const mockDataWorkerInfo = workers;

  const user = mockDataWorkerInfo.find((u) => u._id === userID);

  setUserLogin(user);

  const [detailInfor, setDetailInfor] = useState(false); // useState for worker infor detail

  const [selectedRowData, setSelectedRowData] = useState(null);

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5); // set the default rows per page to 5

  const handleBackButtonClick = () => {
    if (detailInfor) {
      setDetailInfor(false);
      setUpdateInfo(updateInfo + 1); // update the state variable to trigger a re-render
    }
    else setDetailInfor(true);
  };

  // get detail infor on button click
  const handleDetailClick = (rowId) => {
    // find the row data corresponding to the row id
    const rowData = mockDataWorkerInfo.find((row) => row.idUser === rowId);
    setSelectedRowData(rowData);

    if (detailInfor) setDetailInfor(false);
    else setDetailInfor(true);
  };

  const handleGrantPermission = (rowId) => {

  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderButtonCell = ({ row, buttonFunc }) => {
    const handleClick = () => {
      handleDetailClick(row.idUser);
    };

    let userType = null;
    if (user) {
      userType = user.type;
      console.log(userType);
    }
    const powerPermission = (userType === "Back Officer" ? 1 : 0);

    const handleClickGrantPermission = (e) => {
      if (powerPermission) {
        handleGrantPermission(row.idUser);
      } else {
        toast.error("Bạn không có quyền để truy cập, yêu cầu Back Officer.");
      }
    };

    return (
        <Button 
          endIcon={
            buttonFunc === "Chi tiết" ?
            <DescriptionIcon style={{ color: 'white' }}/> :
            <PersonAddIcon style={{ color: 'white' }}/> }
          size="small" // or "medium" or "large"
          color="secondary"
          variant="outlined"
          onClick={ (buttonFunc === "Chi tiết" ? handleClick : () => handleClickGrantPermission(userType) )}
          style={{ marginRight: '10px',               
              backgroundColor: buttonFunc === "Phân quyền" ? (powerPermission
                ? colors.greenAccent[600]
                : 'none') : colors.greenAccent[600]
          }}
          sx={{ width: '130px' }}
          // disabled={!powerPermission && buttonFunc === "Phân quyền"}
        >
        <Typography color="white" >
          {buttonFunc}
        </Typography>
        </Button>
    );
  };

  return (
    <Box m="20px">
      <Header
        title="THÔNG TIN NHÂN VIÊN"
        subtitle="Danh sách nhân viên"
      />
      { !detailInfor &&
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .green--cell": {
            color: colors.greenAccent[400]
          },
          "& .red--cell": {
            color: colors.redAccent[500],
            // color: "#ff0000",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
      <Box 
        className="glassmorphism"
        gap="20px"
        gridColumn="span 4"
        gridRow="span 2"
        p="15px"
      >
        <Table style={{backgroundColor: "transparent"}}>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" >
                   Họ và tên
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6" >
                  Loại hình nhân viên
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6" >
                  Tình trạng
                </Typography>
              </TableCell>
              <TableCell sx={{ transform: "translateX(+25%)" }}>
                Hành động
              </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
          {mockDataWorkerInfo.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow padding="100px"> {/* Add the padding property here */}
                <TableCell component="th" scope="row" className={classes.tableCell} style={{ width: '30%' }}>
                <Typography sx={{ color: colors.greenAccent[400] }}> {row.name} </Typography>
                </TableCell>
                <TableCell align="left" className={classes.tableCell}>{row.type}</TableCell>
                <TableCell 
                  align="l" 
                  className={classes.tableCell}
                  style={
                    row.status === "Đang hoạt động"
                      ? { color: colors.greenAccent[400]  }
                      : row.status === "Không hoạt động"
                      ? { color: colors.redAccent[400], }
                      : { color: colors.grey[300]}
                  }
                >
                  {row.status}
                </TableCell>

                <TableCell align="left" className={classes.tableCell} >
                  {renderButtonCell({ row, buttonFunc: "Chi tiết",userType: "Collector" })}
                  {renderButtonCell({ row, buttonFunc: "Phân quyền",userType: "Collector" })}
                </TableCell>
              </TableRow >
            ))}
          </TableBody>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            // component="div"
            count={mockDataWorkerInfo.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Table>
      </Box>
      
      </Box>
      }
      {
        detailInfor && selectedRowData && (
        <div>
        <div style={{ display: 'flex', alignItems: 'center', margin: '0 0 20px 0'}}>
          <MdArrowBack 
          fontSize={25}
          onClick={() => {
          handleBackButtonClick();
          }}
          />
          <span style={{ display: 'inline-block', textAlign: 'center', lineHeight: '24px', fontSize: '20px' }}>Quay lại</span>
        </div>
      <Box display="flex" justifyContent="space-between" gap="5px" alignItems="flex-start">
      {/* Edit worker info */}
      <Box
          flex="0 1 50%"
          p="15px"
          borderRadius="4px"
        >
        <WorkerEdit selectedRowData={selectedRowData} />
      </Box>

      {/* Detail infor display */}
        <Box
          flex="0 1 100%"
          p="15px"
          borderRadius="4px"
        >
          <PersonalInfo selectedRowData={selectedRowData} />
  
        </Box>

    </Box>
    
    </div>
    
    )}
    <ToastContainer hideProgressBar={true} limit={1} autoClose={3000}></ToastContainer>  
    </Box>
  );
};

export default WorkerInfo;
