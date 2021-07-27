---
sidebar_position: 6
---

# 在React中使用

使用我们提供的钩子库 rxmodels-swr，可以很方便的在React中使用rxModels。

本文从登录页面开始，逐步介绍使用方法，随着项目的完善，案例也会越来越丰富。

## 开始前的准备
如果您已经准备好探索rxModels，那么先本机安装一个，是不错的开始方式。

安装步骤很简单，请参考[安装](install.md)。

安装并已成功运行rxMolels，接下来就可以开心制作您自己的客户端。

## 开始一个React项目
创建一个React项目，项目支持TypeScript。项目名任选，本文使用rxmodels-react-example。

```console
npx create-react-app rxmodels-react-example --template typescript
cd rxmodels-react-example
```

安装 rxmodels-swr

```console
npm install -save @rxdrag/rxmodels-swr
```

## 制作登录页
