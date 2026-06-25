---
title: "GenericMissionObjective"
description: "GenericMissionObjective 的自动生成类参考。"
---
# GenericMissionObjective

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class GenericMissionObjective : MissionObjective`
**Base:** `MissionObjective`
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/GenericMissionObjective.cs`

## 概述

`GenericMissionObjective` 位于 `TaleWorlds.MountAndBlade.Missions.Objectives`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Missions.Objectives` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `UniqueId` | `public override string UniqueId { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `Description` | `public override TextObject Description { get; }` |

## 主要方法

### GetCurrentProgress
`public override MissionObjectiveProgressInfo GetCurrentProgress()`

**用途 / Purpose:** 读取并返回当前对象中 「current progress」 的结果。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjective 实例
GenericMissionObjective genericMissionObjective = ...;
var result = genericMissionObjective.GetCurrentProgress();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GenericMissionObjective genericMissionObjective = ...;
genericMissionObjective.GetCurrentProgress();
```

## 参见

- [本区域目录](../)