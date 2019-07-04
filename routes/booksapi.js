const router = require('express').Router();
const bodyparser = require('body-parser');
const bookutil = require('./../util-function/books');

router.use(bodyparser.urlencoded({ encoded: true }));
router.use(bodyparser.json());
router.get('/books', async (request, response) => {
    const books = await bookutil.getbook(request);
    return response.json(books);
});
router.get('/books/:id', async (request,response) =>{
    const book = await bookutil.getbookbyid(request.params.id*1);
    return response.json(book);
})
router.post('/books', async (request, response) => {
    await bookutil.addbook(request.body);
    return response.json('book added to database');
});
router.put('/books', async (request, response) => {
    await bookutil.updatebook(request.body);
    return response.json(`${request.body.name} book updated`);
});
router.delete('/books', async (request, response) => {
    await bookutil.deletebook(request.body);
    return response.json(`${request.body.name} book is removed`);
});


module.exports = router;
