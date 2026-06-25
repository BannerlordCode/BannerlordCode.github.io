---
title: "TacticCoordinatedRetreat"
description: "TacticCoordinatedRetreat 的自动生成类参考。"
---
# TacticCoordinatedRetreat

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TacticCoordinatedRetreat`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TacticCoordinatedRetreat.cs`

## 概述

`TacticCoordinatedRetreat` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### TacticCoordinatedRetreat
`public class TacticCoordinatedRetreat(Team team)`

**用途 / Purpose:** 处理与 「tactic coordinated retreat」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TacticCoordinatedRetreat 实例
TacticCoordinatedRetreat tacticCoordinatedRetreat = ...;
var result = tacticCoordinatedRetreat.TacticCoordinatedRetreat(team);
```

### TickOccasionally
`public override void TickOccasionally()`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「occasionally」的状态。

```csharp
// 先通过子系统 API 拿到 TacticCoordinatedRetreat 实例
TacticCoordinatedRetreat tacticCoordinatedRetreat = ...;
tacticCoordinatedRetreat.TickOccasionally();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TacticCoordinatedRetreat tacticCoordinatedRetreat = ...;
tacticCoordinatedRetreat.TacticCoordinatedRetreat(team);
```

## 参见

- [本区域目录](../)