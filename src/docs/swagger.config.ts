import { resolve } from "path";
import swaggerJsdoc from "swagger-jsdoc";
import { API_CONFIG } from "../constants";

const options = {
  // List of files to be processed.
  apis: [resolve(__dirname, "./**/*.yaml")],
  // You can also set globs for your apis
  // e.g. './routes/*.js'
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Server-template",
      version: "1.0.0",
      description: "Server-template",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/"
      }
    },
    servers: [
      {
        url: API_CONFIG.HOST
      }
    ]
  }
};

const specs = swaggerJsdoc(options);

export default specs;
