const mongoose  = require('mongoose');
const mongoURI ='mongodb+srv://MERNgofood:gofoodpassword@cluster0.d4bgsz0.mongodb.net/?retryWrites=true&w=majority'

const mongoDB =() =>{
    mongoose.connect(mongoURI, ()=>{
        console.log('Connected');
    });
}


module.exports= mongoDB;
