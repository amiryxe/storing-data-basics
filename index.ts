import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    // Create User
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Erfan',
    //         email: 'erfan@test.com'
    //     }
    // })

    // console.log(user)

    // All Users
    // const users = await prisma.user.findMany()

    // console.log(users)

    // Create article and associate it with user
    const article = await prisma.article.create({
        data: {
            title: 'Title test of article',
            body: 'Description test of article',
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })

    console.log(article)
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })