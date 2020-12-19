const userService = require('./user.service');
const { jwt_key } = require('../../config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authError = new Error('Authentication failed.');

userLogin = async (req, res) => {
  console.log(`${req.body.username} logging in`);
  const fetchedUser = await userService.findUser(req.body.username);
  if (!fetchedUser || fetchedUser.length < 1) {
    throw authError;
  }
  // found user
  const { username, userId, password } = fetchedUser[0];
  const hashMatch = await bcrypt.compare(req.body.password, password);
  if (!hashMatch) {
    throw authError;
  }
  // hashes match, correct password entered
  // time to generate user's JWT
  const token = jwt.sign(
    { username, userId },
    jwt_key,
    { expiresIn: '4h' }
  );
  console.log('login successful!');
  res.status(200).json({
    token: token,
    expiresIn: 14400,
    userId
  });
}

userSignUp = async (req, res) => {
  // create a new user and store it in the database
  console.log(`creating new user ${req.body.username}`);
  const hash = await bcrypt.hash(req.body.password, 15)
  const { username, id } = await userService.createUser(req.body.username, hash);
  const token = jwt.sign({ username, id },
    jwt_key,
    { expiresIn: '4h' }
  );
  res.status(200).json({
    token: token,
    expiresIn: 14400,
    id
  });
}

module.exports = {
  userLogin,
  userSignUp
};
