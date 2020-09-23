import fastify from "fastify";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

// const routes = [
//   {
//     method: "GET",
//     url: "/test",
//     // this function is executed for every request before the handler is executed
//     preHandler: async (request, reply) => {
//       // E.g. check authentication
//     },
//     handler: async (request, reply) => {
//       // try {
//       const data = await User.findAll();
//       return data;
//       // } catch (err) {
//       //   return `---> Error: ${err.message}`;
//       // }
//     },
//   },
// ];

export default class App {
  constructor() {
    this.server = fastify({ logger: true });
  }

  async start() {
    try {
      await this.server.listen(process.env.PORT || 3002, "0.0.0.0");
      this.server.log.info(
        `🏃--------> server listening on ${process.env.PORT || 3002}`
      );
    } catch (err) {
      this.server.log.error(err);
      process.exit(1);
    }
  }

  async register() {
    try {
      routes.forEach((route, index) => {
        this.server.route(route);
      });
    } catch (err) {
      this.server.log.error(err);
      process.exit(1);
    }
  }
}
