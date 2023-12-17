/* eslint-disable linebreak-style */

const { findAllUser, addedUser } = require('../repository/user.repository');

const getAllUser = async () => {
  const allUser = findAllUser();
  return allUser;
};

const createdUser = async (data) => {
  const createUser = addedUser(data);
  return createUser;
};

module.exports = { getAllUser, createdUser };
