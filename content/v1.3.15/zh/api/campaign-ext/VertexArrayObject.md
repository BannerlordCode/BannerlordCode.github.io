---
title: "VertexArrayObject"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VertexArrayObject`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VertexArrayObject

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class VertexArrayObject`
**Base:** 无
**File:** `TaleWorlds.TwoDimension.Standalone/VertexArrayObject.cs`

## 概述

`VertexArrayObject` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### LoadVertexData
`public void LoadVertexData(float vertices)`

**用途 / Purpose:** 加载 `vertex data` 数据。

### LoadUVData
`public void LoadUVData(float uvs)`

**用途 / Purpose:** 加载 `u v data` 数据。

### LoadIndexData
`public void LoadIndexData(uint indices)`

**用途 / Purpose:** 加载 `index data` 数据。

### Bind
`public void Bind()`

**用途 / Purpose:** 处理 `bind` 相关逻辑。

### UnBind
`public static void UnBind()`

**用途 / Purpose:** 处理 `un bind` 相关逻辑。

### Create
`public static VertexArrayObject Create()`

**用途 / Purpose:** 创建一个 `create` 实例或对象。

### CreateWithUVBuffer
`public static VertexArrayObject CreateWithUVBuffer()`

**用途 / Purpose:** 创建一个 `with u v buffer` 实例或对象。

## 使用示例

```csharp
var value = new VertexArrayObject();
value.LoadVertexData(0);
```

## 参见

- [完整类目录](../catalog)