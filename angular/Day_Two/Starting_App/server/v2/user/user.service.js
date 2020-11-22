// implementing JSON db with lowdb
const low = require('lowdb');
const { nanoid } = require('nanoid');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

const createUser = async (username, hash) => {
  const newUserRecord = {
    username,
    id: nanoid(),
    password: hash
  };
  db.get('users')
    .push(newUserRecord)
    .write();
  return newUserRecord;
}

const findUser = async (username) => {
  return db.get('users').filter({ username }).value();
}

module.exports = {
  createUser,
  findUser
};
