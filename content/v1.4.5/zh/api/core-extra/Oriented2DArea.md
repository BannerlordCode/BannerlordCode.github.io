---
title: "Oriented2DArea"
description: "Oriented2DArea 的自动生成类参考。"
---
# Oriented2DArea

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Oriented2DArea`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/Oriented2DArea.cs`

## 概述

`Oriented2DArea` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TopLeft` | `public Vec2 TopLeft { get; }` |
| `TopRight` | `public Vec2 TopRight { get; }` |
| `BottomLeft` | `public Vec2 BottomLeft { get; }` |
| `BottomRight` | `public Vec2 BottomRight { get; }` |
| `this` | `public Vec2 this { get; }` |
| `GlobalCenter` | `public Vec2 GlobalCenter { get; }` |
| `GlobalForward` | `public Vec2 GlobalForward { get; }` |
| `LocalDimensions` | `public Vec2 LocalDimensions { get; }` |

## 主要方法

### SetGlobalCenter
`public void SetGlobalCenter(in Vec2 globalCenter)`

**用途 / Purpose:** 为 「global center」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Oriented2DArea 实例
Oriented2DArea oriented2DArea = ...;
oriented2DArea.SetGlobalCenter(globalCenter);
```

### SetLocalDimensions
`public void SetLocalDimensions(in Vec2 localDimensions)`

**用途 / Purpose:** 为 「local dimensions」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Oriented2DArea 实例
Oriented2DArea oriented2DArea = ...;
oriented2DArea.SetLocalDimensions(localDimensions);
```

### Overlaps
`public bool Overlaps(in Oriented2DArea otherArea, float clearanceMargin)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Oriented2DArea 实例
Oriented2DArea oriented2DArea = ...;
var result = oriented2DArea.Overlaps(otherArea, 0);
```

### Intersects
`public bool Intersects(in LineSegment2D line, float clearanceMargin)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Oriented2DArea 实例
Oriented2DArea oriented2DArea = ...;
var result = oriented2DArea.Intersects(line, 0);
```

### GetCorners
`public Corners GetCorners()`

**用途 / Purpose:** 读取并返回当前对象中 「corners」 的结果。

```csharp
// 先通过子系统 API 拿到 Oriented2DArea 实例
Oriented2DArea oriented2DArea = ...;
var result = oriented2DArea.GetCorners();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Oriented2DArea oriented2DArea = ...;
oriented2DArea.SetGlobalCenter(globalCenter);
```

## 参见

- [本区域目录](../)