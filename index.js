// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})


// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Declare a route cct
//http://localhost:3000/test?a=123&b=45
fastify.get('/test', function (request, reply) {
    const a =request.query['a'];
   
    const b =request.query['b'];
    console.log(a,b);
    reply.send({ result: a+b })
  })
// Declare a route sum
fastify.get('/sum', function (request, reply) {
    reply.send({ hello: 'cct' })
  })
// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

})