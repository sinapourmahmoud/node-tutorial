let { users } = require("../models/users");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// async function get_all_users(req, res) {
//   result = await prisma.user.findMany({
//     select: {
//       name: true,
//       job: true,
//       password: true,
//     },
//   });
//   res.status(200).send(JSON.stringify(result));
// }

// async function get_user(req, res) {
//   const username = req.params.name;
//   const result = await prisma.user.findFirst({
//     where: {
//       name: username,
//     },
//   });

//   return res.status(200).send(JSON.stringify(result));
// }

// async function login(req, res) {
//   const { username, password } = req.body;
//   // const found_user = users.filter(
//   //   (item) => item.password == password && item.name == username
//   // );
//   // if (found_user.length != 0) {
//   //   return res
//   //     .status(200)
//   //     .send(`this is our user ${JSON.stringify(found_user)}`);
//   // }
//   result = await prisma.user.findFirst({
//     where: {
//       name: username,
//       password: password,
//     },
//     select: {
//       name: true,
//       password: true,
//     },
//   });
//   console.log(result);
//   if (result) {
//     return res.status(200).send(JSON.stringify(result));
//   }
//   return res.status(200).send("user not found");
// }

async function signup(req, res) {
  const { name, job, password } = req.body;

  await prisma.user.create({
    data: {
      name,
      password,
      job,
    },
  });
  return res
    .status(200)
    .send(`user is signed up! the name is and your password is `);
}
// async function edit_user(req, res) {
//   const name = req.body.name;
//   const password = req.body.password;
//   result = await prisma.user.update({
//     where: {
//       name,
//     },
//     data: {
//       ...data,
//       password,
//     },
//   });
//   return res.status(200).send(JSON.stringify(resault));
// }

module.exports = {
  signup,
  login,
  edit_user,
  get_all_users,
  get_user,
};
