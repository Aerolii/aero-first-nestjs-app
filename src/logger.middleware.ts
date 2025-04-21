/**
 * @file logger.middleware.ts
 * @description Middleware for logging requests and responses.
 */

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, _: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
