const sinon = require('sinon');
const Utils = require('./utils');
const {expect} = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToAPI', () => {
    it('sendPaymentRequestToAPI', () => {
        const bigBrother = sinon.spy(Utils);

        sendPaymentRequestToApi(100, 20);
        expect(bigBrother.calledWith('SUM', 100, 20)).to.be.true;
        expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
        bigBrother.calculateNumber.restore();
    });
});