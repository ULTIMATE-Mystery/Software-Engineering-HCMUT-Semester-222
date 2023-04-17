import { Button, Box, Typography, useTheme, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataRoute } from "../../data/mockData";
import "./glassmorphism.css";

// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import MapContainer from "./map";
import handleShowRoute from "./map";
import { useState } from "react";
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

const RouteMap = () => {
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

  // const { isLoaded } = useLoadScript({
  //   id: "google-map-script",
  //   googleMapsApiKey: "AIzaSyDpW3xHd5g_JDekesqhms8sIo1ezctkC0g",
  //   // libraries: ["places"],
  // });
  return (
    <Box m="20px">
      <Header title="Tuyến đường" subtitle="Danh sách tuyến đường" />
      <Grid container>
        <Grid item xs={4}>
          <Box
            m="40px 0 0 0"
            height="75vh"
            // className="glassmorphism"
            // gap="20px"
            // gridColumn="span 4"
            // gridRow="span 2"
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
            }}
          >
            <DataGrid
              checkboxSelection
              rows={mockDataRoute}
              columns={columns}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            m="40px 0 0 0"
            height="75vh"
            p="15px"
            // className="glassmorphism"
            // gap="20px"
            // gridColumn="span 4"
            // gridRow="span 2"
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
