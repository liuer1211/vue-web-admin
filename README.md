# mall-admin

# 搭建命令
vue init webpack

> vue后台管理系统

## 安装依赖

``` bash
# 安装依赖
npm install

# 启动服务
npm run dev

# 打包
npm run build

# 打包后查看所用到的技术模块，生成分析图
npm run build --report
```
# 接口使用
    使用的别人的，完整项目，查看： https://gitee.com/liu_d/mall-admin-web
   [mall-admin-web](https://gitee.com/liu_d/mall-admin-web)
   [mall-admin-web访问地址](http://www.macrozheng.com/admin/#/login)

# 接口
    1.登陆
    url: http://120.27.63.9:8080/admin/login
    method: post
    code: {"username":"admin","password":"macro123"}
    result: {"code":200,"message":"操作成功","data":{"tokenHead":"Bearer ","token":".wwqwessada.ee-"}}
            {"code":404,"message":"用户名或密码错误","data":null}

# 问题
    1.最新的webpack不支持缩写
      { 
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    2.动态路由获取
      - 首次打开页面（http://localhost:8080），已有token
        - 路由是login，替换成‘/’,跳到home
        - 路由不是login
          - 角色没有值，【没有权限，调接口】
            - 拉取用户信息，获得动态路由
            - token过期，掉接口，退出登录
          - 角色有值，直接跳到，【代表有权限，说明路由已经拼接好了，直接跳转】
            （token被修改，或者过期，在调接口有拦截去处理，会返回过期信息）
      - 首次打开页面（http://localhost:8080），没有token
        - 路由是 /login，跳到login，进行登录
        - 路由不是 /login，跳到login，进行登录
    3.layout布局
      - 菜单栏
      - 内容页
    4.echarts使用
    5.config文件夹中的index.js里面的assets PublicPath: ‘/’--改成‘./’项目运行不起来；打包时候需要改

# 结果
   ![image.png](https://liuer1211.github.io/vue-web-admin/static/img/m1.png)
