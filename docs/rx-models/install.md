---
sidebar_position: 1
---

# 安装

## 环境要求
* Node.js v14.17.1
* MySql 8.0 +

## 开发环境下安装

安装配置MySql，并在MySql新建一个数据库Schema，记住这个Shema的名字跟访问MySql的账号和密码，后面会用到。

### 安装运行服务端
```console
#不用下面第一条命令，直接在Github网站上Download一个zip格式的代码包，然后解压也很方便

git clone https://github.com/rxdrag/rx-models.git

cd rx-models

npm install

npm run start:dev
```
在浏览器输入：http://localhost:3001/ ，看到熟悉的“Hello World!”，则说明已经成功运行了。

服务端使用了Sharp图形处理库来管理图片，这个库不设置代理，可能不容易安装成功，如果在`npm install`时没有成功，那么按照下面的命令，设置一下代理
```console
npm config set sharp_binary_host "https://npm.taobao.org/mirrors/sharp"

npm config set sharp_libvips_binary_host "https://npm.taobao.org/mirrors/sharp-libvips"
```
设置完成以后再执行命令
```console
npm install

npm run start:dev
```
希望到这里，您的服务端已经能成功运行，要是不行，请在Github上发issue或者直接跟作者联系。

### 安装运行客户端

## 发布环境下安装
不同的服务商，会有不同的安装配置，这部分已经超出了rxModels本身，请参考博客文章，如果博客里没有，就是作者还没有来得及写。

配置好环境以后，具体安装步骤跟开发环境下一样，跟着Install向导走就行。

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at `http://localhost:3000/my-react-page`.

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at `http://localhost:3000/my-markdown-page`.
