---
title: "StandingPointForRangedArea"
description: "StandingPointForRangedArea 的自动生成类参考。"
---
# StandingPointForRangedArea

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPointForRangedArea : StandingPoint`
**Base:** `StandingPoint`
**File:** `TaleWorlds.MountAndBlade/StandingPointForRangedArea.cs`

## 概述

`StandingPointForRangedArea` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DisableScriptedFrameFlags` | `public override Agent.AIScriptedFrameFlags DisableScriptedFrameFlags { get; }` |

## 主要方法

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 disabled for agent 状态或条件。

```csharp
// 先通过子系统 API 拿到 StandingPointForRangedArea 实例
StandingPointForRangedArea standingPointForRangedArea = ...;
var result = standingPointForRangedArea.IsDisabledForAgent(agent);
```

### GetUsageScoreForAgent
`public override float GetUsageScoreForAgent(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 usage score for agent 的结果。

```csharp
// 先通过子系统 API 拿到 StandingPointForRangedArea 实例
StandingPointForRangedArea standingPointForRangedArea = ...;
var result = standingPointForRangedArea.GetUsageScoreForAgent(agent);
```

### HasAlternative
`public override bool HasAlternative()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 alternative。

```csharp
// 先通过子系统 API 拿到 StandingPointForRangedArea 实例
StandingPointForRangedArea standingPointForRangedArea = ...;
var result = standingPointForRangedArea.HasAlternative();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 StandingPointForRangedArea 实例
StandingPointForRangedArea standingPointForRangedArea = ...;
var result = standingPointForRangedArea.GetTickRequirement();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StandingPointForRangedArea standingPointForRangedArea = ...;
standingPointForRangedArea.IsDisabledForAgent(agent);
```

## 参见

- [本区域目录](../)