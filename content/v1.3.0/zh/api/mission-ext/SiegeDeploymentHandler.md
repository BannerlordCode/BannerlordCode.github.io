---
title: "SiegeDeploymentHandler"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeDeploymentHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeDeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentHandler : BattleDeploymentHandler`
**Base:** `BattleDeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs`

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

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### FinishDeployment
`public override void FinishDeployment()`

**用途 / Purpose:** 处理 `finish deployment` 相关逻辑。

### DeployAllSiegeWeaponsOfPlayer
`public void DeployAllSiegeWeaponsOfPlayer()`

**用途 / Purpose:** 处理 `deploy all siege weapons of player` 相关逻辑。

### GetMaxDeployableWeaponCountOfPlayer
`public int GetMaxDeployableWeaponCountOfPlayer(Type weapon)`

**用途 / Purpose:** 获取 `max deployable weapon count of player` 的当前值。

### DeployAllSiegeWeaponsOfAi
`public void DeployAllSiegeWeaponsOfAi()`

**用途 / Purpose:** 处理 `deploy all siege weapons of ai` 相关逻辑。

### RemoveDeploymentPoints
`public void RemoveDeploymentPoints(BattleSideEnum side)`

**用途 / Purpose:** 从当前集合/状态中移除 `deployment points`。

### RemoveUnavailableDeploymentPoints
`public void RemoveUnavailableDeploymentPoints(BattleSideEnum side)`

**用途 / Purpose:** 从当前集合/状态中移除 `unavailable deployment points`。

### UnHideDeploymentPoints
`public void UnHideDeploymentPoints(BattleSideEnum side)`

**用途 / Purpose:** 处理 `un hide deployment points` 相关逻辑。

### GetDeployableWeaponCountOfPlayer
`public int GetDeployableWeaponCountOfPlayer(Type weapon)`

**用途 / Purpose:** 获取 `deployable weapon count of player` 的当前值。

### AutoDeployTeamUsingTeamAI
`public void AutoDeployTeamUsingTeamAI(Team team, bool autoAssignDetachments = true)`

**用途 / Purpose:** 处理 `auto deploy team using team a i` 相关逻辑。

### AutoAssignDetachmentsForDeployment
`public void AutoAssignDetachmentsForDeployment(Team team)`

**用途 / Purpose:** 处理 `auto assign detachments for deployment` 相关逻辑。

### GetEstimatedAverageDefenderPosition
`public Vec2 GetEstimatedAverageDefenderPosition()`

**用途 / Purpose:** 获取 `estimated average defender position` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new SiegeDeploymentHandler());
```

## 参见

- [完整类目录](../catalog)