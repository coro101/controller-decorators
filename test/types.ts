import { Express } from 'express';

declare global {
    namespace NodeJS {
        interface Global {
            app: Express
        }
    }
}
