'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
} from '@mui/material';

interface ReadyProduct {
  id: string;
  customerName: string;
  productType: string;
  orderDate: string;
  deliveryDate: string;
  notes?: string;
}

const initialProducts: ReadyProduct[] = [
  {
    id: '1',
    customerName: 'Ahmed Khan',
    productType: 'Kameez Shalwar',
    orderDate: '2025-04-10',
    deliveryDate: '2025-04-20',
    notes: 'Add fancy buttons',
  },
  {
    id: '2',
    customerName: 'Sana Malik',
    productType: 'Pants & Shirt',
    orderDate: '2025-04-12',
    deliveryDate: '2025-04-22',
  },
  {
    id: '3',
    customerName: 'Ali Raza',
    productType: 'Shirt Only',
    orderDate: '2025-04-15',
    deliveryDate: '2025-04-25',
  },
];

const ReadyProducts: React.FC = () => {
  const [products, setProducts] = useState<ReadyProduct[]>(initialProducts);

  const handleReceived = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <Box
      sx={{
        ml: { xs: 0, sm: '33.33%', md: '25%' }, // Matches the sidebar width
        px: { xs: 2, sm: 4 },
        pt: 4,
        pb: 6,
        minHeight: '100vh',
        backgroundColor: '',
        transition: 'margin 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" fontWeight="bold" gutterBottom color="black">
          Ready Products
        </Typography>

        {products.length === 0 ? (
          <Typography variant="h6" color="black">
            No ready products available.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Paper
                  elevation={4}
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                    },
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight="bold" color="black">
                      {product.customerName}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Product:</strong> {product.productType}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Order:</strong> {product.orderDate}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Delivery:</strong> {product.deliveryDate}
                    </Typography>
                    {product.notes && (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        <strong>Notes:</strong> {product.notes}
                      </Typography>
                    )}
                  </Box>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleReceived(product.id)}
                    fullWidth
                    sx={{ mt: 3 }}
                  >
                    Received
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default ReadyProducts;
