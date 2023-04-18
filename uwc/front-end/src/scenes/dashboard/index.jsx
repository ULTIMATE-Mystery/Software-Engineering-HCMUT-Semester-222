import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Grid,
  TextField,
} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
// import '../../components/Worker/./glassmorphism.css';
import "./glassmorphism.css";
// import MyButton from "../../components/Chat/MyButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ProgressBar from "react-animated-progress-bar";
import { MCPSList, CustomColor } from "../MCPs/index";

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
              position: "relative",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#2579f2",
                color: "primary",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px",
              }}
              variant="outlined"
              onClick={() => {
                // handleApplyChange();
              }}
            >
              Xem chi tiết
            </Button>
            {/* Other content goes here */}
            <Card
              style={{
                height: "560px",
                borderRadius: "1rem",
                boxShadow: "5px 5px 15px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <CustomColor>
                  <Typography gutterBottom variant="h5">
                    <strong>MCPs</strong>
                  </Typography>
                </CustomColor>
                {MCPSList.map((info, index) => (
                  // <div
                  //   key={index}
                  //   style={selected === index ? active : inactive}
                  //   onClick={() => {
                  //     setChosenMCP(MCPSList[index]);
                  //     handleClick(index);
                  //   }}
                  // >
                  <div style={{ marginLeft: "12px", paddingTop: "10px" }}>
                    <Typography
                      variant="body1"
                      component="div"
                      style={{ marginBottom: "-15px", marginLeft: "1px" }}
                    >
                      <strong>{info.name}</strong>
                    </Typography>
                    <ProgressBar
                      width="auto"
                      height="9px"
                      rect
                      fontColor={info.color_bar}
                      percentage={info.percentage}
                      rectPadding="0px"
                      rectBorderRadius="20px"
                      trackPathColor="transparent"
                      bgColor="#D94949"
                      trackBorderColor="#b6b6b6"
                      defColor={{
                        fair: "#97E075",
                        good: "#FFE76B",
                        excellent: "#D94949",
                        poor: "#97E075",
                      }}
                    ></ProgressBar>
                  </div>
                  // </div>
                ))}
              </CardContent>
            </Card>
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
              position: "relative",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#2579f2",
                color: "primary",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px",
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
              position: "relative",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#2579f2",
                color: "primary",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px",
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
              position: "relative",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#2579f2",
                color: "primary",
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px",
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
