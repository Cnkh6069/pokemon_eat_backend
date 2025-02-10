// UsersController
const { User, sequelize } = require("../models");

// search for user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to find User" });
  }
};
//update a User profile with a transaction
const updateUserById = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { id } = req.params;
    const { userName } = req.body;
    const [update] = await User.updated(
      { userName },
      { where: { id }, transaction }
    );
    if (updated) {
      const updatedUser = await User.findByPk(id, { transaction });
      await transaction.commit();
      res.status(200).json(updatedUser);
    } else {
      await transaction.rollback();
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    await transaction.rollback();
    res
      .status(500)
      .json({ error: "Failed to update User", details: error.message });
  }
};

module.exports = { getUserById, updateUserById };
