import { loginService } from '@/services/login.service';
import { registerService } from '@/services/register.service';
import { NextFunction, Request, Response } from 'express';


export class AuthController {
    async registerController(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await registerService(req.body);
            res.status(200).send(result);

        } catch (error) {
            next(error)
        }
    }
    async loginController(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await loginService(req.body);
            res.status(200).send(result);

        } catch (error) {
            next(error)
        }
    }


}

