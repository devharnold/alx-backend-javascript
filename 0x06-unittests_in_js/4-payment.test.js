const sinon = require('sinon');
const Utils = require('./utils');
const {expect} = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should return 10', () => {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        
        const total = sendPaymentRequestToApi(100, 10);
        expect(total).to.equal(10);
        expect(stub.calledOnceWithExactly('SUM', 100, 10)).to.be.true;
        stub.restore();
    });
    });