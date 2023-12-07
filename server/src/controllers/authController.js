const createHTTPError = require('http-errors');

const { User } = require('../models');
const { createTokenPair } = require('../services/jwtServices');

module.exports.signUp = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    const tokenPair = await createTokenPair(user);
    // res.status(201).send();
  } catch (error) {
    next(error);
  }
};

module.exports.signIn = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    const user = await User.findOne({
      where: { email },
    });
    if (user && (await user.comparePassword(password))) {
      const tokenPair = await createTokenPair(user);
      // const userWithToken = ;
      return res.status(200).send({data: userWithToken});
    }
    next(createHTTPError(401, 'Not authorized'));
  } catch (error) {
    next(error);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
    const tokenPair = await createTokenPair(user);
  } catch (error) {
    next(error);
  }
};
