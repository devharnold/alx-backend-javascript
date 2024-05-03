const request = require('request');
const chai = require('chai');

describe('API test', () => {
    const API_URL = 'http://localhost:7865';

    it('GET / returns the appropriate response', (done) => {
        request.get(`${API_URL}/`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });

    it('GET /cart/:id returns the correct response valid :id', (done) => {
        request.get(`${API_URL}/cart/12`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Payment methods for cart 12');
            done();
        });
    });
    
    it('GET /cart/:id returns 404 response for negative values in :id', (done) => {
        request.get(`${API_URL}/cart/-1`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('GET /cart/:id returns 404 response for non-integer values in :id', (done) => {
        request.get(`${API_URL}/cart/12a`, (_err, res, body) => {
            expect(res.statusCode).to.be.equal(404);
            done();
        });
    });

    it('GET /available_payments returns valid response', (done) => {
        request.get(`${API_URL}/available_payments`, (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(JSON.parse(body))
            .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
          done();
        });
    });

    it('POST /login returns valid response', (done) => {
        request.post(`${API_URL}/login`, {json: {userName: 'Earl'}}, (_err, res, body) => {
          expect(res.statusCode).to.be.equal(200);
          expect(body).to.be.equal('Welcome Earl');
          done();
        });
    });
});