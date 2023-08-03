import { prisma } from "./db.server.ts"

export async function deleteIfPreviousImageExiste({
	imageId,
}: {
	imageId: string | null | undefined
}) {
	if (imageId) {
		await prisma.image
		.delete({
			where: { fileId: imageId },
		})
		.catch(() => {}) // ignore the error, maybe it never existed?
		await prisma.file
			.delete({
				where: { id: imageId },
			})
			.catch(() => {}) // ignore the error, maybe it never existed?
	}
	
}