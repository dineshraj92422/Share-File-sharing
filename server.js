
const express = require('express');
const app = express();

const path = require('path')

//Template Engine

app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs' )



const connectDB = require('./config/db')();

app.use(express.static('public'));
app.use(express.json())

//Routes
 
//POST
app.use('/api/files',require('./routes/files.route'));


//GET
app.use('/files',require('./routes/show.route')
);

//GET
app.use('/files/downloads',require('./routes/download.route'))



const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('Listening on port ' + PORT);
    
})