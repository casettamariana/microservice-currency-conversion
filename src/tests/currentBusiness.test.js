const currentBusiness = require('../business/currencyBusiness');

describe('Currency Business Rules', () => {
    describe("Business answer", () => {
        it('should return data', async () => {
            const value = 2; 
            const response = await currentBusiness.findOne(value);
            const aux = Array.isArray(response);
            expect(aux).toBe(true);
        });
      });
});