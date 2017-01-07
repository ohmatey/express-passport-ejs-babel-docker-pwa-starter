process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Users = require('../source/models/users');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../source/startApp');
let should = chai.should();
//Our parent block
describe('Books', () => {

    describe('/GET book', () => {
        it('it should GET all the books', (done) => {
            "1".should.be.sql(1);
            done()
        });
    });

});