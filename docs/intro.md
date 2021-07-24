---
sidebar_position: 1
---

# 介绍

了解什么是rxDrag，以及它能为我们做些什么， **仅需2分钟就够了**。

## 什么是rxDrag

rxDrag是一个低代码平台，力求少量代码甚至零代码，就可以构建常见应用。它包括如下几个部分：  

**rxModels服务端** 没有任何界面，提供WEB API用于访问数据。内置通用JSON查询接口，权限管理功能。

**rxModels客户端** React实现的前端，用于对服务端提供图形化支持，可以根据ER图构建服务端数据结构，设置服务端业务模型权限，带有通用JSON接口调试界面。生成前端使用的TypeScript interface。

**DragIt可视化前端** 后端基于rxModels，可以通过拖放等可视化操作构建应用。 

**其他相关周边**  一些通用类库、插件等。

## rxDrag能做什么？
rxDrag是一个低代码生态链，可以选择在以下节点上使用：

* 只用数据服务，只需要部署rxModels服务端跟客户端就好，自己编写前端，构建前后端分离应用。

* 使用DragIt，前端也不愿意写，通过拖拽就可以构建基本应用。我们内置了CMS，CRM等基础模块，可以满足基础应用。

* 深度定制，以rxModels为基础架构，垂直打造属于自己的低代码平台。

* 后续会开发一些应用，不断降低使用者的门槛，敬请期待。

## rxDrag基于什么技术栈？

## 使用rxDrag需要的知识？

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[new.docusaurus.io](https://new.docusaurus.io)**.

## Generate a new site

Generate a new Docusaurus site using the **classic template**:

```shell
npx @docusaurus/init@latest init my-website classic
```

## Start your site

Run the development server:

```shell
cd my-website

npx docusaurus start
```

Your site starts at `http://localhost:3000`.

Open `docs/intro.md` and edit some lines: the site **reloads automatically** and display your changes.
