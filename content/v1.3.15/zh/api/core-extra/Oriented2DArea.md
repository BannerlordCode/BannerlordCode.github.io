---
title: "Oriented2DArea"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Oriented2DArea`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Oriented2DArea

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Oriented2DArea`
**Base:** 无
**File:** `TaleWorlds.Library/Oriented2DArea.cs`

## 概述

`Oriented2DArea` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GlobalCenter` | `public Vec2 GlobalCenter { get; }` |
| `GlobalForward` | `public Vec2 GlobalForward { get; }` |
| `LocalDimensions` | `public Vec2 LocalDimensions { get; }` |
| `TopLeft` | `public Vec2 TopLeft { get; }` |
| `TopRight` | `public Vec2 TopRight { get; }` |
| `BottomLeft` | `public Vec2 BottomLeft { get; }` |
| `BottomRight` | `public Vec2 BottomRight { get; }` |
| `this` | `public Vec2 this { get; }` |

## 主要方法

### SetGlobalCenter
`public void SetGlobalCenter(in Vec2 globalCenter)`

**用途 / Purpose:** 设置 `global center` 的值或状态。

### SetLocalDimensions
`public void SetLocalDimensions(in Vec2 localDimensions)`

**用途 / Purpose:** 设置 `local dimensions` 的值或状态。

### Overlaps
`public bool Overlaps(in Oriented2DArea otherArea, float clearanceMargin)`

**用途 / Purpose:** 处理 `overlaps` 相关逻辑。

### Intersects
`public bool Intersects(in LineSegment2D line, float clearanceMargin)`

**用途 / Purpose:** 处理 `intersects` 相关逻辑。

### GetCorners
`public Oriented2DArea.Corners GetCorners()`

**用途 / Purpose:** 获取 `corners` 的当前值。

## 使用示例

```csharp
var value = new Oriented2DArea();
value.SetGlobalCenter(globalCenter);
```

## 参见

- [完整类目录](../catalog)