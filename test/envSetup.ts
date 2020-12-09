import express, { Request, Response, NextFunction } from 'express';

import { AppRouter, Controller, Get, Post, Put, Delete, Patch, Use } from '../src';
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

const firstMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.body.first = true;
    next();
};
const secondMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.body.second = true;
    next();
};
const thirdMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.body.first = false;
    next();
};

@Controller('/middleware')
class TestMiddlewareController {
    @Get('/get')
    @Use(firstMiddleware)
    @Use(secondMiddleware)
    @Use(thirdMiddleware)
    async getMethod(req: Request, res: Response) {
        res.status(200).send(req.body.first);
    }
}
