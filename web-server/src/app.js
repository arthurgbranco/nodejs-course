const path = require('path')
const express = require('express')

const app = express()
const port = 80;

// console.log(__dirname);
// console.log(__filename);

const publicDirPath = path.join(__dirname, '../public');
app.use(express.static(publicDirPath))

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})

app.get('/weather', (req, res)=> {
    res.send({
        location: 'Belo Horizonte',
        forecast: 'Sunny'
    })
})
