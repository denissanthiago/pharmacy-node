import http from "node:http";

import { App } from "@src/app";

export class Server {
  private readonly app: App;

  constructor() {
    this.app = new App();

    this.app.middleware();
    this.app.routes();
  }

  async start(): Promise<void> {
    return this.app.startApp();
  }

  async stop(): Promise<void> {
    return this.app.stopApp();
  }

  getHttpServer(): http.Server | undefined {
    return this.app.getHttpServerApp();
  }
}
