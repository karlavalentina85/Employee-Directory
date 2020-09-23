const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
//const cors = require('cors')

const db = require('./db')
const employeeRouter = require('./routes/employee-router')

const app = express()
const PORT = process.env.PORT || 3001

const buildPath = path.join(__dirname, '..', 'build');
  
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cors())
app.use(bodyParser.json())


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


/*app.get('/', (req, res) => {
    res.send('Employee API ap!')
})
*/

app.use('/api', employeeRouter)
app.use(express.static(buildPath));
app.use('*',  (req, res)=> {
 res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
