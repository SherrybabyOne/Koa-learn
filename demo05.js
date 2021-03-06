const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({
  prefix: '/aihao'
});

router.get('/', async (ctx, next) => {
  ctx.body = `Hello AiHao`
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000)