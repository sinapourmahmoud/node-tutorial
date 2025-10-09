const { PrismaClient } = require("@prisma/client");

let loggedIn = false;

const prisma = new PrismaClient();

function logout(req, res) {
  if (!loggedIn) {
    return res.status(500).send("You are not logged in");
  }
  loggedIn = false;
  return res.status(200).send("logged out successfully");
}

async function get_all_users(req, res) {
  if (loggedIn) {
    result = await prisma.user.findMany({
      select: {
        name: true,
        job: true,
        password: true,
      },
    });
    return res.status(200).send(JSON.stringify(result));
  }
  return res.status(500).send("You are not logged in");
}

async function get_user(req, res) {
  const username = req.params.name;
  const result = await prisma.user.findFirst({
    where: {
      name: username,
    },
  });

  return res.status(200).send(JSON.stringify(result));
}

async function login(req, res) {
  const { username, password } = req.body;
  if (!loggedIn) {
    result = await prisma.user.findFirst({
      where: {
        name: username,
      },
      select: {
        name: true,
        password: true,
      },
    });

    if (result.password != password) {
      res.status(401).json({ message: "invalid password" });
      return;
    }
    console.log(result);
    if (result) {
      loggedIn = true;
      return res.status(200).send(JSON.stringify(result));
    }
    return res.status(200).send("user not found");
  }
  return res.status(500).send("You are already logged in!!!");
}

async function signup(req, res) {
  if (!loggedIn) {
    const { name, job, password } = req.body;

    await prisma.user.create({
      data: {
        name: name,
        password: password,
        job: job,
      },
    });
    loggedIn = true;

    return res
      .status(200)
      .send(`user is signed up! the name is and your password is `);
  }
  return res.status(500).send("You are already logged in!!!");
}
async function edit_user(req, res) {
  const name = req.body.name;
  const password = req.body.password;
  result = await prisma.user.update({
    where: {
      name: name,
    },
    data: {
      ...data,
      password,
    },
  });
  return res.status(200).send(JSON.stringify(resault));
}

module.exports = {
  signup,
  login,
  edit_user,
  get_all_users,
  get_user,
  logout
};
