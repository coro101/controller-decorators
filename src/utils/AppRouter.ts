import express from 'express';

/**
 * Simple singleton class that returns the unique router object.
 */
export class AppRouter {
    private static instance: express.Router;

    private constructor() {}

    /**
     * Return the instance.
     *
     * @returns Instance of the unique router instance.
     */
    static getInstance(): express.Router {
        if (!AppRouter.instance) {
            AppRouter.instance = express.Router();
        }

        return AppRouter.instance;
    }
}
