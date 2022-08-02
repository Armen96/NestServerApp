import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ValidateStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const { authorization } = req.headers;

    if (!authorization) {
      console.log('Request... No auth');
      return res.status(403).send({ error: 'No authentication token provided!' })
    }

    console.log('Request...');
    next();
  }
}
