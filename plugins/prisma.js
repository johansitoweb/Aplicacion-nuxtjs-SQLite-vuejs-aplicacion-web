import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default (context, inject) => {
  inject('prisma', prisma);
};
