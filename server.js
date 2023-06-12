const jsonServer = require('json-server');
const auth = require('json-server-auth')
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

const PORT = process.env.PORT || 3001;

server.db = router.db

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(PORT, () => {
  console.log('Server is running');
});

