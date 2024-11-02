// Sample data
let items = [];

// GET route to retrieve items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// POST route to add a new item
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});