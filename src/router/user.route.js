const Router = require('koa-router');
const {reqister, login} = require('../controller/user.controller');

const router = new Router({
  prefix: '/users'
});

router.get('/', (ctx, next) => {
  ctx.body = 'hello users';
});

// 用户注册
router.post('/reqister', reqister);
// 用户登录
router.post('/login', login);



module.exports = router; 