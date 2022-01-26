const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = "Hello world1"
})

app.listen(3000, () => {
  console.log("项目已启动")

})