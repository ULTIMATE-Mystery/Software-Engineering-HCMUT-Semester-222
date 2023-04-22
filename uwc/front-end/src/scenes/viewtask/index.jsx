import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { DataTaskView} from "../../data/DataTask";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const ViewTask = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Số thứ tự", flex: 0.5 },
    { field: "registerId", headerName: "Mã đăng ký" },
    {
      field: "name",
      headerName: "Tên nhân viên",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "worker",
      headerName: "Loại nhân viên",
    //   type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "vehicle",
      headerName: "Phương tiện",
      flex: 1,
    },
    {
      field: "task",
      headerName: "Nhiệm vụ",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      flex: 1,
    },
    {
        field: "note",
        headerName: "Ghi chú",
        flex: 1,
      },

  ];

  return (
    <Box m="20px">
      <Header
        title="DANH SÁCH NHIỆM VỤ"
        subtitle="Chi tiết danh sách từng nhiệm vụ"
      />
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
            color: `${colors.greenAccent[200]} !important`,
          

          },
        }}
      >
        <DataGrid
          rows={DataTaskView}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ViewTask;
