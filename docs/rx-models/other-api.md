---
sidebar_position: 4
---

# 其它接口

## /auth/login

get method

登录

输入参数：

```
{
  username: 'your name',
  password: 'your password'
}
```

返回值：
jwt token

## /auth/me

get method

返回当前登录的用户，一个 RxUser 对象

## /install

安装

## /is-installed

检查是否已经安装

## /published-schema

post method

发布一个包