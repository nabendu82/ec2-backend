const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello NodeJS'
    })
})

app.listen(port, () => console.log(`Server is up on port ${port}`))