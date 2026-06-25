---
title: "FleePosition"
description: "FleePosition 的自动生成类参考。"
---
# FleePosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FleePosition : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FleePosition.cs`

## 概述

`FleePosition` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetSide
`public BattleSideEnum GetSide()`

**用途 / Purpose:** 读取并返回当前对象中 「side」 的结果。

```csharp
// 先通过子系统 API 拿到 FleePosition 实例
FleePosition fleePosition = ...;
var result = fleePosition.GetSide();
```

### GetClosestPointToEscape
`public Vec3 GetClosestPointToEscape(Vec2 position)`

**用途 / Purpose:** 读取并返回当前对象中 「closest point to escape」 的结果。

```csharp
// 先通过子系统 API 拿到 FleePosition 实例
FleePosition fleePosition = ...;
var result = fleePosition.GetClosestPointToEscape(position);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FleePosition fleePosition = ...;
fleePosition.GetSide();
```

## 参见

- [本区域目录](../)