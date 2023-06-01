const express=require('express');
const sequelize = require('./config/database');
const bodyParser = require('body-parser');
const adminRoutes=require('./routes/admin')
const Product = require('./models/product');
const User = require('./models/user');

const cors=require('cors')

const app=express();
app.use(cors())
app.use(bodyParser.json());

app.get('/',(req,res,next)=>{
    res.send('server listening on port 5000')
})

app.use('/expenses',adminRoutes)

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

sequelize.sync({force:true})
.then(result=>{
    console.log(result)
    app.listen(5000)
})
.catch(error=>{
    console.log(error)
})

