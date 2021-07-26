---
sidebar_position: 6
---

# React Hooks

为了客户端开发方便，我们专门开发了一套 React hooks 库：rxmodels-swr，用于操作 rxModels 服务端数据。

rxmodels-swr 基于[SWR](https://swr.vercel.app/zh-CN) 跟 [axios](https://axios-http.com/)实现，使用它，可以使用 SWR、axios 的所有特性来跟 rxModels 服务端交互。


## 安装

执行下面的命令，直接从 npmjs 上引入包即可。

```console
npm install @rxdrag/rxmodels-swr
```

## 初始化

如果您的项目是通过 Create React App 创建的，那么直接在 `App.tsx` 文件中引入一下代码

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

initRxModelsSwr 接受一个 RxModelsSwrConfig 对象做参数，它有以下属性

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

通过axios格式参数查询数据，对 useMagicQuery 提供底层支持。

```
const { data, error, loading, mutate } = useSWRQuery(axiosConfig, options)
```

### 参数

* `axiosConfig`: 一个[axios请求配置](https://axios-http.com/docs/req_config)
* `options`:（可选）[useSwr的Options](https://swr.vercel.app/zh-CN/docs/options#%E9%80%89%E9%A1%B9) + onError、onCompleted两个回调函数

### 返回值
* `data`: 查询获得的数据
* `error`: axios 抛出的错误（或者是 undefined）
* `loading`: 正在等待结果返回
* `isValidating`: 是否有请求或重新验证加载
* `mutate(data?, shouldRevalidate?)`: 更改缓存数据的函数

除了`loading`，其它跟[`useSWR`](https://swr.vercel.app/zh-CN/docs/options#%E8%BF%94%E5%9B%9E%E5%80%BC)返回值完全一致。

### 选项
* `onCompleted`: 查询成功的回调函数
* `onError`: 查询失败的回调函数

其他选项跟[`useSWR`](https://swr.vercel.app/zh-CN/docs/options)完全一致，若要进一步了解，请查阅它的文档。


## useMagicQuery

通过接口 `/get/...` 查询数据，可以利用SWR缓存机制，基于URL进行缓存。

```
const { data, error, loading, mutate } = useMagicQuery(querybuilder, options)
```

### 参数
* `querybuilder`: 查询构建器 `MagicQueryBuilder`
* `options`:（可选）[useSwr的Options](https://swr.vercel.app/zh-CN/docs/options#%E9%80%89%E9%A1%B9) + onError、onCompleted两个回调

### 返回值
* `data`: 查询获得的数据，类型是 `QueryResult<T>{data:T;pagination?:Paginator;}`
* 其它同 useSWRQuery

### 选项
跟接口 useSWRQuery 相同。

## useMagicQueryInfinite
无限加载时使用，底层使用[`useSWRInfinite`](https://swr.vercel.app/zh-CN/docs/pagination#useswrinfinite)实现。
```
const { data, error, loading, isValidating, mutate, size, setSize } = useMagicQueryInfinite(getKey, options)
```

### 参数
* getKey: 一个函数，接受索引和上一页数据，返回页面的 key
* options: 跟 useMagicQuery 接口一致

### 返回值
* `data`: 一个数组，每个页面请求的响应值
* `error`: 与 useMagicQuery 的 error 返回值相同
* `loading`: 请求中，等待返回结果
* `isValidating`: 与 useMagicQuery 的 isValidating 返回值相同
* `mutate`: 和 useMagicQuery 的绑定 mutate 函数一样，但是操作 data 数组
* `size`: 即将请求和返回的页面数
* `setSize`: 设置需要请求的页面数

## useLazyAxios
通过axios发送一个延时请求。

```
 const [excute, { data, loading, error }] = useLazyAxios<T>(axiosConfig, options)
```

### 参数
* `axiosConfig`: 一个[axios请求配置](https://axios-http.com/docs/req_config)
* `options`: onError、onCompleted两个回调

### 返回值
* `excute`: 执行函数，马上提交数据，接受参数：AxiosConfig的一个片段
* `data`: 执行成功的返回数据
* `loading`: 正在请求，等待返回结果
* `error`: axios返回的错误

### 参数
* `onError`: `(error:DataError) => void`
* `onCompleted`: `(data:T) => void`
