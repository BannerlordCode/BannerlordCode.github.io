---
title: "GenericMissionObjectiveBuilder"
description: "GenericMissionObjectiveBuilder 的自动生成类参考。"
---
# GenericMissionObjectiveBuilder

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct GenericMissionObjectiveBuilder`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs`

## 概述

`GenericMissionObjectiveBuilder` 位于 `TaleWorlds.MountAndBlade.Missions.Objectives`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Missions.Objectives` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetName
`public MissionObjective.GenericMissionObjectiveBuilder SetName(TextObject name)`

**用途 / Purpose:** **用途 / Purpose:** 为 name 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveBuilder 实例
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetName(name);
```

### SetDescription
`public MissionObjective.GenericMissionObjectiveBuilder SetDescription(TextObject description)`

**用途 / Purpose:** **用途 / Purpose:** 为 description 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveBuilder 实例
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetDescription(description);
```

### SetObjectiveGiver
`public MissionObjective.GenericMissionObjectiveBuilder SetObjectiveGiver(BasicCharacterObject objectiveGiver)`

**用途 / Purpose:** **用途 / Purpose:** 为 objective giver 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveBuilder 实例
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetObjectiveGiver(objectiveGiver);
```

### SetInitialTargets
`public MissionObjective.GenericMissionObjectiveBuilder SetInitialTargets(params MissionObjectiveTarget targets)`

**用途 / Purpose:** **用途 / Purpose:** 为 initial targets 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveBuilder 实例
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetInitialTargets(targets);
```

### SetIsActivationRequirementsMetCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetIsActivationRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**用途 / Purpose:** **用途 / Purpose:** 为 is activation requirements met callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveBuilder 实例
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetIsActivationRequirementsMetCallback(func<MissionObjective, false);
```

### SetIsCompletionRequirementsMetCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetIsCompletionRequirementsMetCallback(Func<MissionObjective, bool> callback)`

**用途 / Purpose:** **用途 / Purpose:** 为 is completion requirements met callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveBuilder 实例
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetIsCompletionRequirementsMetCallback(func<MissionObjective, false);
```

### SetOnStartCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetOnStartCallback(Action<MissionObjective> callback)`

**用途 / Purpose:** **用途 / Purpose:** 为 on start callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveBuilder 实例
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetOnStartCallback(callback);
```

### SetOnCompleteCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetOnCompleteCallback(Action<MissionObjective> callback)`

**用途 / Purpose:** **用途 / Purpose:** 为 on complete callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveBuilder 实例
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetOnCompleteCallback(callback);
```

### SetOnTickCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetOnTickCallback(Action<MissionObjective, float> callback)`

**用途 / Purpose:** **用途 / Purpose:** 为 on tick callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveBuilder 实例
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetOnTickCallback(action<MissionObjective, 0);
```

### SetProgressCallback
`public MissionObjective.GenericMissionObjectiveBuilder SetProgressCallback(Func<MissionObjective, MissionObjectiveProgressInfo> callback)`

**用途 / Purpose:** **用途 / Purpose:** 为 progress callback 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveBuilder 实例
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.SetProgressCallback(func<MissionObjective, callback);
```

### Build
`public MissionObjective Build()`

**用途 / Purpose:** **用途 / Purpose:** 构建当前对象的实例或表示。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveBuilder 实例
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
var result = genericMissionObjectiveBuilder.Build();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GenericMissionObjectiveBuilder genericMissionObjectiveBuilder = ...;
genericMissionObjectiveBuilder.SetName(name);
```

## 参见

- [本区域目录](../)