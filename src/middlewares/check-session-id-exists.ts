import { FastifyReply, FastifyRequest } from 'fastify'
import { env } from '../env'

export async function checkSessionIdExists(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  const { sessionId } = req.cookies
  // console.log('modulo de teste: ', env)

  if (env.NODE_ENV !== 'test') {
    if (!sessionId) {
      return reply.status(401).send({
        error: 'Unauthorized.',
      })
    }
  }
}
