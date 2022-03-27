import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'test' });
})

app.listen(port, () => {
    console.log(`back end up and running at ${port}`);
})