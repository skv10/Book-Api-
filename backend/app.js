const express = require('express');
const app = express();
const bookRouter =require("./route/routeBook");
const Book =require("./models/book");

app.use(bookRouter);
app.use(express.json());

app.post('/addBook', (req, res) => {
	var book = req.body;
	console.log(req.body);
	Book.addBook(book, (err, book) => {
		if(err){
            res.status(400).send({Error:err,msg:"You need to check carefully there is an error"})
			throw err;
		}
		else{

			res.status(201).send({data:book,msg:"Data added Successfully"});
		}
	});
});



app.listen(8000,()=>{
 console.log(`server is running at :3000`);
});