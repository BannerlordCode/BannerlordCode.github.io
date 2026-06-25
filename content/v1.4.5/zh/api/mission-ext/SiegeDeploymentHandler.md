---
title: "SiegeDeploymentHandler"
description: "SiegeDeploymentHandler 的自动生成类参考。"
---
# SiegeDeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentHandler : BattleDeploymentHandler`
**Base:** `BattleDeploymentHandler`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Handlers/SiegeDeploymentHandler.cs`

## 概述

`SiegeDeploymentHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `SiegeDeploymentHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerDeploymentPoints` | `public IEnumerable<DeploymentPoint> PlayerDeploymentPoints { get; }` |
| `AllDeploymentPoints` | `public IEnumerable<DeploymentPoint> AllDeploymentPoints { get; }` |

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.OnRemoveBehavior();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.AfterStart();
```

### FinishDeployment
`public override void FinishDeployment()`

**用途 / Purpose:** 结束「deployment」流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.FinishDeployment();
```

### DeployAllSiegeWeaponsOfPlayer
`public void DeployAllSiegeWeaponsOfPlayer()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.DeployAllSiegeWeaponsOfPlayer();
```

### GetMaxDeployableWeaponCountOfPlayer
`public int GetMaxDeployableWeaponCountOfPlayer(Type weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「max deployable weapon count of player」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
var result = siegeDeploymentHandler.GetMaxDeployableWeaponCountOfPlayer(weapon);
```

### DeployAllSiegeWeaponsOfAi
`public void DeployAllSiegeWeaponsOfAi()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.DeployAllSiegeWeaponsOfAi();
```

### RemoveDeploymentPoints
`public void RemoveDeploymentPoints(BattleSideEnum side)`

**用途 / Purpose:** 从当前容器或状态中移除 「deployment points」。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.RemoveDeploymentPoints(side);
```

### RemoveUnavailableDeploymentPoints
`public void RemoveUnavailableDeploymentPoints(BattleSideEnum side)`

**用途 / Purpose:** 从当前容器或状态中移除 「unavailable deployment points」。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.RemoveUnavailableDeploymentPoints(side);
```

### UnHideDeploymentPoints
`public void UnHideDeploymentPoints(BattleSideEnum side)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.UnHideDeploymentPoints(side);
```

### GetDeployableWeaponCountOfPlayer
`public int GetDeployableWeaponCountOfPlayer(Type weapon)`

**用途 / Purpose:** 读取并返回当前对象中 「deployable weapon count of player」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
var result = siegeDeploymentHandler.GetDeployableWeaponCountOfPlayer(weapon);
```

### AutoDeployTeamUsingTeamAI
`public void AutoDeployTeamUsingTeamAI(Team team, bool autoAssignDetachments = true)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.AutoDeployTeamUsingTeamAI(team, false);
```

### AutoAssignDetachmentsForDeployment
`public void AutoAssignDetachmentsForDeployment(Team team)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
siegeDeploymentHandler.AutoAssignDetachmentsForDeployment(team);
```

### GetEstimatedAverageDefenderPosition
`public Vec2 GetEstimatedAverageDefenderPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「estimated average defender position」 的结果。

```csharp
// 先通过子系统 API 拿到 SiegeDeploymentHandler 实例
SiegeDeploymentHandler siegeDeploymentHandler = ...;
var result = siegeDeploymentHandler.GetEstimatedAverageDefenderPosition();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<SiegeDeploymentHandler>();
```

## 参见

- [本区域目录](../)