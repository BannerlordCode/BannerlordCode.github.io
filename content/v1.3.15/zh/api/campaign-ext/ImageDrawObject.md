---
title: "ImageDrawObject"
description: "ImageDrawObject 的自动生成类参考。"
---
# ImageDrawObject

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public struct ImageDrawObject : IDrawObject`
**Base:** `IDrawObject`
**File:** `TaleWorlds.TwoDimension/ImageDrawObject.cs`

## 概述

`ImageDrawObject` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Invalid` | `public static ImageDrawObject Invalid { get; }` |

## 主要方法

### Create
`public static ImageDrawObject Create(in Rectangle2D rectangle, in Vec2 uvMin, in Vec2 uvMax)`

**用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
ImageDrawObject.Create(rectangle, uvMin, uvMax);
```

## 使用示例

```csharp
ImageDrawObject.Create(rectangle, uvMin, uvMax);
```

## 参见

- [本区域目录](../)