---
title: "GenericMissionObjectiveTarget"
description: "GenericMissionObjectiveTarget 的自动生成类参考。"
---
# GenericMissionObjectiveTarget

**Namespace:** TaleWorlds.MountAndBlade.Missions.Objectives
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal class GenericMissionObjectiveTarget<T> : MissionObjectiveTarget<T>`
**Base:** `MissionObjectiveTarget<T>`
**File:** `TaleWorlds.MountAndBlade/Missions/Objectives/GenericMissionObjectiveTarget.cs`

## 概述

`GenericMissionObjectiveTarget` 位于 `TaleWorlds.MountAndBlade.Missions.Objectives`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Missions.Objectives` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsActive
`public override bool IsActive()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 active 状态或条件。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveTarget 实例
GenericMissionObjectiveTarget genericMissionObjectiveTarget = ...;
var result = genericMissionObjectiveTarget.IsActive();
```

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveTarget 实例
GenericMissionObjectiveTarget genericMissionObjectiveTarget = ...;
var result = genericMissionObjectiveTarget.GetName();
```

### GetGlobalPosition
`public override Vec3 GetGlobalPosition()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 global position 的结果。

```csharp
// 先通过子系统 API 拿到 GenericMissionObjectiveTarget 实例
GenericMissionObjectiveTarget genericMissionObjectiveTarget = ...;
var result = genericMissionObjectiveTarget.GetGlobalPosition();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GenericMissionObjectiveTarget genericMissionObjectiveTarget = ...;
genericMissionObjectiveTarget.IsActive();
```

## 参见

- [本区域目录](../)