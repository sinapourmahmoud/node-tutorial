let { users } = require("../models/users");

function get_all_users(req, res) {
  res.status(200).send(JSON.stringify(users));
}

function get_user(req, res) {
  const id = parseInt(req.params.id);
  const user = users.filter((user) => user.id == id);
  if (user.length == 0) {
    return res.status(404).send("user not found");
  } else {
    return res.status(200).send(JSON.stringify(user));
  }
}

function login(req, res) {
  const { username, password } = req.query;
  const found_user = users.filter(
    (item) => item.password == password && item.name == username
  );
  if (found_user.length != 0) {
    return res
      .status(200)
      .send(`this is our user ${JSON.stringify(found_user)}`);
  }

  return res.status(404).send("user not found");
}

function signup(req, res) {
  const name = req.body.name;
  const lastname = req.body.lastname;
  const password = req.body.password;
  let higest = 0;
  for (const user in users) {
    if (user.id >= higest) {
      higest = user.id;
    }
    if (user.name == name) {
      return res.status(400).send("the user is already registered");
    }
  }
  users.push({ id: higest + 1, name, lastname, password });
  return res
    .status(200)
    .send(
      `user is signed up! the name is ${name} and your password is ${password}`
    );
}
function edit_user(req, res) {
  const id = parseInt(req.params.id);
  const { name, lastname, password } = req.body;
  function my_func(item) {
    if (item.id == id) {
      return { id, name, lastname, password };
    }
    return item;
  }
  users = users.map(my_func);
  return res
    .status(200)
    .send(
      `changing was successful ${JSON.stringify({ name, lastname, password })}`
    );
}



module.exports = {
  signup,
  login,
  edit_user,
  get_all_users,
  get_user
};
