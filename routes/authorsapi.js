const router = require('express').Router();
const bodyparser = require('body-parser');
const authorutil = require('./../util-function/author');


router.use(bodyparser.urlencoded({ encoded: true }));
router.use(bodyparser.json());

router.get('/author', async (request, response) => {

    const authors = await authorutil.getauthor();
    return response.json(authors);
});
router.get('/author/:id', async (request,response) =>{
    const authors = await authorutil.getauthorbyid(request.params.id*1);
    return response.json(authors);
})
router.post('/author', async (request, response) => {
    console.log(request.body);
    await authorutil.addauthor(request.body);  
    return response.json('author added to database');
});
router.put('/author', async (request, response) => {
    await authorutil.updateauthor(request.body);
    return response.json(`${request.body.name} book updated`);
});
router.delete('/author', async (request, response) => {
    await authorutil.deleteauthor(request.body);
    return response.json(`${request.body.name} is removed`);
});


module.exports = router;

