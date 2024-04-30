import { NextFunction, Request, Response } from 'express';
import { registerservice } from '@/services/register.service';

export class AuthController {
    async registerController(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await registerservice(req.body);
            res.status(200).send(result);

        } catch (error) {
            next(error)
        }
    }


}

