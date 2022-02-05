const Router = require('koa-router');
const { reqister, login } = require('../controller/user.controller');
const { userValidator, verifyUser } = require('../middleware/user.middleware');
const router = new Router({
  prefix: '/users'
});

router.get('/', (ctx, next) => {
  ctx.body = 'hello users';
});

// 用户注册
router.post('/reqister', userValidator,verifyUser, reqister);

// 用户登录
router.post('/login', login);



module.exports = router; 