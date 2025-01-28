const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// In-memory data store
let items = [];

// Middleware
app.use(bodyParser.json());

// Create a new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: 'Name and description are required' });
  }

  const newItem = {
    id: items.length + 1,
    name,
    description,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// Get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// Get an item by ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(item => item.id === id);

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  res.json(item);
});

// Update an item by ID
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;

  const item = items.find(item => item.id === id);

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  if (name) item.name = name;
  if (description) item.description = description;

  res.json(item);
});

// Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  items.splice(index, 1);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
