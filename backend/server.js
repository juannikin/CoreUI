const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Mock data (replace with database in production)
let employees = [
  { id: 1, name: 'Yiorgos Avraamu', country: 'US', performance: 50, lastLogin: '10 sec ago' },
  { id: 2, name: 'Avram Tarasios', country: 'BR', performance: 10, lastLogin: '5 minutes ago' },
  // ... add more employees
];

// GET all employees
app.get('/api/employees', (req, res) => {
  res.json(employees);
});

// GET employee by id
app.get('/api/employees/:id', (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send('Employee not found');
  res.json(employee);
});

// POST new employee
app.post('/api/employees', (req, res) => {
  const employee = {
    id: employees.length + 1,
    name: req.body.name,
    country: req.body.country,
    performance: req.body.performance,
    lastLogin: 'Just now'
  };
  employees.push(employee);
  res.status(201).json(employee);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

