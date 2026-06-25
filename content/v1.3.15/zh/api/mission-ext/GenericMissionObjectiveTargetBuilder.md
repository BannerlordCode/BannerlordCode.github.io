---
title: "GenericMissionObjectiveTargetBuilder"
description: "GenericMissionObjectiveTargetBuilder 的自动生成类参考。"
---
# GenericMissionObjectiveTargetBuilder

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct GenericMissionObjectiveTargetBuilder<T>`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/MissionObjective.cs`

## 概述

`GenericMissionObjectiveTargetBuilder` 位于 `TaleWorlds.MountAndBlade.Missions.Objectives`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Missions.Objectives` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetIsActiveCallback
`public MissionObjective.GenericMissionObjectiveTargetBuilder<T> SetIsActiveCallback(Func<T, bool> callback)`

**用途 / Purpose:** 为 「is active callback」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveTargetBuilder 实例
GenericMissionObjectiveTargetBuilder genericMissionObjectiveTargetBuilder = ...;
var result = genericMissionObjectiveTargetBuilder.SetIsActiveCallback(func<T, false);
```

### SetGetGlobalPositionCallback
`public MissionObjective.GenericMissionObjectiveTargetBuilder<T> SetGetGlobalPositionCallback(Func<T, Vec3> callback)`

**用途 / Purpose:** 为 「get global position callback」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveTargetBuilder 实例
GenericMissionObjectiveTargetBuilder genericMissionObjectiveTargetBuilder = ...;
var result = genericMissionObjectiveTargetBuilder.SetGetGlobalPositionCallback(func<T, callback);
```

### SetGetNameCallback
`public MissionObjective.GenericMissionObjectiveTargetBuilder<T> SetGetNameCallback(Func<T, TextObject> callback)`

**用途 / Purpose:** 为 「get name callback」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveTargetBuilder 实例
GenericMissionObjectiveTargetBuilder genericMissionObjectiveTargetBuilder = ...;
var result = genericMissionObjectiveTargetBuilder.SetGetNameCallback(func<T, callback);
```

### Build
`public MissionObjectiveTarget<T> Build()`

**用途 / Purpose:** 构建当前对象的实例或表示。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveTargetBuilder 实例
GenericMissionObjectiveTargetBuilder genericMissionObjectiveTargetBuilder = ...;
var result = genericMissionObjectiveTargetBuilder.Build();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GenericMissionObjectiveTargetBuilder genericMissionObjectiveTargetBuilder = ...;
genericMissionObjectiveTargetBuilder.SetIsActiveCallback(func<T, false);
```

## 参见

- [本区域目录](../)