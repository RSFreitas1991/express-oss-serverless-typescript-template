import express, { Express } from 'express';
import serverless from 'serverless-http';
import { helloWorldRoute } from './routes/hello-work.route';

export class App {
  public app: Express;
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(`/`, helloWorldRoute);
  }

  public start(port: number) {
    this.app.listen(() => console.log(`listening port ${port}`));
  }
}

export const { app } = new App();
export const handler = serverless(app);
