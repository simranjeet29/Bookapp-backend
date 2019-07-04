/* eslint-disable indent */
const authors = require('./../util-function/author.js');
const { exec } = require('child_process');
const { expect } = require('chai');

describe('testing author.js', async () => {
    it('getauthor function', async () => {
        await exec('npm run createdb');
        console.log(process.env.database);
        const result = await authors.getauthor();
        const expected = [
            {
                "id":1, 'authorname': 'Harper Lee', 'img': 'https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg'
            },
            {
                "id":2, 'authorname': 'Joseph Murphy', 'img': 'https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg'
            }
        ]
        expect(result).to.deep.equal(expected);
    });
    it('getauthorbyid function', async () => {
        await exec('npm run creatdb')
        const result = await authors.getauthorbyid(1);
        const expected = [ {
            "id": 1,
            "authorname": "Harper Lee",
            "img": "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
        }];
        expect(result).to.deep.equal(expected);
    });
    it('addauhtor function', async () => {
        await exec('npm run createdb');
        const data = {
            "id": 4,
            "name": "simranjeet",
            "img": 'xyz.jpg',
        };
        const result = await authors.addauthor(data);
        console.log(result);
        expect(result.affectedRows).equal(1);
    });
    it('deleteauthor function', async () => {
        await exec('npm run createdb');
        const data ={
            name: 'Harper Lee'
        } 
        const result = await authors.deleteauthor(data);
        expect(result.affectedRows).equal(1);
    });
    it('updateauthor function', async () => {
        await exec('npm run createdb');
        const data ={
            img: 'xyz.txt',
            name: 'Joseph Murphy'
        } 
        const result = await authors.updateauthor(data);
        expect(result.affectedRows).equal(1);
    });
});
