---
title: "MissionObjective"
description: "MissionObjective：TaleWorlds.MountAndBlade.Missions.Objectives 的 public 类；公开成员 34 个（方法 20、属性 10、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionObjective

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Objectives`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionObjective`
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionObjective 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs。它是一个 public 类（abstract），继承链为 MissionObjective。public/protected 成员共 34 个：20 方法、10 属性、1 事件、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionObjective 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Missions.Objectives`，继承链 MissionObjective。成员构成以方法为主（方法 20/34，属性 10/34），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UniqueId` | `public abstract string UniqueId` | 属性 |
| `Name` | `public abstract TextObject Name` | 属性 |
| `Description` | `public abstract TextObject Description` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `IsStarted` | `public bool IsStarted` | 属性 |
| `IsCompleted` | `public bool IsCompleted` | 属性 |
| `Mission` | `public Mission Mission` | 属性 |
| `ObjectiveGiver` | `public BasicCharacterObject ObjectiveGiver` | 属性 |
| `OnUpdated;` | `public event Action OnUpdated;` | 事件 |
| `MissionObjective` | `public MissionObjective(Mission mission)` | 构造函数 |
| `GetCurrentProgress` | `public virtual MissionObjectiveProgressInfo GetCurrentProgress()` | 方法 |
| `SetObjectiveGiver` | `public void SetObjectiveGiver(BasicCharacterObject objectiveGiver)` | 方法 |
| `AddTarget` | `public void AddTarget(MissionObjectiveTarget target)` | 方法 |
| `RemoveTarget` | `public void RemoveTarget(MissionObjectiveTarget target)` | 方法 |
| `ClearTargets` | `public void ClearTargets()` | 方法 |
| `MBReadOnlyList` | `public MBReadOnlyList<MissionObjectiveTarget>GetTargetsCopy()` | 方法 |
| `MBReadOnlyList` | `protected MBReadOnlyList<TTarget>GetTargetsCopy<TTarget>() where TTarget : MissionObjectiveTarget` | 方法 |
| `IsActivationRequirementsMet` | `protected virtual bool IsActivationRequirementsMet()` | 方法 |
| `IsCompletionRequirementsMet` | `protected virtual bool IsCompletionRequirementsMet()` | 方法 |
| `OnStart` | `protected virtual void OnStart()` | 方法 |
| `OnComplete` | `protected virtual void OnComplete()` | 方法 |
| `OnTick` | `protected virtual void OnTick(float dt)` | 方法 |
| `OnTargetAdded` | `protected virtual void OnTargetAdded(MissionObjectiveTarget target)` | 方法 |
| `OnTargetRemoved` | `protected virtual void OnTargetRemoved(MissionObjectiveTarget target)` | 方法 |
| `OnTargetsCleared` | `protected virtual void OnTargetsCleared()` | 方法 |
| `CreateGenericObjectiveBuilder` | `public static MissionObjective.GenericMissionObjectiveBuilder CreateGenericObjectiveBuilder(Mission mission, string id, TextObject name = null, TextObject description = null)` | 方法 |
| `MissionObjective.GenericMissionObjectiveTargetBuilder` | `public static MissionObjective.GenericMissionObjectiveTargetBuilder<T>CreateGenericTargetBuilder<T>(T target, TextObject name, Vec3 staticPosition)` | 方法 |
| `MissionObjective.GenericMissionObjectiveTargetBuilder` | `public static MissionObjective.GenericMissionObjectiveTargetBuilder<T>CreateGenericTargetBuilder<T>(T target)` | 方法 |
| `MissionObjective.GenericMissionObjectiveTargetBuilder` | `public static MissionObjective.GenericMissionObjectiveTargetBuilder<T>CreateGenericTargetBuilder<T>(T target, TextObject name)` | 方法 |
| `MissionObjective.GenericMissionObjectiveTargetBuilder` | `public static MissionObjective.GenericMissionObjectiveTargetBuilder<T>CreateGenericTargetBuilder<T>(T target, Vec3 staticPosition)` | 方法 |
| `GenericMissionObjectiveBuilder` | `public struct GenericMissionObjectiveBuilder` | 属性 |
| `GenericMissionObjectiveTargetBuilder` | `public struct GenericMissionObjectiveTargetBuilder<T>` | 属性 |
| `GenericMissionObjectiveBuilder` | `public struct GenericMissionObjectiveBuilder` | 嵌套类型 |
| `GenericMissionObjectiveTargetBuilder` | `public struct GenericMissionObjectiveTargetBuilder<T>` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 MissionObjectiveProgressInfo](../MissionObjectiveProgressInfo/)
- [同命名空间 MissionObjectiveTarget](../MissionObjectiveTarget/)
- [同命名空间 MissionObjectiveTarget](../MissionObjectiveTarget__1/)
