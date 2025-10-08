import { Request, Response, Router } from 'express';
import { HelloWorldController } from '../controllers/hello-world.controller';

export const helloWorldRoute = Router();
const helloWorldController = new HelloWorldController();

helloWorldRoute.get('/', async (req: Request, res: Response) =>
  helloWorldController.hello(req, res)
);
