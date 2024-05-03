const { expect } = require('chai');
const getPaymentTokenFromApI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('getPaymentTokenFromAPI(success), where success == true', (done) => {
        getPaymentTokenFromApI(true)
        .then((res) => {
            expect(res).to.deep.equal({ data: 'Successful response from the API' });
            done();
        });
    });
});