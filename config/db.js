require('dotenv').config();
const mongoose = require('mongoose')


module.exports = ()=>{
   
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(()=>{
        console.log('Database connected..')
    }).catch((err) => {
        console.log(err)
    })
   
};

