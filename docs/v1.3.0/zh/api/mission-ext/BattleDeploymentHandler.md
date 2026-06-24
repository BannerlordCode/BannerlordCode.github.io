<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleDeploymentHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BattleDeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleDeploymentHandler : DeploymentHandler`
**Base:** `DeploymentHandler`
**File:** `TaleWorlds.MountAndBlade/Missions/Handlers/BattleDeploymentHandler.cs`

## 概述

`BattleDeploymentHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `BattleDeploymentHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### AutoDeployTeamUsingDeploymentPlan
`public override void AutoDeployTeamUsingDeploymentPlan(Team team)`

**用途 / Purpose:** 处理 `auto deploy team using deployment plan` 相关逻辑。

### ForceUpdateAllUnits
`public override void ForceUpdateAllUnits()`

**用途 / Purpose:** 处理 `force update all units` 相关逻辑。

### SetDefaultFormationOrders
`public void SetDefaultFormationOrders(OrderController orderController)`

**用途 / Purpose:** 设置 `default formation orders` 的值或状态。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new BattleDeploymentHandler());
```

## 参见

- [完整类目录](../catalog)