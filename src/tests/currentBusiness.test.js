const currentBusiness = require('../business/currencyBusiness');

describe('Currency Business Rules', () => {
    describe("Business answer", () => {
        it('should return data', async () => {
            const value = "2"; 
            const response = await currentBusiness.findOne(value);
            const aux = Array.isArray(response);
            expect(aux).toBe(true);
        });

        it('should return message insert integer', async () => {
            const value = "oi";
            const response = await currentBusiness.findOne(value);

            const objectExpect = {"message": "Insert values integers"};
            expect(response).toMatchObject(objectExpect);
        });
        
        it('should return value convert to point', async () => {
            const value = "2,3";
            const response = await currentBusiness.findOne(value);

            expect(response[0].value).not.toBeNaN();
            // expect(response[0].value).toMatch('/./');
        });
      });
});