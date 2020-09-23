import App from './app'

const server = () => {
  const app = new App();

  app.start();
  app.register();
}

server();
