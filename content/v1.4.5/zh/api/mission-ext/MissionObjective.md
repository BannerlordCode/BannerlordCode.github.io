---
title: "MissionObjective"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionObjective`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionObjective

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObjective`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Objectives/MissionObjective.cs`

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
| `IsActive` | `public bool IsActive { get; }` |
| `IsStarted` | `public bool IsStarted { get; }` |
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `Mission` | `public Mission Mission { get; }` |
| `ObjectiveGiver` | `public BasicCharacterObject ObjectiveGiver { get; }` |

## 主要方法

### SetName
`public GenericMissionObjectiveBuilder SetName(TextObject name)`

**用途 / Purpose:** 设置 `name` 的值或状态。

### SetDescription
`public GenericMissionObjectiveBuilder SetDescription(TextObject description)`

**用途 / Purpose:** 设置 `description` 的值或状态。

### SetObjectiveGiver
`public GenericMissionObjectiveBuilder SetObjectiveGiver(BasicCharacterObject objectiveGiver)`

**用途 / Purpose:** 设置 `objective giver` 的值或状态。

### SetInitialTargets
`public GenericMissionObjectiveBuilder SetInitialTargets(params MissionObjectiveTarget targets)`

**用途 / Purpose:** 设置 `initial targets` 的值或状态。

### SetIsActivationRequirementsMetCallback
`public GenericMissionObjectiveBuilder SetIsActivationRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**用途 / Purpose:** 设置 `is activation requirements met callback` 的值或状态。

### SetIsCompletionRequirementsMetCallback
`public GenericMissionObjectiveBuilder SetIsCompletionRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**用途 / Purpose:** 设置 `is completion requirements met callback` 的值或状态。

### SetOnStartCallback
`public GenericMissionObjectiveBuilder SetOnStartCallback(Action<MissionObjective> callback)`

**用途 / Purpose:** 设置 `on start callback` 的值或状态。

### SetOnCompleteCallback
`public GenericMissionObjectiveBuilder SetOnCompleteCallback(Action<MissionObjective> callback)`

**用途 / Purpose:** 设置 `on complete callback` 的值或状态。

### SetOnTickCallback
`public GenericMissionObjectiveBuilder SetOnTickCallback(Action<MissionObjective, float> callback)`

**用途 / Purpose:** 设置 `on tick callback` 的值或状态。

### SetProgressCallback
`public GenericMissionObjectiveBuilder SetProgressCallback(Func<MissionObjective, MissionObjectiveProgressInfo> callback)`

**用途 / Purpose:** 设置 `progress callback` 的值或状态。

### Build
`public MissionObjective Build()`

**用途 / Purpose:** 处理 `build` 相关逻辑。

### SetIsActiveCallback
`public GenericMissionObjectiveTargetBuilder<T> SetIsActiveCallback(Func<T, bool> callback)`

**用途 / Purpose:** 设置 `is active callback` 的值或状态。

### SetGetGlobalPositionCallback
`public GenericMissionObjectiveTargetBuilder<T> SetGetGlobalPositionCallback(Func<T, Vec3> callback)`

**用途 / Purpose:** 设置 `get global position callback` 的值或状态。

### SetGetNameCallback
`public GenericMissionObjectiveTargetBuilder<T> SetGetNameCallback(Func<T, TextObject> callback)`

**用途 / Purpose:** 设置 `get name callback` 的值或状态。

### Build
`public MissionObjectiveTarget<T> Build()`

**用途 / Purpose:** 处理 `build` 相关逻辑。

### GetCurrentProgress
`public virtual MissionObjectiveProgressInfo GetCurrentProgress()`

**用途 / Purpose:** 获取 `current progress` 的当前值。

### SetObjectiveGiver
`public void SetObjectiveGiver(BasicCharacterObject objectiveGiver)`

**用途 / Purpose:** 设置 `objective giver` 的值或状态。

### AddTarget
`public void AddTarget(MissionObjectiveTarget target)`

**用途 / Purpose:** 向当前集合/状态中添加 `target`。

### RemoveTarget
`public void RemoveTarget(MissionObjectiveTarget target)`

**用途 / Purpose:** 从当前集合/状态中移除 `target`。

### ClearTargets
`public void ClearTargets()`

**用途 / Purpose:** 处理 `clear targets` 相关逻辑。

### GetTargetsCopy
`public MBReadOnlyList<MissionObjectiveTarget> GetTargetsCopy()`

**用途 / Purpose:** 获取 `targets copy` 的当前值。

### CreateGenericObjectiveBuilder
`public static GenericMissionObjectiveBuilder CreateGenericObjectiveBuilder(Mission mission, string id, TextObject name = null, TextObject description = null)`

**用途 / Purpose:** 创建一个 `generic objective builder` 实例或对象。

## 使用示例

```csharp
var implementation = new CustomMissionObjective();
```

## 参见

- [完整类目录](../catalog)