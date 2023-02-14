import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const studentRouter = createTRPCRouter({
	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.students.findMany();
	}),
});
