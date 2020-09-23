// Get Data Models
// import User from "../models/User";
import db from "../models";
db.sequelize.sync();
const User = db.users;

const UserController = {
  // Get all users
  index: async (req, reply) => {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      return `--> Error: ${err.message}`;
    }
  },

  // // Get single user by ID
  // show: async (req, reply) => {
  //   try {
  //     const id = req.params.id;
  //     const user = await User.findById(id);
  //     return user;
  //   } catch (err) {
  //     return `--> Error: ${err.message}`;
  //   }
  // },

  // // Add a new user
  // store: async (req, reply) => {
  //   try {
  //     const user = new User(req.body);
  //     return await user.save();
  //   } catch (err) {
  //     return `--> Error: ${err.message}`;
  //   }
  // },

  // // Update an existing user
  // update: async (req, reply) => {
  //   try {
  //     const id = req.params.id;
  //     const user = req.body;
  //     const { ...updateData } = user;
  //     const update = await User.findByIdAndUpdate(id, updateData, {
  //       new: true,
  //     });
  //     return update;
  //   } catch (err) {
  //     return `--> Error: ${err.message}`;
  //   }
  // },

  // // Delete a user
  // destroy: async (req, reply) => {
  //   try {
  //     const id = req.params.id;
  //     const user = await User.findByIdAndRemove(id);
  //     return user;
  //   } catch (err) {
  //     return `--> Error: ${err.message}`;
  //   }
  // },
};

export default UserController;
