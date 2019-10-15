const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url =ctx.url;
    let req_query = ctx.request.query;
    let req_querystring = ctx.request.querystring;
 
    ctx.body={
        url,
        req_query,
        req_querystring
    }
 
});
 
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});