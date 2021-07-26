---
sidebar_position: 6
---

# React API

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

`initRxModelsSwr`接受一个`RxModelsSwrConfig`对象做参数，它有以下属性

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

## useSWRQuery

通过axios格式参数查询数据，对`useMagicQuery`提供底层支持。

```
const { data, error, loading, mutate } = useSWRQuery(axiosConfig, options)
```

### 参数

* `axiosConfig`: 一个[axios请求配置](https://axios-http.com/docs/req_config)
* `options`:（可选）[useSwr的Options](https://swr.vercel.app/zh-CN/docs/options#%E9%80%89%E9%A1%B9) + onError、onCompleted两个回调函数

### 返回值
* `data`: 查询获得的数据
* `error`: axios抛出的错误（或者是 undefined）
* `loading`: 正在等待结果返回
* `isValidating`: 是否有请求或重新验证加载
* `mutate(data?, shouldRevalidate?)`: 更改缓存数据的函数

除了`loading`，其它跟[`useSWR`](https://swr.vercel.app/zh-CN/docs/options#%E8%BF%94%E5%9B%9E%E5%80%BC)返回值完全一致。

### 选项
* `onCompleted`: 查询成功的回调函数
* `onError`: 查询失败的回调函数

其他选项跟[`useSWR`](https://swr.vercel.app/zh-CN/docs/options)完全一致，若要进一步了解，请查阅它的文档。


## useMagicQuery

通过接口`/get/...`查询数据，可以利用SWR缓存机制，基于URL进行缓存。

```
const { data, error, loading, mutate } = useMagicQuery(querybuilder, options)
```

### 参数
* `querybuilder`: 查询构建器`MagicQueryBuilder`
* `options`:（可选）[useSwr的Options](https://swr.vercel.app/zh-CN/docs/options#%E9%80%89%E9%A1%B9) + onError、onCompleted两个回调

### 返回值
* `data`: 查询获得的数据，类型是`QueryResult<T>{data:T;pagination?:Paginator;}`
* 其它同`useSWRQuery`

## Admonitions

