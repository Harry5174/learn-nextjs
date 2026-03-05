'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const monthlyData = [
  { month: 'Jan', orders: 24, sales: 5000, orderPerPiece: 208 },
  { month: 'Feb', orders: 30, sales: 6500, orderPerPiece: 216 },
  { month: 'Mar', orders: 45, sales: 11000, orderPerPiece: 244 },
  { month: 'Apr', orders: 38, sales: 9000, orderPerPiece: 237 },
  { month: 'May', orders: 60, sales: 15000, orderPerPiece: 250 },
  { month: 'Jun', orders: 75, sales: 20000, orderPerPiece: 267 },
  { month: 'Jul', orders: 50, sales: 12500, orderPerPiece: 250 },
];

const yearlyData = [
  { year: '2021', revenue: 150000, orders: 300, salesPerOrder: 500 },
  { year: '2022', revenue: 220000, orders: 350, salesPerOrder: 600 },
  { year: '2023', revenue: 300000, orders: 400, salesPerOrder: 750 },
  { year: '2024', revenue: 380000, orders: 500, salesPerOrder: 800 },
];

const pieData = [
  { name: 'Kameez Shalwar', value: 400 },
  { name: 'Pants & Shirt', value: 300 },
  { name: 'Kurta Pajama', value: 300 },
  { name: 'Waistcoat', value: 200 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const AnalyticsReportPage: React.FC = () => {
  return (
    <Box
      sx={{
        ml: { xs: 0, sm: '33.33%', md: '25%' },
        px: { xs: 2, sm: 4 },
        pt: 4,
        pb: 6,
        minHeight: '100vh',
        backgroundColor: '#f9fafb',
        transition: 'margin 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
          Analytics & Reports
        </Typography>

        {/* Monthly Analytics Section */}
        <Typography variant="h5" fontWeight="bold" color="secondary" gutterBottom>
          Monthly Analytics
        </Typography>

        <Grid container spacing={4}>
          {['orders', 'sales', 'orderPerPiece'].map((dataKey, index) => (
            <Grid item xs={12} sm={6} md={4} key={dataKey}>
              <Paper
                elevation={4}
                sx={{
                  p: 10,
                  borderRadius: 3,
                  height: 400,
                  backgroundColor: '#ffffff',
                  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.08)',
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Total {dataKey.charAt(0).toUpperCase() + dataKey.slice(1)}
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {monthlyData.reduce((total, data) => total + data[dataKey], 0)}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Monthly {dataKey.charAt(0).toUpperCase() + dataKey.slice(1)}
                </Typography>
                <ResponsiveContainer width="100%" height="85%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={dataKey} fill={index === 0 ? '#1976d2' : index === 1 ? '#82ca9d' : '#ffc658'} radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Yearly Analytics Section */}
        <Typography variant="h5" fontWeight="bold" color="secondary" gutterBottom>
          Yearly Analytics
        </Typography>

        <Grid container spacing={4}>
          {['revenue', 'orders', 'salesPerOrder'].map((dataKey, index) => (
            <Grid item xs={12} sm={6} md={4} key={dataKey}>
              <Paper
                elevation={4}
                sx={{
                  p: 10,
                  borderRadius: 3,
                  height: 400,
                  backgroundColor: '#ffffff',
                  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.08)',
                }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Total {dataKey.charAt(0).toUpperCase() + dataKey.slice(1)}
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {yearlyData.reduce((total, data) => total + data[dataKey], 0)}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Yearly {dataKey.charAt(0).toUpperCase() + dataKey.slice(1)} Trend
                </Typography>
                <ResponsiveContainer width="100%" height="85%">
                  <LineChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={dataKey} stroke={index === 0 ? '#8884d8' : index === 1 ? '#82ca9d' : '#ffc658'} strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Product Distribution Pie Chart */}
        <Typography variant="h5" fontWeight="bold" color="secondary" gutterBottom>
          Product Distribution
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={4}
              sx={{
                p: 2,
                borderRadius: 3,
                height: 400,
                backgroundColor: '#ffffff',
                boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.08)',
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Product Type Distribution
              </Typography>
              <ResponsiveContainer width="100%" height="85%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AnalyticsReportPage;
