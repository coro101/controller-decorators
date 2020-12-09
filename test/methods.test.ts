import request from 'supertest';

import './types';

it('should return 200 on get request', async () => {
    await request(global.app)
        .get('/method/get')
        .expect(200);
});

it('should return 201 on post request', async () => {
    await request(global.app)
        .post('/method/post')
        .send({})
        .expect(201);
});

it('should return 200 on put request', async () => {
    await request(global.app)
        .put('/method/put')
        .send({})
        .expect(200);
});

it('should return 200 on delete request', async () => {
    await request(global.app)
        .delete('/method/delete')
        .send({})
        .expect(200);
});

it('should return 200 on patch request', async () => {
    await request(global.app)
        .patch('/method/patch')
        .send({})
        .expect(200);
});
