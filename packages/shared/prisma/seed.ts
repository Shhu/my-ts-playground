import { PrismaClient } from '@prisma/client'
import hashString from '../helpers/hashString'

const prisma = new PrismaClient()

async function main() {
    const playerOne = await prisma.player.upsert({
        where: { email: 'player.one@example.com' },
        update: {},
        create: {
            email: 'player.one@example.com',
            name: 'PlayerOne',
            password: hashString('secret'),
        },
    })
    const playerTwo = await prisma.player.upsert({
        where: { email: 'player.two@example.com' },
        update: {},
        create: {
            email: 'player.two@example.com',
            name: 'PlayerTwo',
            password: hashString('secret'),
        },
    })
    console.log({ playerOne, playerTwo })
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
