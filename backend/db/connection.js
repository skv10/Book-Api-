const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/book-store",{
    useNewUrlParser:true
}).then(()=>{
    console.log('connection is successful')
}).catch((error)=>{
    console.log(error);
})