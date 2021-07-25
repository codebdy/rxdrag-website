---
sidebar_position: 1
---

# 安装

<font color="#dd0000">rxDrag还在开发测试中，想找个工具马上使用的朋友，就不要浪费时间安装了，等做好再来。学习交流，欢迎继续。</font>

## 环境要求
* Node.js v14.17.1
* MySql 8.0 +

## 开发环境下安装

安装配置MySql，并在MySql新建一个数据库Schema，记住这个Shema的名字跟访问MySql的账号和密码，后面会用到。

注意Windows下安装Node.js时，要勾选这个选项（图像处理库Sharp要用到）：

>Automatically install necessary tools. Note that this will also install Chocolatey. The script will pop-up in a new window after the installation completes.


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
```console
#跟服务端一样，第一条命令可以通过下载并解压zip包代替

git clone https://github.com/rxdrag/rx-models-client.git

cd rx-models-client

npm install

npm run start
```
命令执行成功后，在浏览器输入：http://localhost:3001/install，显示只有两步的安装向导。在第一页输入MySql用到的数据库信息

![第一步](/img/tutorial/install1.jpg)

在第二页输入超级管理员账号账号密码。勾选“安装演示账号”选项，会添加一个用户名密码为demo/demo的演示账号，演示账号只有读权限没有写权限

![第二步](/img/tutorial/install2.jpg)

这步能够成功执行，那么rxModels就安装成功了，安装完成后会自动跳转到登录页面。

安装过程中有任何问题欢迎发issue或者联系作者。

## 发布环境下安装
不同的服务商，会有不同的安装配置，这部分已经超出了rxModels本身，请参考博客文章，如果博客里没有，就是作者还没有来得及写。

配置好环境以后，具体安装步骤跟开发环境下一样，跟着Install向导走就行。
