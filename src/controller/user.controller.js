const { createUser } = require("../service/user.service");

class USerController {
  async reqister(ctx, next) {
    const {user_name,password} = ctx.request.body;
    // 操作数据库
    const res = await createUser(user_name,password);
    // 返回结果
    ctx.body =res;

  }

  async login(ctx, next) {
    
    ctx.body = '用户登录';
  }
}

module.exports = new USerController();
