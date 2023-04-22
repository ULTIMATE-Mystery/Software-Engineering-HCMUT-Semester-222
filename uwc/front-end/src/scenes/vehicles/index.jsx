import { tokens } from "../../theme";
import { mockDataVehicle } from "../../data/mockData";
import Header from "../../components/Header";
import React, { useState } from "react";
import { MdArrowBack } from 'react-icons/md';
import VehicleHistory from '../../components/vehicle/vehicleHistory';
import VehicleInfo from '../../components/vehicle/vehicleInfo';
import { Box, Button, useTheme, Typography, Table, TableHead, TableRow, 
  TableBody, TableCell, TablePagination, IconButton } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@mui/icons-material/Description';


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

const Vehicle = () => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [detailInfor, setDetailInfor] = useState(false); // useState for worker infor detail
  const [selectedRowData, setSelectedRowData] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // get detail infor on button click
  const handleDetailClick = (rowId) => {
    // find the row data corresponding to the row id

    const rowData = mockDataVehicle.find((row) => row.id === rowId);
    // console.log("Button clicked on row:", rowData);
    setSelectedRowData(rowData);

    if (detailInfor) setDetailInfor(false);
    else setDetailInfor(true);
  };

  const handleBackButtonClick = () => {
    if (detailInfor) setDetailInfor(false);
    else setDetailInfor(true);
  };

  // draw table contains all workers info
  // const columns = [
  //   { field: "id", headerName: "ID", flex: 0.5, editable: true, },
  //   {
  //     field: "typeCar",
  //     headerName: "Loại xe",
  //     cellClassName: "name-column--cell",
  //     flex: 1,
  //   },
  //   {
  //     field: "color",
  //     headerName: "Màu sắc",
  //     flex: 1,
  //   },
  //   {
  //     field: "worker",
  //     headerName: "Nhân viên",
  //     cellClassName: (params) =>
  //     params.value === 'Không' ? "red--cell" : params.value ,
  //     flex: 1,
  //   },
  //   {
  //     field: "Status",
  //     headerName: "Tình trạng",
  //     cellClassName: (params) =>
  //     params.value === 'Đang sử dụng' ? "green--cell" : params.value === 'Chưa sử dụng' ? "red--cell" : '',
  //     flex: 1,
  //   },
    
  //   {
  //     renderCell: ({ params, row }) => {
  //       return (
  //         <Button
  //           color="secondary"
  //           variant="outlined"
  //           onClick={() => {
  //             handleDetailClick(params, row.id);
  //           }}
  //         >
  //           Chi tiết
  //         </Button>
  //       );
  //     }
  //   },    
  // ];
  const renderButtonCell = ({ row }) => {
    return (
        
        <Button 
          size="small" // or "medium" or "large"
          color={"secondary"}
          variant="outlined"
          onClick={() => {
            handleDetailClick( row.id );
          }}
          style={{
            marginRight: '10px',
            backgroundColor: colors.greenAccent[600]
          }}
          sx={{ width: '150px' }}
          endIcon={
          <DescriptionIcon style={{ color: 'white' }}/>}
        >

        <Typography color="white" >
          Chi tiết
        </Typography>
        </Button>
    );
  };

  return (
    <Box m="20px">
      <Header
        title="THÔNG TIN PHƯƠNG TIỆN"
        subtitle="Danh sách phương tiện"
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
                   ID
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6" >
                  Loại xe
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6" >
                  Màu sắc
                </Typography>
              </TableCell>
              <TableCell align="left">
              <Typography variant="h6" >
                  Nhân viên
                </Typography>
              </TableCell>
              <TableCell align="left">
              <Typography variant="h6" >
                  Tình trạng
                </Typography>
              </TableCell>
              <TableCell align="left">
                Hành động
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {mockDataVehicle.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow padding="100px"> {/* Add the padding property here */}
                <TableCell component="th" scope="row" className={classes.tableCell}>
                <Typography sx={{ color: colors.greenAccent[400] }}> {row.id} </Typography>
                {/* sx={{ color: colors.greenAccent[400] }} */}
                </TableCell>
                <TableCell align="left" className={classes.tableCell}>{row.typeCar}</TableCell>
                  
                <TableCell align="left" className={classes.tableCell}>{row.color}</TableCell>
                <TableCell align="left" className={classes.tableCell}>{row.worker}</TableCell>
                <TableCell 
                  align="l" 
                  className={classes.tableCell}
                  style={
                    row.Status === "Có thể sử dụng"
                      ? { color: colors.greenAccent[400]  }
                      : row.Status === "Đang sử dụng"
                      ? { color: colors.redAccent[400], }
                      : { color: colors.grey[300]}
                  }
                >
                  {row.Status}
                </TableCell>


                <TableCell align="left" className={classes.tableCell} >
                  {renderButtonCell({ row })}
                </TableCell>
              </TableRow >
            ))}
          </TableBody>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            // component="div"
            count={mockDataVehicle.length}
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
        <VehicleInfo selectedRowData={selectedRowData} />
      </Box>

      {/* Detail infor display */}
        <Box
          flex="0 1 100%"
          p="15px"
          borderRadius="4px"
        >
          <VehicleHistory selectedRowData={selectedRowData} />
  
        </Box>

    </Box>
    </div>
    )}
    </Box>
  );
};

export default Vehicle;
