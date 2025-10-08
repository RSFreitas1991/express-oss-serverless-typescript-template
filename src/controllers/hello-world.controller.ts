import { Request, Response } from 'express';

export class HelloWorldController {
  constructor() {}
  async hello(
    req: Request,
    res: Response
  ): Promise<Response<unknown, Record<string, unknown>>> {
    return res.status(200).json({ message: 'Hello World!' });
  }
}
