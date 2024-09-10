import React from 'react';
import Card from '@mui/material/Card'; // Material-UI Card component for styling
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info'; // Optional: Information icon

const DiseaseResults = ({ results }) => {
  // Sample results structure
  const { diseaseName, severity, recommendations, imageUrl } = results;

  return (
    <div className="disease-results">
      <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Disease Detection Results
          </Typography>
          {imageUrl && (
            <img src={imageUrl} alt="Crop affected" className="result-image" />
          )}
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h6" component="div">
            Disease Name: {diseaseName || 'Not Detected'}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Severity: {severity || 'N/A'}
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h6" component="div">
            Recommendations
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {recommendations || 'No recommendations available'}
          </Typography>
        </CardContent>
        <CardContent>
          <IconButton color="primary">
            <InfoIcon />
          </IconButton>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiseaseResults;
