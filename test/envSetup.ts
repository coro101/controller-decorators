import express from 'express';

import { AppRouter } from '../src';
import './types';

beforeAll(() => {
    const app = express();
    app.use(express.json());
    app.use(AppRouter.getInstance());

    global.app = app;
});
