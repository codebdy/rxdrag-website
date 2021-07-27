---
sidebar_position: 2
---

# 业务实体模型

业务实体模型是基于ER图实现的，目前仅支持实体、关系、枚举三个特性。继承与实体嵌套计划在下一个版本中支持。

该模块主要是一些图形化的拖拽操作，用文字描述这样的操作，是一件枯燥的事情，阅读这样的文字也会相当无聊。

所以，关于如何操作，自己点点试试就好了。或许，出个操作视频是个比较不错的主意，不过要等作者有空的时候。

本文只是概要说一下其中的一些关键点。

## 包

一组实体、关系跟ER图的组合，包的概念只是给数据管理提供了方便，对数据库映射没有什么影响。

除了添加、修改删除包以及包内部所包含的实体、关系、ER图等常规操作，包还可以单独发布、导出、导入、导出模型接口类等。

### 发布
没有被发布的包，仅仅是数据库中的一条数据记录，不管怎么修改，保存多少次，都不会对系统的运行产生任何影响，更没法通过接口操作它实体的实例数据。

一旦包被发布，意味着它深度融入到我们系统里了，可以通过通用接口增、删、查、改它的数据了。

包的发布不能被撤销，除非您深度了解系统原理，到后端删除相应的发布文件。

这个文件的目录是：`\schemas`。一个包对应一个文件，文件名字是包的UUID，删除文件并重启后端，这个包就撤销发布了。但是这个包并没有因此被删除，您还可以再次发布它。

看起来相当麻烦吧？所以，请谨慎操作包的发布。

### 导出JSON
把一个整个包的内容，导出成一个JSON文件，并且这个文件还可以被其他人导入并使用。

### 导入包
就是把上面说的JSON文件，再次导入。但是重复导入不行，系统会提示错误。

### 导出模型接口类
利用IDE对TypeScript的类型识别，能够提高开发效率，减少调试Bug的时间。

导出这些接口类的目的，就是充分利用TypeScript的这个优势。

#### 导出文件样板

一个Entity，对应一个文件，以RxUser为例，它的代码是这个样子：
```typescript
import { RxRole } from './RxRole';
import { RxMedia } from './RxMedia';
import { RxMediaFolder } from './RxMediaFolder';

export const EntityRxUser = 'RxUser';

export interface RxUser {
  id?: number;
  name: string;
  loginName: string;
  email?: string;
  isSupper?: boolean;
  isDemo?: boolean;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: RxRole[];
  medias?: RxMedia[];
  mediaFolders?: RxMediaFolder[];
  avatar?: RxMedia;
}
```
创建一个新实例的时候，是没有ID的，所以id字段可以为空。其他字段，根据UI界面的设置，决定其是否可空。

如果一个字段被设置为`查询时隐藏`，那么这个字段不会出现在导出的接口文件中。

文件中还有一个常量 `EntityRxUser`，这个常量可以在操作数据时使用，避免了不容易排错的魔鬼字符串。

#### 接口使用样例
比如在React中，要查询所有的 RxUser实例，可以这样写代码：

```typescript
import { useMagicQuery, MagicQueryBuilder } from '@rxdrag/rxmodels-swr';
import { RxUser, EntityRxUser } from 'entity-interface/RxUser';

...
export function AReactComponent(){
  const {data, loading, error} = useMagicQuery<RxUser[]>(
    new MagicQueryBuilder().setEntity(EntityRxUser)
  )
}
...

```

## 实体

实体分为普通实体跟枚举两种，普通实体会映射到数据库，生成一个数据库表格。

枚举更像npm的开发时依赖，只是为了代码可读性更强，对数据库没什么影响，枚举类型的字段映射到数据库，就是一个string类型的字段。

图形界面编辑枚举值目前比较简陋，只能输入JSON字符串，后面的版本应该会优化。

### 隐藏与删除

* 删除：工具条上的删除按钮，树形列表里实体节点上的鼠标悬停时也有删除按钮，点击这两处删除，会把实体真的删除掉，包括跟实体有关的的关系也会被一并删除。
* 隐藏：在ER图里，鼠标悬停时，会显示一个隐藏实体的按钮，点击这个按钮只是把这个实体从当前ER图中移除，这个实体还是存在的，并没有被真正删除。

## 字段

字段目前支持如下类型：
* `Number`: 数字
* `Boolean`: 布尔
* `String`: 字符串
* `Date`: 日期
* `SimpleJson`: JSON数据，在接口中表现为 any
* `SimpleArray`: 数组，在接口中表现为any[]
* `Enum`: 枚举

若需要其它类型支持，发issue吧，后续版本加上。

## 关系

在数据库层，关系是被映射为外键的，在UI层，把关系放在跟实体并列的地位。

关系也归属与某个包，具体的归属规则是这样的：

* 1对1关系跟多对多关系，通过拥有者指定，关系跟拥有者一个包
* 1对多跟多对1关系中，关系归属于多头方

导出的时候，关系会随所归属的包被导出。

### 1对1

![1对1](/img/tutorial/one-one.png)

假如一个用户只能对应一个 RxMedia 作为头像，一个 RxMedia 只能作为一个用户的头像，那么这就是个一对一的关系。

RxUser 拥有这个关系，那么映射到数据库，在 `rx_user` 表中会有一个字段 `avatarId` 对应 RxMedia 的 id。

对应到TypeORM层，相当于在 RxUser 实体的 `avatar` 字段添加 `JoinColumn`。

### 1对多

![1对1](/img/tutorial/one-many.png)

### 多对1

### 多对多

#### 多对多关系的附加信息
有时候想在多对多关系中，添加一些附加信息，比如图片的ALT文本。Larvel 中可以使用 Povit，TypeORM并不提供这样的支持。可以把一个多对多关系，转化成两个1对多关系来解决这个问题。
查询接口支持多级关联查询，用起来跟Povit一样方便。