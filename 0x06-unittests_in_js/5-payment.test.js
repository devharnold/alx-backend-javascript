const sinon = require('sinon');
const {expect} = require('chai');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let bigBrother;

    beforeEach(() => {
        if(!bigBrother) {
            bigBrother = sinon.spy(console);
        }
    });
    afterEach(() => {
        bigBrother.log.resetHistory();
    });

    it('sendPaymentRequestToApi(100, 20) to log the total is 120 in the console', () => {
        sendPaymentRequestToAPI(100, 20);
        expect(bigBrother.calledWith('The total is: 120')).to.be.true;
        expect(bigBrother.log.callCount).to.be.true;
    });
    it('sendPaymentRequestToApi(50, 50) to log 100 in the console', () => {
        sendPaymentRequestToAPI(50, 50);
        expect(bigBrother.calledWith('The total is: 100')).to.be.true;
        expect(bigBrother.log.callCount).to.be.true;
    });
})