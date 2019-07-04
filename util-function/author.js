const db = require('../database/db');

async function getauthor()
{
    const sql = 'select * from author';
    authors = await db.query(sql);
    return authors[0];
}
async function getauthorbyid(id)
{
    const sql = 'select * from author where id = ?';
    author = await db.query(sql,[id]);
    return author[0];
}
async function addauthor(author)
{
    const sql = 'INSERT INTO author (id, authorname, img) VALUES (?, ?, ?)';
    const result = await db.query(sql,[author.id, author.name, author.img]);
    return result[0];
}

async function updateauthor(author)
{
    const sql = 'update author set img = ? where authorname = ?';
    const result = await db.query(sql,[author.img, author.name]);
    return result[0];
}

async function deleteauthor(author)
{
    const sql = 'delete from author where authorname = ?';
    const result = await db.query(sql,[author.name]);
    return result[0];
}

module.exports = {
    deleteauthor,
    updateauthor,
    addauthor,
    getauthor,
    getauthorbyid 
}
