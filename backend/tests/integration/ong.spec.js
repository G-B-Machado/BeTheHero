const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/conenection');
describe('ONG', ()=> {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "ONG7",
            email: "contato@teste.com",
            whatsapp: "47111999000",
            city: "São José",
            uf: "SC" 
        });
        console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveLength(8);
    });
})