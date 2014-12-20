var req = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello world', function(done) {
    req(app).get('/').expect('hello world', done);
  });
});
