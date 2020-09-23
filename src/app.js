import fastify from "fastify"
import dotenv from 'dotenv';

dotenv.config();

const routes = function (fastify, opts, next) {
  fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
  })

  next()
}

export default class App {
  constructor() {
    this.server = fastify({ logger: true });
  }

  async start() {
    try {
      await this.server.listen(process.env.PORT || 3002)
      this.server.log.info(`🏃--------> server listening on ${process.env.PORT || 3002}`)
    } catch(err) {
      this.server.log.error(err);
      process.exit(1);
    }
  }

  async register() {
    try {
      await this.server.register(routes);
    } catch(err) {
      this.server.log.error(err);
      process.exit(1);
    }
  }
}
