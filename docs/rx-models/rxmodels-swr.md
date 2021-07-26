---
sidebar_position: 5
---

# 客户端 React hooks

为了客户端开发方便，我们专门开发了一套React hooks库：rxmodels-swr，用于操作rxModels服务端数据。

rxmodels-swr基于[SWR](https://swr.vercel.app/zh-CN) 跟 [axios](https://axios-http.com/)实现，使用它，可以使用SWR、axios的所有特性来跟rxModels服务端交互。


## 安装

执行下面的命令，直接从npmjs上引入包即可。

```console
npm install @rxdrag/rxmodels-swr
```

## 初始化

如果您的项目是通过Create React App创建的，那么直接在`App.tsx`文件中引入一下代码

```tsx title="src/App.tsx"
import { initRxModelsSwr } from '@rxdrag/rxmodels-swr';
...
  initRxModelsSwr({
    //rxModels服务端URL
    serverUrl: 'http://localhost:3001/',
    //登录路由，如果服务端返回404错误，会自动跳到该路由
    loginUrl: '/login',
    //浏览器localStorage存储验证token的名字，一般结合登录时的“记住我”功能使用
    tokenName: 'RxModelsToken',
  });
...

```

initRxModelsSwr接受一个RxModelsSwrConfig对象做参数，它有以下属性

```ts
interface RxModelsSwrConfig {
  serverUrl?: string;
  loginUrl?: string,
  tokenName?: string,
  //服务端验证token，可在登录后传入
  token?: string,
}

```

## rxModelsSwrConfig全局对象
一个全局对象，用于存储基本配置，初始值如下

```ts
export const rxModelsSwrConfig: RxModelsSwrConfig = {
  serverUrl: 'http://localhost:3001/',
  loginUrl: '/login',
  tokenName: 'RxModelsToken',
  token: '',
}
```
您可以在任何时候修改这个对象的属性。

## Rect Hooks

数据查询或者修改用到的钩子

### useSWRQuery

Regular Markdown images are supported.


### useMagicQuery


## Admonitions

