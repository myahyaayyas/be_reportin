/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable linebreak-style */
const { getAllUser } = require('../service/user.service');

class UserController {
  static getAllUser = async (req, res) => {
    try {
      const user = await getAllUser();
      res.send({
        status: 200,
        data: user,
      });
    } catch (error) {
      throw Error(error);
    }
  };
}

module.exports = UserController;
