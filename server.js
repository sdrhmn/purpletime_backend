const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ 
    message: 'PurpleTime API Server',
    status: 'Running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// API routes
app.get('/api', (req, res) => {
  res.json({
    message: 'PurpleTime API',
    endpoints: {
      auth: '/api/auth',
      user: '/api/user',
      payment: '/api/payment',
      health: '/health'
    }
  });
});

// Placeholder auth routes
app.post('/api/auth/register', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Registration endpoint - Coming soon!' 
  });
});

app.post('/api/auth/login', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Login endpoint - Coming soon!' 
  });
});

// Placeholder user routes
app.get('/api/user/profile', (req, res) => {
  res.json({ 
    success: true, 
    message: 'User profile endpoint - Coming soon!' 
  });
});

// Placeholder payment routes
app.post('/api/payment/create-order', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Payment order creation - Coming soon!' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 PurpleTime API Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`🌐 API base: http://localhost:${PORT}/api`);
});
