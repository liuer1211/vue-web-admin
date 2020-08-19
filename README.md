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
    使用的别人的，完整项目，查看： 
   [mall-admin-web](https://gitee.com/liu_d/mall-admin-web)

# 接口
    1.登陆
    url: http://120.27.63.9:8080/admin/login
    method: post
    code: {"username":"admin","password":"macro123"}
    result: {"code":200,"message":"操作成功","data":{"tokenHead":"Bearer ","token":".wwqwessada.ee-"}}
            {"code":404,"message":"用户名或密码错误","data":null}


