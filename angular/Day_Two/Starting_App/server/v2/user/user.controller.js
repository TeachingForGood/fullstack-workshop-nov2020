const userService = require('./user.service');

userLogin = async (req, res) => {
  console.log(`${req.body.username} logging in`);
  const { username, userId, password } = await userService.findUser(req.body.username);
  if (!fetchedUser || fetchedUser.length < 1) {
    throw authError;
  }
  // found user
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
  const { username, userId } = await userService.createUser(req.body.username, hash);
  const token = jwt.sign({ username, userId },
    jwt_key,
    { expiresIn: '4h' }
  );
  res.status(200).json({
    token: token,
    expiresIn: 3600,
    userId
  });
}

module.exports = {
  userLogin,
  userSignUp
};
