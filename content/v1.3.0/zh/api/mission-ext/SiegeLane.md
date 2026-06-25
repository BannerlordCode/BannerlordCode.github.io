---
title: "SiegeLane"
description: "SiegeLane 的自动生成类参考。"
---
# SiegeLane

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeLane`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SiegeLane.cs`

## 概述

`SiegeLane` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LaneState` | `public SiegeLane.LaneStateEnum LaneState { get; }` |
| `LaneSide` | `public FormationAI.BehaviorSide LaneSide { get; }` |
| `PrimarySiegeWeapons` | `public List<IPrimarySiegeWeapon> PrimarySiegeWeapons { get; }` |
| `IsOpen` | `public bool IsOpen { get; }` |
| `IsBreach` | `public bool IsBreach { get; }` |
| `HasGate` | `public bool HasGate { get; }` |
| `DefensePoints` | `public List<ICastleKeyPosition> DefensePoints { get; }` |
| `DefenderOrigin` | `public WorldPosition DefenderOrigin { get; }` |
| `AttackerOrigin` | `public WorldPosition AttackerOrigin { get; }` |

## 主要方法

### CalculateIsLaneUnusable
`public bool CalculateIsLaneUnusable()`

**用途 / Purpose:** 计算is lane unusable的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
var result = siegeLane.CalculateIsLaneUnusable();
```

### GetLastAssignedFormation
`public Formation GetLastAssignedFormation(int teamIndex)`

**用途 / Purpose:** 读取并返回当前对象中 last assigned formation 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
var result = siegeLane.GetLastAssignedFormation(0);
```

### SetLaneState
`public void SetLaneState(SiegeLane.LaneStateEnum newLaneState)`

**用途 / Purpose:** 为 lane state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
siegeLane.SetLaneState(newLaneState);
```

### SetLastAssignedFormation
`public void SetLastAssignedFormation(int teamIndex, Formation formation)`

**用途 / Purpose:** 为 last assigned formation 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
siegeLane.SetLastAssignedFormation(0, formation);
```

### SetSiegeQuerySystem
`public void SetSiegeQuerySystem(SiegeQuerySystem siegeQuerySystem)`

**用途 / Purpose:** 为 siege query system 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
siegeLane.SetSiegeQuerySystem(siegeQuerySystem);
```

### CalculateLaneCapacity
`public float CalculateLaneCapacity()`

**用途 / Purpose:** 计算lane capacity的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
var result = siegeLane.CalculateLaneCapacity();
```

### GetDefenseState
`public SiegeLane.LaneDefenseStates GetDefenseState()`

**用途 / Purpose:** 读取并返回当前对象中 defense state 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
var result = siegeLane.GetDefenseState();
```

### IsUnderAttack
`public bool IsUnderAttack()`

**用途 / Purpose:** 判断当前对象是否处于 under attack 状态或条件。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
var result = siegeLane.IsUnderAttack();
```

### IsDefended
`public bool IsDefended()`

**用途 / Purpose:** 判断当前对象是否处于 defended 状态或条件。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
var result = siegeLane.IsDefended();
```

### DetermineLaneState
`public void DetermineLaneState()`

**用途 / Purpose:** 根据当前状态判定lane state的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
siegeLane.DetermineLaneState();
```

### GetCurrentAttackerPosition
`public WorldPosition GetCurrentAttackerPosition()`

**用途 / Purpose:** 读取并返回当前对象中 current attacker position 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
var result = siegeLane.GetCurrentAttackerPosition();
```

### DetermineOrigins
`public void DetermineOrigins()`

**用途 / Purpose:** 根据当前状态判定origins的结果。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
siegeLane.DetermineOrigins();
```

### RefreshLane
`public void RefreshLane()`

**用途 / Purpose:** 使 lane 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
siegeLane.RefreshLane();
```

### SetPrimarySiegeWeapons
`public void SetPrimarySiegeWeapons(List<IPrimarySiegeWeapon> primarySiegeWeapons)`

**用途 / Purpose:** 为 primary siege weapons 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
siegeLane.SetPrimarySiegeWeapons(primarySiegeWeapons);
```

### SetDefensePoints
`public void SetDefensePoints(List<ICastleKeyPosition> defensePoints)`

**用途 / Purpose:** 为 defense points 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeLane 实例
SiegeLane siegeLane = ...;
siegeLane.SetDefensePoints(defensePoints);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SiegeLane siegeLane = ...;
siegeLane.CalculateIsLaneUnusable();
```

## 参见

- [本区域目录](../)