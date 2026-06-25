---
title: "SiegeLane"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeLane`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `calculate is lane unusable` 相关逻辑。

### GetLastAssignedFormation
`public Formation GetLastAssignedFormation(int teamIndex)`

**用途 / Purpose:** 获取 `last assigned formation` 的当前值。

### SetLaneState
`public void SetLaneState(SiegeLane.LaneStateEnum newLaneState)`

**用途 / Purpose:** 设置 `lane state` 的值或状态。

### SetLastAssignedFormation
`public void SetLastAssignedFormation(int teamIndex, Formation formation)`

**用途 / Purpose:** 设置 `last assigned formation` 的值或状态。

### SetSiegeQuerySystem
`public void SetSiegeQuerySystem(SiegeQuerySystem siegeQuerySystem)`

**用途 / Purpose:** 设置 `siege query system` 的值或状态。

### CalculateLaneCapacity
`public float CalculateLaneCapacity()`

**用途 / Purpose:** 处理 `calculate lane capacity` 相关逻辑。

### GetDefenseState
`public SiegeLane.LaneDefenseStates GetDefenseState()`

**用途 / Purpose:** 获取 `defense state` 的当前值。

### IsUnderAttack
`public bool IsUnderAttack()`

**用途 / Purpose:** 处理 `is under attack` 相关逻辑。

### IsDefended
`public bool IsDefended()`

**用途 / Purpose:** 处理 `is defended` 相关逻辑。

### DetermineLaneState
`public void DetermineLaneState()`

**用途 / Purpose:** 处理 `determine lane state` 相关逻辑。

### GetCurrentAttackerPosition
`public WorldPosition GetCurrentAttackerPosition()`

**用途 / Purpose:** 获取 `current attacker position` 的当前值。

### DetermineOrigins
`public void DetermineOrigins()`

**用途 / Purpose:** 处理 `determine origins` 相关逻辑。

### RefreshLane
`public void RefreshLane()`

**用途 / Purpose:** 刷新 `lane` 的显示或缓存。

### SetPrimarySiegeWeapons
`public void SetPrimarySiegeWeapons(List<IPrimarySiegeWeapon> primarySiegeWeapons)`

**用途 / Purpose:** 设置 `primary siege weapons` 的值或状态。

### SetDefensePoints
`public void SetDefensePoints(List<ICastleKeyPosition> defensePoints)`

**用途 / Purpose:** 设置 `defense points` 的值或状态。

## 使用示例

```csharp
var value = new SiegeLane();
value.CalculateIsLaneUnusable();
```

## 参见

- [完整类目录](../catalog)