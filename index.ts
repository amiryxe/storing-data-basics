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
    // const article = await prisma.article.create({
    //     data: {
    //         title: 'Title test of article',
    //         body: 'Description test of article',
    //         author: {
    //             connect: {
    //                 id: 1
    //             }
    //         }
    //     }
    // })

    // console.log(article)

    // All Articles
    // const articles = await prisma.article.findMany()

    // console.log(articles)

    // Create User and Article and associate with them
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Sara',
    //         email: 'sara@test.com',
    //         aritcles: {
    //             create: {
    //                 title: 'Sara article title',
    //                 body: 'Sara article body'
    //             }
    //         }
    //     }
    // })

    // console.log(user)

    // List of users with their articles
    // const usersWithArticles = await prisma.user.findMany({
    //     include: {
    //         articles: true
    //     }
    // })

    // console.log(usersWithArticles)

    // List of articles of specific user
    // const articlesOfSara = await prisma.article.findMany({
    //     where: {
    //         authorId: 3
    //     }
    // })

    // console.log(articlesOfSara)

    // Update a user
    // const user = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: 'Amir Sa'
    //     }
    // })

    // console.log(user)

    // Delete a user
    // const user = await prisma.user.delete({
    //     where: {
    //         id: 2
    //     },
    // })

    // console.log(user)
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })