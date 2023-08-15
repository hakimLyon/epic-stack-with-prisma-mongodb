import { PrismaClient } from '@prisma/client'
import { singleton } from './singleton.server.ts'

const prisma = singleton('prisma', () => {
	const client = new PrismaClient()
	client.$connect() // Make sure to call $connect after creating the instance
	return client
})
export { prisma }
