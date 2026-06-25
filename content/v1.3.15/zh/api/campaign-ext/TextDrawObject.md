---
title: "TextDrawObject"
description: "TextDrawObject 的自动生成类参考。"
---
# TextDrawObject

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct TextDrawObject : IDrawObject`
**Base:** `IDrawObject`
**File:** `TaleWorlds.TwoDimension/TextDrawObject.cs`

## 概述

`TextDrawObject` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Invalid` | `public static TextDrawObject Invalid { get; }` |

## 主要方法

### Create
`public static TextDrawObject Create(float vertices, float uvs, uint indices, float text_MeshWidth, float text_MeshHeight, in Rectangle2D rectangle)`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
TextDrawObject.Create(0, 0, 0, 0, 0, rectangle);
```

### ConvertToHashInPlace
`public void ConvertToHashInPlace()`

**用途 / Purpose:** 把「to hash in place」转换为另一种表示或类型。

```csharp
// 先通过子系统 API 拿到 TextDrawObject 实例
TextDrawObject textDrawObject = ...;
textDrawObject.ConvertToHashInPlace();
```

## 使用示例

```csharp
TextDrawObject.Create(0, 0, 0, 0, 0, rectangle);
```

## 参见

- [本区域目录](../)