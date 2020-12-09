import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

import { AppRouter, Controller, Get, Post, Put, Delete, Patch, Use, Validate } from '../src';
import './types';

beforeAll(() => {
    const app = express();
    app.use(express.json());
    app.use(AppRouter.getInstance());

    // Error handler.
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(400).send();
    });

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

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return next(new Error('validation error'));
    }

    next();
};

@Controller('/validation')
class TestValidationController {
    @Post('/post')
    @Validate(
        body('email').isEmail().withMessage('Email must be valid'),
        body('password')
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage('Password must be between 4 and 20 characters')
    )
    @Use(validateRequest)
    async postMethod(req: Request, res: Response) {
        res.status(200).send();
    }
}
