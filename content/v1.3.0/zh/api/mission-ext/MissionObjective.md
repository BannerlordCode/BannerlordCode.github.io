---
title: "MissionObjective"
description: "MissionObjective 的自动生成类参考。"
---
# MissionObjective

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObjective`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs`

## 概述

`MissionObjective` 位于 `TaleWorlds.MountAndBlade.Missions.Objectives`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Missions.Objectives` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `UniqueId` | `public abstract string UniqueId { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `Description` | `public abstract TextObject Description { get; }` |
| `ObjectiveGiver` | `public virtual BasicCharacterObject ObjectiveGiver { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Mission` | `public Mission Mission { get; }` |

## 主要方法

### ForceComplete
`public void ForceComplete()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
missionObjective.ForceComplete();
```

### GetIsActivationRequirementsMet
`public bool GetIsActivationRequirementsMet()`

**用途 / Purpose:** 读取并返回当前对象中 「is activation requirements met」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.GetIsActivationRequirementsMet();
```

### GetIsCompletionRequirementsMet
`public bool GetIsCompletionRequirementsMet()`

**用途 / Purpose:** 读取并返回当前对象中 「is completion requirements met」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.GetIsCompletionRequirementsMet();
```

### GetCurrentProgress
`public virtual MissionObjectiveProgressInfo GetCurrentProgress()`

**用途 / Purpose:** 读取并返回当前对象中 「current progress」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.GetCurrentProgress();
```

### GetTargets
`public abstract IMissionObjectiveTarget GetTargets()`

**用途 / Purpose:** 读取并返回当前对象中 「targets」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.GetTargets();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionObjective instance = ...;
```

## 参见

- [本区域目录](../)