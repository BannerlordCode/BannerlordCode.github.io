---
title: "TeamAISiegeComponent"
description: "TeamAISiegeComponent 的自动生成类参考。"
---
# TeamAISiegeComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAISiegeComponent : TeamAIComponent`
**Base:** `TeamAIComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs`

## 概述

`TeamAISiegeComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `TeamAISiegeComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SiegeLanes` | `public static List<SiegeLane> SiegeLanes { get; }` |
| `QuerySystem` | `public static SiegeQuerySystem QuerySystem { get; set; }` |
| `OuterGate` | `public CastleGate OuterGate { get; }` |
| `PrimarySiegeWeapons` | `public List<IPrimarySiegeWeapon> PrimarySiegeWeapons { get; }` |
| `InnerGate` | `public CastleGate InnerGate { get; }` |
| `AreLaddersReady` | `public bool AreLaddersReady { get; }` |
| `DifficultNavmeshIDs` | `public List<int> DifficultNavmeshIDs { get; }` |

## 主要方法

### OnMissionFinalize
`public static void OnMissionFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission finalize 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
TeamAISiegeComponent.OnMissionFinalize();
```

### CalculateIsChargePastWallsApplicable
`public bool CalculateIsChargePastWallsApplicable(FormationAI.BehaviorSide side)`

**用途 / Purpose:** **用途 / Purpose:** 计算is charge past walls applicable的当前值或结果。

```csharp
// 先通过子系统 API 拿到 TeamAISiegeComponent 实例
TeamAISiegeComponent teamAISiegeComponent = ...;
var result = teamAISiegeComponent.CalculateIsChargePastWallsApplicable(side);
```

### SetAreLaddersReady
`public void SetAreLaddersReady(bool areLaddersReady)`

**用途 / Purpose:** **用途 / Purpose:** 为 are ladders ready 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TeamAISiegeComponent 实例
TeamAISiegeComponent teamAISiegeComponent = ...;
teamAISiegeComponent.SetAreLaddersReady(false);
```

### CalculateIsAnyLaneOpenToGetInside
`public bool CalculateIsAnyLaneOpenToGetInside()`

**用途 / Purpose:** **用途 / Purpose:** 计算is any lane open to get inside的当前值或结果。

```csharp
// 先通过子系统 API 拿到 TeamAISiegeComponent 实例
TeamAISiegeComponent teamAISiegeComponent = ...;
var result = teamAISiegeComponent.CalculateIsAnyLaneOpenToGetInside();
```

### CalculateIsAnyLaneOpenToGoOutside
`public bool CalculateIsAnyLaneOpenToGoOutside()`

**用途 / Purpose:** **用途 / Purpose:** 计算is any lane open to go outside的当前值或结果。

```csharp
// 先通过子系统 API 拿到 TeamAISiegeComponent 实例
TeamAISiegeComponent teamAISiegeComponent = ...;
var result = teamAISiegeComponent.CalculateIsAnyLaneOpenToGoOutside();
```

### IsPrimarySiegeWeaponNavmeshFaceId
`public bool IsPrimarySiegeWeaponNavmeshFaceId(int id)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 primary siege weapon navmesh face id 状态或条件。

```csharp
// 先通过子系统 API 拿到 TeamAISiegeComponent 实例
TeamAISiegeComponent teamAISiegeComponent = ...;
var result = teamAISiegeComponent.IsPrimarySiegeWeaponNavmeshFaceId(0);
```

### IsFormationGroupInsideCastle
`public static bool IsFormationGroupInsideCastle(MBList<Formation> formationGroup, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 formation group inside castle 状态或条件。

```csharp
// 静态调用，不需要实例
TeamAISiegeComponent.IsFormationGroupInsideCastle(formationGroup, false, 0);
```

### IsFormationInsideCastle
`public static bool IsFormationInsideCastle(Formation formation, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 formation inside castle 状态或条件。

```csharp
// 静态调用，不需要实例
TeamAISiegeComponent.IsFormationInsideCastle(formation, false, 0);
```

### IsCastleBreached
`public bool IsCastleBreached()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 castle breached 状态或条件。

```csharp
// 先通过子系统 API 拿到 TeamAISiegeComponent 实例
TeamAISiegeComponent teamAISiegeComponent = ...;
var result = teamAISiegeComponent.IsCastleBreached();
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 TeamAISiegeComponent 实例
TeamAISiegeComponent teamAISiegeComponent = ...;
teamAISiegeComponent.OnDeploymentFinished();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TeamAISiegeComponent instance = ...;
```

## 参见

- [本区域目录](../)