import fastify, { FastifyInstance } from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

const server = fastify().withTypeProvider<TypeBoxTypeProvider>();

server.get("/", async (request, reply) => {
  return "Hello hey! 👋";
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Started server at ${address}`);
});
