const mongoose = require('mongoose');
require("../db/connection");

// Book Schema
const bookSchema = mongoose.Schema({
	title:{
		type: String,
	},
	genre:{
		type: String,
	},
	description:{
		type: String
	},
	author:{
		type: String,
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Book =  mongoose.model('books', bookSchema);

module.exports=Book;

// Get Books
module.exports.getBooks =async (req, res) => {
	try{
        const bookData = await Book.find();
        res.status(200).send(bookData);
    
      }catch(e){
          res.status(400).send(e);
      }
}


// Get Book
module.exports.getBookById = (id, callback) => {
	Book.findById(id, callback);
}

// Add Book
module.exports.addBook = (book, callback) => {
	Book.create(book, callback);
}

// Update Book
module.exports.updateBook = (id, book, options, callback) => {
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}
