import request from 'supertest';

import './types';

it('should body.first been set to false', async () => {
    const res = await request(global.app)
        .get('/middleware/get');
    expect(res.body).toEqual(false);
});
