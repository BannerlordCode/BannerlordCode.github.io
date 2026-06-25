---
title: "Corners"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Corners`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Corners

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** `public struct Corners`
**领域:** core-extra

## 概述

`Corners` 位于 `TaleWorlds.Library`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先从游戏状态中拿到一个 Corners 实例，再调用它的公开方法
var value = new Corners();
value.SetGlobalCenter(globalCenter);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
