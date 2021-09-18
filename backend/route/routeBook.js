const Book =require("../models/book");
const express = require("express");
const router = express.Router();


router.get('/books', (req, res) => {
	Book.getBooks(req,res);
});

router.get('/books/:_id', (req, res) => {
	Book.getBookById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

router.put('/books/:_id', (req, res) => {
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

router.delete("/books/:id",async (req,res)=>{

    try{
        const _id = req.params.id;
        const deletedBook = await  Book.findByIdAndDelete(req.params.id);
        console.log(deletedBook);
        if(!req.params.id){
            res.status(404).send({msg:"Failed to Delete"});
        }
        else{
   
            res.status(200).send({msg:"Book Data Deleted Successfully",data:deletedBook});
        }
    }catch(e){
        res.status(500).send(e);
    }
 });

module.exports=router;
