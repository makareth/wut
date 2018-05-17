'use strict';
 
const chai = require('chai');  
const expect = require('chai').expect;
 
chai.use(require('chai-http'));
 
const app = require('../server.js');
 
describe('API endpoint /animals', function() {  
  this.timeout(1000);
 
  before(function() {
 
  });
 
  after(function() {
 
  });
 
  // Check getting all animals
  it('Should return a list', function() {
    return chai.request(app)
      .get('/animals')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
      });
  });
 
  // Check HTTP 404
  it('Should return Not Found', function() {
    return chai.request(app)
      .get('/__SOME_INVALID_PATH__')
      .then(function(res) {
        throw new Error('[ERR] Unexpected path existence');
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
      });
  });
 
  // Check adding a new full animal
  it('should add new animal', function() {
    return chai.request(app)
      .post('/animals')
      .send({
          chip_number: '4521460001123',
          specie: 'chien',
          breed: 'fox-terrier',
          height_cm: 75,
          weight_g: 15,
          opted_at: '2017-01-01T10:15:20Z'
      })
      .then(function(res) {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body).to.include({
                  chip_number: '4521460001123',
                  specie: 'chien',
                  breed: 'fox-terrier',
                  height_cm: 75,
                  weight_g: 10065,
                  opted_at: '2017-01-01T10:15:20Z'
        });
      });
  });
     
  // Check adding a new full animal duplicate by chip number fails
  it('should add new animal', function() {
    return chai.request(app)
      .post('/animals')
      .send({
          chip_number: '4521460001123',
          specie: 'chat',
          breed: 'degouttiere',
          height_cm: 30,
          weight_g: 2500,
          opted_at: '2017-01-01T10:15:20Z'
      })
      .then(function(res) {
        expect(res).to.have.status(409);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body).to.include({
                  chip_number: '4521460001123',
                  specie: 'chien',
                  breed: 'fox-terrier',
                  height_cm: 75,
                  weight_g: 15,
                  opted_at: '2017-01-01T10:15:20Z'
        });
      });
  });
 
  // Check adding a new animal (with no date), check date defaulting
  it('should add new animal', function() {
    return chai.request(app)
      .post('/animals')
      .send({
          chip_number: '4521460001123',
          specie: 'chien',
          breed: 'fox-terrier',
          height_cm: 75,
          weight_g: 15
      })
      .then(function(res) {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.opted_at).to.be.an('Date');
      });
  });

  // Check adding a new animal (with no date) fails HTTP 400 if no number
  it('should add new animal', function() {
    return chai.request(app)
      .post('/animals')
      .send({
          specie: 'chien',
          breed: 'fox-terrier',
          height_cm: 75,
          weight_g: 15,
          opted_at: '2017-01-01T10:15:20Z'
      })
      .then(function(res) {
        expect(res).to.have.status(400);
      });
  });
    
  // Check At this point we have only one 2 animals
  it('Should return a list', function() {
    return chai.request(app)
      .get('/animals')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(2)
      });
  });