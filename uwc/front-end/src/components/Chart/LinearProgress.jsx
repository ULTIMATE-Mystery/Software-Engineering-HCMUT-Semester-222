import { LinearProgress, Typography } from '@mui/material';

const MCPsProgressBar = ({ name, progress }) => {
  let color;
  if (progress <= 25) {
    color = 'success';
  } else if (progress <= 75) {
    color = 'warning';
  } else {
    color = 'error';
  }

  return (
    <div style={{marginLeft: '25px'}}>
      <Typography marginBottom={0}>{name}</Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '95%' }}>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          color={color} 
          style={{ 
            flexGrow: 1, 
            marginRight: '10px', 
          }} 
        />
        <span>{progress}%</span>
      </div>
    </div>
  );
  
};

export default MCPsProgressBar;
