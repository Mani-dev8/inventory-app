const express = require('express');
const user = require('./routes/users')
const product = require('./routes/products')
const category = require('./routes/categories')
const mongoDb = require('./config/db')
const app = express();
app.use(express.json())
mongoDb()
const port = 5000

app.use('/api/v1/', user)
app.use('/api/v1/', product)
app.use('/api/v1/', category)
app.get('/',(req,res)=>{
    res.send('working !')
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})