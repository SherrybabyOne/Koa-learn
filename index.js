const Koa = require('koa')
const app = new Koa()

app.use(async ( ctx ) => {
  ctx.body = 'hello Koa2'
})

app.listen(3000)
console.log('koa in running at port 3000')