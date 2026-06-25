---
title: "VertexArrayObject"
description: "VertexArrayObject 的自动生成类参考。"
---
# VertexArrayObject

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class VertexArrayObject`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/VertexArrayObject.cs`

## 概述

`VertexArrayObject` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### LoadVertexData
`public void LoadVertexData(float vertices)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 vertex data。

```csharp
// 先通过子系统 API 拿到 VertexArrayObject 实例
VertexArrayObject vertexArrayObject = ...;
vertexArrayObject.LoadVertexData(0);
```

### LoadUVData
`public void LoadUVData(float uvs)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 u v data。

```csharp
// 先通过子系统 API 拿到 VertexArrayObject 实例
VertexArrayObject vertexArrayObject = ...;
vertexArrayObject.LoadUVData(0);
```

### LoadIndexData
`public void LoadIndexData(uint indices)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 index data。

```csharp
// 先通过子系统 API 拿到 VertexArrayObject 实例
VertexArrayObject vertexArrayObject = ...;
vertexArrayObject.LoadIndexData(0);
```

### Bind
`public void Bind()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Bind 对应的操作。

```csharp
// 先通过子系统 API 拿到 VertexArrayObject 实例
VertexArrayObject vertexArrayObject = ...;
vertexArrayObject.Bind();
```

### UnBind
`public static void UnBind()`

**用途 / Purpose:** **用途 / Purpose:** 调用 UnBind 对应的操作。

```csharp
// 静态调用，不需要实例
VertexArrayObject.UnBind();
```

### Create
`public static VertexArrayObject Create()`

**用途 / Purpose:** **用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
VertexArrayObject.Create();
```

### CreateWithUVBuffer
`public static VertexArrayObject CreateWithUVBuffer()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 with u v buffer 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
VertexArrayObject.CreateWithUVBuffer();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VertexArrayObject vertexArrayObject = ...;
vertexArrayObject.LoadVertexData(0);
```

## 参见

- [本区域目录](../)