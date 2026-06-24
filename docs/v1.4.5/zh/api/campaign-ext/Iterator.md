<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Iterator`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Iterator

**命名空间:** Jose
**模块:** Jose
**类型:** `public class Iterator`
**领域:** campaign-ext

## 概述

`Iterator` 位于 `Jose`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `Jose` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Next
`public byte Next(bool decode = true)`

**用途 / Purpose:** 处理 `next` 相关逻辑。

### Serialize
`public static string Serialize(params byte parts)`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

### Serialize
`public static string Serialize(byte header, string payload, params byte other)`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

### Parse
`public static byte Parse(string token)`

**用途 / Purpose:** 处理 `parse` 相关逻辑。

### Iterate
`public static Iterator Iterate(string token)`

**用途 / Purpose:** 处理 `iterate` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 Iterator 实例，再调用它的公开方法
var value = new Iterator();
value.Next(false);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
