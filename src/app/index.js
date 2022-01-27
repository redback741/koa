const Koa = require("koa");
const Router = require('koa-router');

const userRouter = require('../router/user.route');


const app = new Koa();
const indexRouter = new Router();

indexRouter.get('/', (ctx, next)=> {
  ctx.body = 'Hello World';
});


app.use(indexRouter.routes()).use(indexRouter.allowedMethods());
app.use(userRouter.routes());

module.exports = app;