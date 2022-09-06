import { z } from 'zod';
import { createRouter } from '../createRouter';
import { findCountries } from '../findCountries';
import { PrismaClient } from '@prisma/client';

export const countryRouter = createRouter().query('', {
	input: z.object({
		name: z.string().optional(),
		limit: z.number().min(1).max(100).nullish(),
		cursor: z.number().nullish(), // <-- "cursor" needs to exist, but can be any type
	}),

	async resolve({ input }) {
		const limit = input.limit ?? 10;
		const { cursor, name } = input;
		let where: NonNullable<Parameters<PrismaClient['country']['findMany']>['0']>['where'] = undefined;

		if (name) {
			where = {
				name: {
					contains: name,
				},
			};
		}

		const { items, nextCursor } = await findCountries({ limit, cursor, where });

		return {
			items,
			nextCursor,
		};
	},
});
