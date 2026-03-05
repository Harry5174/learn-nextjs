'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  useTheme,
  Grid,
  Paper,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

interface MeasurementSet {
  id: string;
  values: {
    [category: string]: {
      [key: string]: string;
    };
  };
}

const measurementFields = {
  Pants: ['Waist', 'Length', 'Hip', 'Thigh'],
  Shirts: ['Chest', 'Shoulder', 'Sleeve Length', 'Shirt Length'],
  Kameez: ['Chest', 'Shoulder', 'Kameez Length', 'Sleeve Length'],
  Shalwar: ['Waist', 'Length'],
  Pajamas: ['Waist', 'Length'],
};

const TakeMeasurement: React.FC = () => {
  const theme = useTheme();
  const [formValues, setFormValues] = useState<{
    [category: string]: { [field: string]: string };
  }>({});
  const [submittedData, setSubmittedData] = useState<MeasurementSet[]>([]);

  const handleChange = (category: string, field: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [category]: {
        ...(prev[category] || {}),
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    const id = uuidv4();
    const submission: MeasurementSet = {
      id,
      values: formValues,
    };
    setSubmittedData((prev) => [...prev, submission]);
    setFormValues({});
  };

  const handleDelete = (id: string) => {
    setSubmittedData((prev) => prev.filter((entry) => entry.id !== id));
  };

  const handleProceed = (id: string) => {
    alert(`Proceeding with measurements of ID: ${id}`);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          borderRadius: 2,
          boxShadow: theme.shadows[3],
          p: 3,
        }}
      >
        <Typography variant="h5" gutterBottom>Take All Measurements</Typography>
        {Object.entries(measurementFields).map(([category, fields]) => (
          <Box key={category} sx={{ mt: 4 }}>
            <Typography variant="h6">{category}</Typography>
            <Grid container spacing={2} mt={1}>
              {fields.map((field) => (
                <Grid item xs={12} sm={6} key={field}>
                  <TextField
                    fullWidth
                    label={field}
                    value={formValues[category]?.[field] || ''}
                    onChange={(e) => handleChange(category, field, e.target.value)}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={handleSubmit}
        >
          Submit All Measurements
        </Button>
      </Box>

      {/* Submitted Entries */}
      <Box mt={6}>
        <Typography variant="h5" gutterBottom>Submitted Measurement Sets</Typography>
        <Grid container spacing={2}>
          {submittedData.map((data) => (
            <Grid item xs={12} key={data.id}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="subtitle1">
                  <strong>ID:</strong> {data.id}
                </Typography>
                {Object.entries(data.values).map(([category, fields]) => (
                  <Box key={category} mt={2}>
                    <Typography variant="subtitle2"><strong>{category}</strong></Typography>
                    <ul style={{ marginTop: 4 }}>
                      {Object.entries(fields).map(([key, value]) => (
                        <li key={key}><strong>{key}:</strong> {value}</li>
                      ))}
                    </ul>
                  </Box>
                ))}
                <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                  <Button variant="contained" color="success" onClick={() => handleProceed(data.id)}>Proceed</Button>
                  <Button variant="outlined" color="error" onClick={() => handleDelete(data.id)}>Delete</Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TakeMeasurement;
