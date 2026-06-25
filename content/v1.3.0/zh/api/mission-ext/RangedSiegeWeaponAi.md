---
title: "RangedSiegeWeaponAi"
description: "RangedSiegeWeaponAi 的自动生成类参考。"
---
# RangedSiegeWeaponAi

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class RangedSiegeWeaponAi : UsableMachineAIBase`
**Base:** `UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/RangedSiegeWeaponAi.cs`

## 概述

`RangedSiegeWeaponAi` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FindNextTarget
`public void FindNextTarget()`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的next target。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeaponAi 实例
RangedSiegeWeaponAi rangedSiegeWeaponAi = ...;
rangedSiegeWeaponAi.FindNextTarget();
```

### PrepareTargetFromTask
`public Threat PrepareTargetFromTask()`

**用途 / Purpose:** **用途 / Purpose:** 为即将执行的target from task操作完成前置准备工作。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeaponAi 实例
RangedSiegeWeaponAi rangedSiegeWeaponAi = ...;
var result = rangedSiegeWeaponAi.PrepareTargetFromTask();
```

### UpdateThreatSeekerTask
`public bool UpdateThreatSeekerTask()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 threat seeker task 的最新表示。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeaponAi 实例
RangedSiegeWeaponAi rangedSiegeWeaponAi = ...;
var result = rangedSiegeWeaponAi.UpdateThreatSeekerTask();
```

### PrepareThreatSeekerTask
`public void PrepareThreatSeekerTask(Action lastAction)`

**用途 / Purpose:** **用途 / Purpose:** 为即将执行的threat seeker task操作完成前置准备工作。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeaponAi 实例
RangedSiegeWeaponAi rangedSiegeWeaponAi = ...;
rangedSiegeWeaponAi.PrepareThreatSeekerTask(lastAction);
```

### Release
`public void Release()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Release 对应的操作。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeaponAi 实例
RangedSiegeWeaponAi rangedSiegeWeaponAi = ...;
rangedSiegeWeaponAi.Release();
```

### GetAllThreats
`public List<Threat> GetAllThreats()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 all threats 的结果。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeaponAi 实例
RangedSiegeWeaponAi rangedSiegeWeaponAi = ...;
var result = rangedSiegeWeaponAi.GetAllThreats();
```

### GetTargetFlagsOfFormation
`public static TargetFlags GetTargetFlagsOfFormation()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 target flags of formation 的结果。

```csharp
// 静态调用，不需要实例
RangedSiegeWeaponAi.GetTargetFlagsOfFormation();
```

### GetMaxThreat
`public static Threat GetMaxThreat(List<ICastleKeyPosition> castleKeyPositions)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 max threat 的结果。

```csharp
// 静态调用，不需要实例
RangedSiegeWeaponAi.GetMaxThreat(castleKeyPositions);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
RangedSiegeWeaponAi instance = ...;
```

## 参见

- [本区域目录](../)