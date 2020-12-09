import request from 'supertest';

import './types';

it('should return 200 with valid email and password', async () => {
    await request(global.app)
        .post('/validation/post')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(200);
});

it('should return 400 with missing input', async () => {
    await request(global.app)
        .post('/validation/post')
        .expect(400);
});

it('should return 400 with an invalid email', async () => {
    await request(global.app)
        .post('/validation/post')
        .send({
            email: 'invalid-email-string',
            password: 'password'
        })
        .expect(400);
});

it('should return 400 with an invalid password', async () => {
    await request(global.app)
        .post('/validation/post')
        .send({
            email: 'test@test.com',
            password: 'i'
        })
        .expect(400);
});
