import "./config";
import Server from "./server/server";
import logger from "./utils/logger/logger.util";

export const server = Server.init((process.env.PORT as unknown) as number);

server.start(async () => {
  logger.info(`Server is running at PORT: ${process.env.PORT}`);
});
