const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const home = new Router();
home
  .get('/aihao', async (ctx) => {
    ctx.body = `home aihao`;
  })
  .get('/todo', async (ctx) => {
    ctx.body = `home todo`;
  })

const page = new Router();
page
  .get('/aihao', async (ctx) => {
    ctx.body = `page aihao`;
  })
  .get('/todo', async (ctx) => {
    ctx.body = `page todo`;
  })

// 装载所有子路由
let router = new Router();
router.use('/home', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000)