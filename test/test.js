var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect();

var server = "http://127.0.0.1:8000";
chai.use(chaiHttp);

before( function() {
	//Before hook is requiered to verify user authorization and redirect is working
	//For this assignment I will generat the access token before running 'npm test'
})

describe('/GET telaviv tags', () => {
  it('it should GET all the telaviv tag list', (done) => {
    chai.request(server)
        .get('/searchTag')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.body.should.have.property('data');
            res.body.body.data.should.be.a('array');
            res.body.body.data[0].should.have.property('name');
            res.body.body.data[0].should.have.property('media_count');
          	done();
        });
    });

  it('it should fail GET all the telaviv tag list - wrong path', (done) => {
    chai.request(server)
        .get('/searchTaggg')
        .end((err, res) => {
            res.should.have.status(404);
          	done();
        });
    });

});