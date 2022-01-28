const Koa = require("koa");
const Router = require('koa-router');
const KoaBody = require("koa-body");

const userRouter = require('../router/user.route');


const app = new Koa();

// const indexRouter = new Router();
// indexRouter.get('/', (ctx, next)=> {
//   ctx.body = 'Hello World';
// });
// app.use(indexRouter.routes()).use(indexRouter.allowedMethods());

app.use(KoaBody());
app.use(userRouter.routes());

module.exports = app;