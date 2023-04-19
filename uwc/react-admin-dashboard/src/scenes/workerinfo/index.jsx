import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataWorkerInfo } from "../../data/mockData";
import Header from "../../components/Header";
import { Button, useTheme} from "@mui/material";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { MdArrowBack } from 'react-icons/md';
import PersonalInfo from '../../components/Worker/workerDetail';
import WorkerEdit from '../../components/Worker/workerEdit';

const WorkerInfo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [detailInfor, setDetailInfor] = useState(false); // useState for worker infor detail
  const [selectedRowData, setSelectedRowData] = useState(null);

  // get detail infor on button click
  const handleDetailClick = (params, rowId) => {
    // find the row data corresponding to the row id

    const rowData = mockDataWorkerInfo.find((row) => row.id === rowId);
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
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5, editable: true, },
    {
      field: "name",
      headerName: "Họ và tên",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Loại hình nhân viên",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Tình trạng",
      cellClassName: (params) =>
      params.value === 'Đang hoạt động' ? "green--cell" : params.value === 'Không hoạt động' ? "red--cell" : '',
      flex: 1,
    },
    {
      renderCell: ({ params, row }) => {
        return (
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => {
              handleDetailClick(params, row.id);
            }}
          >
            Chi tiết
          </Button>
        );
      }
    },    
  ];

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
      <DataGrid
        IsReadOnly="False"
        rows={mockDataWorkerInfo}
        columns={columns}
        getRowId={(row) => row.id}
        components={{ Toolbar: GridToolbar }}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        className="my-table"
      />
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
    </Box>
  );
};

export default WorkerInfo;