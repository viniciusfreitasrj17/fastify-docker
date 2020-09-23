// Import our Controllers
import UserController from "./controllers/UserController";

const routes = [
  {
    method: "GET",
    url: "/users",
    handler: UserController.index,
  },
  {
    method: "GET",
    url: "/users/:id",
    handler: UserController.show,
  },
  {
    method: "POST",
    url: "/users",
    handler: UserController.store,
    // schema: documentation.addCarSchema
  },
  {
    method: "PUT",
    url: "/users/:id",
    handler: UserController.update,
  },
  {
    method: "DELETE",
    url: "/users/:id",
    handler: UserController.destroy,
  },
];

export default routes;
