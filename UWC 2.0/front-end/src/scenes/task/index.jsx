import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { DataTaskView } from "../../data/mockData";
import Header from "../../components/Header";
import {
  Button,
  Box,
  Typography,
  useTheme,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  Paper,
} from "@mui/material";
import "../route/glassmorphism.css";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import PropTypes from "prop-types";
import { useState } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  tableCell: {
    // borderBottom: "none",
  },
  // tableHeader: {
  //   backgroundColor: colors.blueAccent[100]
  // },
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const Task = () => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Họ và Tên",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Loại nhân viên",
      flex: 1,
    },
    {
      field: "vehicle",
      headerName: "Phương Tiện",
      flex: 1,
    },
    {
      field: "task",
      headerName: "Nhiệm vụ",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Tình trạng",
      flex: 1,
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - DataTaskView.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box m="20px">
      <Header title="Nhiệm vụ" subtitle="Danh sách nhiệm vụ" />

      <Box
        m="40px 0 0 0"
        // height="75vh"
        display="flex"
        className="glassmorphism"
        gap="20px"
        gridColumn="span 4"
        gridRow="span 2"
        flexDirection="column"
        p="15px"
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
        {/* <DataGrid
          rows={mockDataTasks}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        /> */}

        <TableContainer sx={{ maxHeight: "70vh" }}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: colors.blueAccent[800],
                  mx: "30px",
                }}
              >
                <TableCell>
                  <Typography variant="h6">Khu Vực/Tuyến Đường</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h6">MCP</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h6">Tên Nhân Viên</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h6">Loại Nhân Viên</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="h6">Tình Trạng</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Phương Tiện</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Giờ Bắt Đầu</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Ngày</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Ghi Chú</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? DataTaskView.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : DataTaskView
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell className={classes.tableCell}>{row.locate}</TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.mcp}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.userId}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.type}
                  </TableCell>
                  <TableCell
                    className={classes.tableCell}
                    style={
                      row.status === "Đang thực hiện"
                        ? { color: colors.greenAccent[400] }
                        : row.status === "Chưa thực hiện"
                        ? { color: colors.redAccent[400] }
                        : { color: colors.grey[300] }
                    }
                  >
                    {row.status}

                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.vehicle}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.startTime}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.Date}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.note}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter
              sx={{
                position: "sticky",
                bottom: 0,
                zIndex: 1,
              }}
            >
              {/* <TableRow align="left"> */}

              {/* </TableRow> */}
            </TableFooter>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={12}
          count={DataTaskView.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </Box>
    </Box>
  );
};

export default Task;
