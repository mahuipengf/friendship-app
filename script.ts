import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
//   const user = await prisma.user.create({ // 创建
//     data: {
//       name: 'Alice',
//       email: 'alice@prisma.io',
//       posts: {
//         create: { title: 'Hello World' },
//       },
//     },
//   })
//   console.log(user);
//   const users = await prisma.user.findMany(); // 查询一个表里所有的内容
//   console.log(users);
//   const user = await prisma.user.create({
//     data: {
//         name: 'Bob',
//         email: 'bob@prisma.io',
//         posts: {
//             create: {
//                 title: 'Hello World',
//             },
//         },
//     },
//   })
  const userWidthPost = await prisma.user.findMany({
    include: {
        posts: true,
    }
  });
  console.log(userWidthPost);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })