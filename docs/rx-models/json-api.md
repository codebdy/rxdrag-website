---
sidebar_position: 3
---

# JSON数据接口

rxModels 提供了五个通用JSON接口，用这个五个接口，可以完成增、删、查、改、上传等功能。

接口输入时JSON格式数据，输出也是JSON格式数据。

可以用指令（格式 `@directive`）的方式扩展接口，指令支持热拔插，您可以定义自己指令插入到系统里。

## 接口测试
直接在客户端界面，输入JSON格式的请求，就可以查询或者修改数据。

![API使用](/img/tutorial/api.jpg)

## /get/...

数据查询接口。

JSON格式的查询参数，编码成url格式，使用 web 请求的 get method 查询。

相比把参数放进Post method 的 body 里，get 有个明显的是优势，就是可以使用基于url的缓存，比如 rxmodels-swr 使用就是 SWR。可以充分使用SWR的缓存机制。

### 请求格式

```json
{
  "entity @directive": "EntityName",
  "@directive": true,
  "condition @directive": "xx",
  "relationName":{
    ...
  }
}
```

请求中，以 `@` 开头的就是指令。指令是扩展接口的灵活方式，以后会有越来越多的指令被开发出来。

### 简单示例
分页查询 RxUser 实体，每页2条数据，附带关联 roles 信息。

```json
{
  "entity": "RxUser",
  "roles": {},
  "@paginate":[2,0]
}
```

其中@paginate是一条指令用于分页，目前的版本支持把@paginate指令放在 entity 后面。

```json
{
  "entity @paginate(2, 0)": "RxUser",
  "roles": {}
}
```
这两个请求的查询结果是一样的，目前还不确定哪种方式更好，还是两种方式都需要保留。

### 给查询添加条件
```json
{
  "entity": "RxUser",
  "roles": {},
  "@paginate": [2,0],
  "name @like": "%水%"
}
```
添加 `name` 条件跟指令 `@like` 可以查询名字中包含文字“水”的RxUser实例。

如果想让 RxRole 的 name 字段包含“风”，可以这么写：
```json
{
  "entity": "RxUser",
  "@paginate": [2,0],
  "name @like": "%水%",
  "roles": {
    "name @like": "%风%"
  }
}
```
这个查询会返回所有名字包含“水”的 RxUser，并附带名字中包含“风”的RxRole。

如果要剔除 RxRole 名字中不包含“风”的 RxUser，这个查询是满足不了要求的，需要用到更复杂的 `where` 指令：
```json
{
  "entity": "RxUser",
  "@paginate": [2,0],
  "name @like": "%水%",
  "roles": {},
  "@where": "roles.name like '%风%'"
}
```

`@where` 是内置指令，不写 `@` 也能被识别，不过不建议这样做。

`@where` 指令支持类似与 SQL 的 where语句的语法。

关系里面，有个跟 `@where` 指令类似的 `@on`指令，使用这个指令，可以把上面的例子（就是第二个例子）改为：
```json
{
  "entity": "RxUser",
  "@paginate": [2,0],
  "name @like": "%水%",
  "roles": {
    "@on": "name like '%风%'"
  }
}
```

### 条件指令

可以附加到条件上的指令。既可以附加到实体条件上，也可以附加到关系条件上。

* `@equal`: 如果条件不显式指定，默认就是这个指令。
* `@between`: 接受数组参数如：[2, 5]
* `@like`: 跟SQL的 like 一致

### 实体指令
可以附加到实体上的指令，目前支持前面提到的两种附加方式。

* `@getOne`: 只取第一条记录
* `@getMany`: 取多条记录，如果条件不显式指定，默认就是这个指令
* `@orderBy`: 排序指令，参数格式： `{"name":"ASC", "email": "DESC"}`
* `@paginate`: 分页指令，参数格式：`[coustPerPage, pageIndex]`
* `@select`: 选择要获取的字段，参数格式：`["name", "email"...]`
* `@skip`: 跳过指定数量的记录，参数格式：`count`
* `@take`: 取指定数量的记录，参数格式：`count`
* `@tree`: 如果实体支持树形结构，返回一棵树。注意只能在支持树形结构的实体上使用该指令。
* `@where`: 复杂条件指令，支持 SQL 格式字符串，不要担心安全问题，只是伪 SQL，后端会解析成其它人不容易理解的数据结构，并过滤掉SQL注入攻击。

### 关系指令
可以附加到关系上的指令。
* `@count`: 只取关联数量，不取具体数
* `@on`: 类似于SQL 的 on
* `@orderBy`: 排序，同实体 orderBy指令
* `@select`: 同实体 select指令
* `@take`: 同实体 take指令

## /post

## /update

## /delete

## /upload

## 自定义指令
本部分尚未完成，敬请期待...
