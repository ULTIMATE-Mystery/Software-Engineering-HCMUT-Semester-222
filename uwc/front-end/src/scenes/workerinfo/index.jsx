import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataWorkerInfo } from "../../data/mockData";
import Header from "../../components/Header";
import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import React, { useState, useEffect} from "react";

// { useEffect, useState } 
const WorkerInfo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const useState = {}
  const handleDetailClick = (params, rowId) => {
    // find the row data corresponding to the row id
    const rowData = mockDataWorkerInfo.find((row) => row.id === rowId);
    console.log("Button clicked on row:", rowData);
  };

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
        title="Thông tin nhân viên"
        subtitle="Danh sách nhân viên"
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
          "& .green--cell": {
            color: colors.greenAccent[500],
          },
          "& .red--cell": {
            color: colors.redAccent[500],
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
          rows={mockDataWorkerInfo}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          pageSizeOptions={[5, 10, 25]}
          onCellClick = {handleDetailClick}
          
      /> */}
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
    </Box>
  );
};

export default WorkerInfo;
