---
sidebar_position: 2
---

# 业务实体模型

业务实体模型是基于ER图实现的，目前仅支持实体、关系、枚举三个特性。继承与实体嵌套计划在下一个版本中支持。

该模块主要是一些图形化的拖拽操作，用文字描述这样的操作，是一件枯燥的事情，阅读这样的文字也会相当无聊。

所以，关于如何操作，自己点点试试就好了。或许，等作者有空的时候出个操作视频，是个比较不错的主意。

本文只是概要说一下其中的一些关键点。

## 包

一组实体、关系跟ER图的组合，包的概念只是给数据管理提供了方便，对数据库映射没有什么影响。

除了添加、修改删除包以及包内部所包含的实体、关系、ER图等常规操作，包还可以单独发布、导出、导入、导出模型接口类等。

### 发布
没有被发布的包，仅仅是数据库中的一条数据记录，不管怎么修改，保存多少次，都不会对系统的运行产生任何影响，更没法通过接口操作它实体的实例数据。

一旦包被发布，意味着它深度融入到我们系统里了，可以通过通用接口增、删、查、改它的数据了。

包的发布不能被撤销，处分您深度了解系统原理，到后端删除相应的发布文件，也是可以的。这个文件的目录是：`\schemas`。一个包一个文件，文件名字对应包的UUID，删除文件并重启后端，这个包就撤销发布了。

看起来相当麻烦吧？所以，请谨慎操作包的发布。

### 导出JSON
把一个整个包的内容，导出成一个JSON文件，并且这个文件还可以被其他人导入并使用。但是重复导入不行，系统会提示错误。

### 导入包

### 导出模型接口类

## 实体

## 属性

## 关系

### 1对1

### 1对多

### 多对1

### 多对多

Documents are **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at `http://localhost:3000/docs/hello`.

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadatas to customize the sidebar label and position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

It is also possible to create your sidebar explicitly in `sidebars.js`:

```diff title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
-     items: [...],
+     items: ['hello'],
    },
  ],
};
```
