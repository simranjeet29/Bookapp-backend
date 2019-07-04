const db = require('../database/db');

async function getbook()
{
    const sql = 'select * from books';
    books = await db.query(sql);
    return books[0];
}
async function getbookbyid(id)
{
    const sql = 'select * from books where id = ?';
    book = await db.query(sql,[id]);
    return book[0];
}
async function addbook(book)
{
    console.log(book);
    const sql = 'INSERT INTO books (id, name, authorid, img, des) VALUES (?, ?, ?, ?, ?)';
    const result = await db.query(sql,[book.id, book.name, book.author, book.img, book.des]);
    return result[0];
}

async function updatebook(book)
{
    const sql = 'update books set img = ? where name = ?';
    const result = await db.query(sql,[book.img, book.name]);
    console.log(result[0]);
    return result[0];
}

async function deletebook(book)
{
    const sql = 'delete from books where name = ?';
    const result = await db.query(sql,[book.name]);
    return result[0];
}

module.exports = {
    deletebook,
    updatebook,
    addbook,
    getbook,
    getbookbyid
}
