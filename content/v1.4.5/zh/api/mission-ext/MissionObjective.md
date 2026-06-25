---
title: "MissionObjective"
description: "MissionObjective 的自动生成类参考。"
---
# MissionObjective

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionObjective`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Objectives/MissionObjective.cs`

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

**用途 / Purpose:** 为 name 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetName(name);
```

### SetDescription
`public GenericMissionObjectiveBuilder SetDescription(TextObject description)`

**用途 / Purpose:** 为 description 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetDescription(description);
```

### SetObjectiveGiver
`public GenericMissionObjectiveBuilder SetObjectiveGiver(BasicCharacterObject objectiveGiver)`

**用途 / Purpose:** 为 objective giver 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetObjectiveGiver(objectiveGiver);
```

### SetInitialTargets
`public GenericMissionObjectiveBuilder SetInitialTargets(params MissionObjectiveTarget targets)`

**用途 / Purpose:** 为 initial targets 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetInitialTargets(targets);
```

### SetIsActivationRequirementsMetCallback
`public GenericMissionObjectiveBuilder SetIsActivationRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**用途 / Purpose:** 为 is activation requirements met callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetIsActivationRequirementsMetCallback(func<MissionObjective, false);
```

### SetIsCompletionRequirementsMetCallback
`public GenericMissionObjectiveBuilder SetIsCompletionRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**用途 / Purpose:** 为 is completion requirements met callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetIsCompletionRequirementsMetCallback(func<MissionObjective, false);
```

### SetOnStartCallback
`public GenericMissionObjectiveBuilder SetOnStartCallback(Action<MissionObjective> callback)`

**用途 / Purpose:** 为 on start callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetOnStartCallback(callback);
```

### SetOnCompleteCallback
`public GenericMissionObjectiveBuilder SetOnCompleteCallback(Action<MissionObjective> callback)`

**用途 / Purpose:** 为 on complete callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetOnCompleteCallback(callback);
```

### SetOnTickCallback
`public GenericMissionObjectiveBuilder SetOnTickCallback(Action<MissionObjective, float> callback)`

**用途 / Purpose:** 为 on tick callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetOnTickCallback(action<MissionObjective, 0);
```

### SetProgressCallback
`public GenericMissionObjectiveBuilder SetProgressCallback(Func<MissionObjective, MissionObjectiveProgressInfo> callback)`

**用途 / Purpose:** 为 progress callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetProgressCallback(func<MissionObjective, callback);
```

### Build
`public MissionObjective Build()`

**用途 / Purpose:** 构建当前对象的实例或表示。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.Build();
```

### SetIsActiveCallback
`public GenericMissionObjectiveTargetBuilder<T> SetIsActiveCallback(Func<T, bool> callback)`

**用途 / Purpose:** 为 is active callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetIsActiveCallback(func<T, false);
```

### SetGetGlobalPositionCallback
`public GenericMissionObjectiveTargetBuilder<T> SetGetGlobalPositionCallback(Func<T, Vec3> callback)`

**用途 / Purpose:** 为 get global position callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetGetGlobalPositionCallback(func<T, callback);
```

### SetGetNameCallback
`public GenericMissionObjectiveTargetBuilder<T> SetGetNameCallback(Func<T, TextObject> callback)`

**用途 / Purpose:** 为 get name callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.SetGetNameCallback(func<T, callback);
```

### Build
`public MissionObjectiveTarget<T> Build()`

**用途 / Purpose:** 构建当前对象的实例或表示。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.Build();
```

### GetCurrentProgress
`public virtual MissionObjectiveProgressInfo GetCurrentProgress()`

**用途 / Purpose:** 读取并返回当前对象中 current progress 的结果。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.GetCurrentProgress();
```

### SetObjectiveGiver
`public void SetObjectiveGiver(BasicCharacterObject objectiveGiver)`

**用途 / Purpose:** 为 objective giver 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
missionObjective.SetObjectiveGiver(objectiveGiver);
```

### AddTarget
`public void AddTarget(MissionObjectiveTarget target)`

**用途 / Purpose:** 将 target 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
missionObjective.AddTarget(target);
```

### RemoveTarget
`public void RemoveTarget(MissionObjectiveTarget target)`

**用途 / Purpose:** 从当前容器或状态中移除 target。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
missionObjective.RemoveTarget(target);
```

### ClearTargets
`public void ClearTargets()`

**用途 / Purpose:** 清空当前对象中的targets。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
missionObjective.ClearTargets();
```

### GetTargetsCopy
`public MBReadOnlyList<MissionObjectiveTarget> GetTargetsCopy()`

**用途 / Purpose:** 读取并返回当前对象中 targets copy 的结果。

```csharp
// 先通过子系统 API 拿到 MissionObjective 实例
MissionObjective missionObjective = ...;
var result = missionObjective.GetTargetsCopy();
```

### CreateGenericObjectiveBuilder
`public static GenericMissionObjectiveBuilder CreateGenericObjectiveBuilder(Mission mission, string id, TextObject name = null, TextObject description = null)`

**用途 / Purpose:** 构建一个新的 generic objective builder 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MissionObjective.CreateGenericObjectiveBuilder(mission, "example", null, null);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionObjective instance = ...;
```

## 参见

- [本区域目录](../)