// Get Data Models
// import User from "../models/User";
import db from "../models";
db.sequelize.sync();
const User = db.users;

const UserController = {
  // Get all users
  index: async (req, reply) => {
    try {
      const users = await User.findAll();
      return users;
    } catch (err) {
      return `--> Error: ${err.message}`;
    }
  },

  // Get single user by ID
  show: async (req, reply) => {
    try {
      const id = req.params.id;
      const user = await User.findByPk(id);
      return user;
    } catch (err) {
      return `--> Error: ${err.message}`;
    }
  },

  // Add a new user
  store: async (req, reply) => {
    try {
      const { name, email, password } = req.body;
      return await User.create({ name, email, password });
    } catch (err) {
      return `--> Error: ${err.message}`;
    }
  },

  // Update an existing user
  update: async (req, reply) => {
    try {
      const id = req.params.id;
      const user = req.body;
      const update = await User.update(user, {
        where: { id },
      });
      return update;
    } catch (err) {
      return `--> Error: ${err.message}`;
    }
  },

  // Delete a user
  destroy: async (req, reply) => {
    try {
      const id = req.params.id;
      const user = await User.destroy({ where: { id } });
      return user;
    } catch (err) {
      return `--> Error: ${err.message}`;
    }
  },
};

export default UserController;
