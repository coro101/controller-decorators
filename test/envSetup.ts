import express, { Request, Response } from 'express';

import { AppRouter, Controller, Get, Post, Put, Delete, Patch } from '../src';
import './types';

beforeAll(() => {
    const app = express();
    app.use(express.json());
    app.use(AppRouter.getInstance());

    global.app = app;
});

@Controller('/method')
class TestMethodController {
    @Get('/get')
    async getMethod(req: Request, res: Response) {
        res.status(200).send();
    }

    @Post('/post')
    async postMethod(req: Request, res: Response) {
        res.status(201).send();
    }

    @Put('/put')
    async putMethod(req: Request, res: Response) {
        res.status(200).send();
    }

    @Delete('/delete')
    async deleteMethod(req: Request, res: Response) {
        res.status(200).send();
    }

    @Patch('/patch')
    async patchMethod(req: Request, res: Response) {
        res.status(200).send();
    }
}
