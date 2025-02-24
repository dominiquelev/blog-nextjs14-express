import { AuthController } from '@/controllers/auth.controller';

import { Router } from 'express';

export class Authrouter {
    private router: Router;
    private authController: AuthController;

    constructor() {
        this.authController = new AuthController();
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {

        this.router.post('/register', this.authController.registerController);
        this.router.post('/login', this.authController.loginController);
    }

    getRouter(): Router {
        return this.router;
    }
}
