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
  //服务端验证token，登录后传入
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

## 数据查询

## 创建修改

## 更新字段

## 删除

## 上传

## Rect Hooks

### useSWRQuery

Regular Markdown images are supported.


### useMagicQuery

Markdown code blocks are supported with Syntax highlighting.

    ```jsx title="src/components/HelloDocusaurus.js"
    function HelloDocusaurus() {
        return (
            <h1>Hello, Docusaurus!</h1>
        )
    }
    ```

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

    :::tip My tip

    Use this awesome feature option

    :::

    :::danger Take care

    This action is dangerous

    :::

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

## MDX and React Components

[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
