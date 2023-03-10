import morgan from "morgan";
import { createConnections } from "typeorm";
import app from "../app";
import { LOG_FORMAT } from "../constants/environments.constant";
import { stream } from "../utils/logger/logger.util";

export default class Server {
  public port: number;

  constructor(port: number) {
    this.port = port;
  }

  static init(port: number) {
    return new Server(port);
  }

  start(callback: () => void) {
    this.connect()
      .then(() => {
        // api docs setup
        // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs.default, { explorer: true }));

        // application logger setup
        app.use(morgan(LOG_FORMAT, { stream }));
        app.listen(this.port, callback);
      })
      .catch((err) => console.error(err));
  }

  private async connect() {
    // return await createConnections();
    return true;
  }
}
