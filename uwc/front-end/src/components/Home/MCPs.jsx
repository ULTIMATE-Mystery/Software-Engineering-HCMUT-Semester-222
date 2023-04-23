import {React} from 'react'
import { Typography, Box, Button, useTheme } from '@mui/material'
import MCPsProgressBar from '../Chart/LinearProgress'
import { tokens } from "../../theme";

const handleVehicleClick = () => {

};

const MCPsGeneral = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box
            className="glassmorphism"
            gap="20px"
            gridColumn="span 4"
            gridRow="span 2"
            p="15px"
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch'
            }}
        >

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography color='white' fontSize={18} justifyContent='flex-start' sx={{ flexGrow: 1, marginLeft: '25px' }}>
                MCPs
                </Typography>
                <Button 
                size="small"
                color="secondary"
                variant="outlined"
                onClick={handleVehicleClick}
                style={{
                    backgroundColor: colors.greenAccent[600],
                    marginRight: '30px',
                }}
                sx={{ flexShrink: 0 }}
                >
                <Typography color="white">
                    Xem chi tiết
                </Typography>
                </Button>
            
            <MCPsProgressBar progress={75} name={"Lê Văn Sỹ"} />
            <MCPsProgressBar progress={96} name={"Nguyễn Đức Thọ"} />
            <MCPsProgressBar progress={20} name={"Lý Thường Kiệt"} />  
            </Box>
        </Box>
    )
}

export default MCPsGeneral;