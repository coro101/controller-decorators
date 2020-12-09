import 'reflect-metadata';
import { ValidationChain } from 'express-validator';

import { MetaKeys } from './MetaKeys';

/**
 * Validate decorator function factory.
 * The "Validate" decorator adds ValidationChains to the routes.
 *
 * @param validationChains Validation chain array.
 */
export function Validate(...validationChains: ValidationChain[]) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata(MetaKeys.Validate, validationChains, target, key);
    }
}
