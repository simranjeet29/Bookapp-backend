/* eslint-disable indent */
const books = require('./../util-function/books.js');
const { exec } = require('child_process');
const { expect } = require('chai');

describe('testing books.js', async () => {
    it('getbook function', async () => {
        await exec('npm run createdb');
        console.log(process.env.database);
        const result = await books.getbook();
        const expected = [{ "id": 1, "name": "Go Set a Watchman", "authorid": 1, "img": "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg", "des": " to make a type specimen book." },
        { "id": 2, "name": "Alchemist", "authorid": 1, "img": "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg", "des": " to make a type specimen book." },
        { "id": 3, "name": "Power of Subconcsious Mind", "authorid": 2, "img": "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg", "des": " to make a type specimen book." },
        { "id": 4, "name": "To Kill Mockingbird", "authorid": 1, "img": "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg", "des": " to make a type specimen book." }];
        expect(result).to.deep.equal(expected);
    });
    it('getbookbyid function', async () => {
        await exec('npm run creatdb')
        const result = await books.getbookbyid(1);
        const expected = [{ "id": 1, "name": "Go Set a Watchman", "authorid": 1, "img": "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg", "des": " to make a type specimen book." }];
        expect(result).to.deep.equal(expected);
    });
    it('addbook function', async () => {
        await exec('npm run createdb');
        const data = {
            "id": 5,
            "name": "mountblue",
            "author": 2,
            "img": 'xyz.jpg',
            "des": 'to make a type specimen book'
        };
        const result = await books.addbook(data);
        console.log(result);
        expect(result.affectedRows).equal(1);
    });
    it('deletebook function', async () => {
        await exec('npm run createdb');
        const data ={
            name: 'Alchemist'
        } 
        const result = await books.deletebook(data);
        expect(result.affectedRows).equal(1);
    });
    it('updatebook function', async () => {
        await exec('npm run createdb');
        const data ={
            img: 'xyz.txt',
            name: 'Power of Subconcsious Mind'
        } 
        const result = await books.updatebook(data);
        expect(result.affectedRows).equal(1);
    });
});
