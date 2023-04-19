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
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataRoute } from "../../data/mockData";
import "./glassmorphism.css";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import PropTypes from "prop-types";

// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import MapContainer from "./map";
import handleShowRoute from "./map";
import { useState } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DirectionsService, DirectionsRenderer } from "google-maps-react";

// import { useLoadScript, useJsApiLoader } from "@react-google-maps/api";
// import Map from "./mapv2";
// import { MapContainer } from "./map";

// export const Wrapper = () => {
//   constructor(props) {
//     super(props);
//     this.state = {
//       google: null
//     };
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.google !== this.props.google) {
//       this.setState({ google: this.props.google });
//     }
//   }

// }

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  tableCell: {
    borderBottom: "none",
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

const RouteMap = () => {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "status",
      headerName: "Tình trạng",
      flex: 1,
    },
    {
      field: "length",
      headerName: "Độ dài",
      flex: 1,
    },
  ];

  const [directions, setDirections] = useState(null);

  const handleClick = () => {
    handleShowRoute(setDirections);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - mockDataRoute.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box m="20px">
      <Header title="Tuyến đường" subtitle="Danh sách tuyến đường" />
      <Grid container columnSpacing={2}>
        <Grid item xs={4}>
          <Box
            m="40px 0 0 0"
            display="flex"
            // height="75vh"
            className="glassmorphism"
            // marginBottom="20px"
            gap="20px"
            gridColumn="span 4"
            gridRow="span 2"
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
                position: "sticky",
                bottom: 0,
                zIndex: 1,
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
            }}
          >
            {/* <DataGrid
              checkboxSelection
              rows={mockDataRoute}
              columns={columns}
            /> */}
            <TableContainer
              sx={{
                maxHeight: "70vh",
              }}
            >
              <Table aria-label="simple table" stickyHeader>
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: colors.blueAccent[800],
                      mx: "30px",
                    }}
                  >
                    <TableCell>
                      <Typography variant="h6">ID</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h6">Tên</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h6">Tình trạng</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Độ dài</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? mockDataRoute.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : mockDataRoute
                  ).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className={classes.tableCell}>
                        {row.id}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {row.name}
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
                        {row.length}
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
                  <TableRow align="right">
                    <TablePagination
                      rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { label: "All", value: -1 },
                      ]}
                      colSpan={4}
                      count={mockDataRoute.length}
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
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            m="40px 0 0 0"
            height="73.5vh"
            p="15px"
            className="glassmorphism"
            gap="20px"
            gridColumn="span 4"
            gridRow="span 2"
            sx={{
              position: "relative",
              display: "flex",
            }}
          >
            {/* <MapContainer /> */}
            {/* if (!isLoaded) <div>Loading...</div> */}
            {/* {!isLoaded ? <Typography>Loading...</Typography> : } */}
            {/* <MapContainer google={this.state.google} /> */}
            <MapContainer
              style={{ position: "absolute", top: 0, height: "100%" }}
            />
            {/* 
            <Button variant="contained" onClick={handleClick}>
              Show Route
            </Button> */}
            {/* {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{
                  polylineOptions: {
                    strokeColor: "#000",
                    strokeOpacity: 0.8,
                    strokeWeight: 5,
                  },
                }}
              />
            )} */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

// const RouteMap = () => {
//   const { isLoaded } = useLoadScript({
//     id: "google-map-script",

//   });

//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Map />
//     </div>
//   );
// };

export default RouteMap;
