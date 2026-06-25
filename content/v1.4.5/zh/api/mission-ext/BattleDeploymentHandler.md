---
title: "BattleDeploymentHandler"
description: "BattleDeploymentHandler 的自动生成类参考。"
---
# BattleDeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleDeploymentHandler : DeploymentHandler`
**Base:** `DeploymentHandler`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.Handlers/BattleDeploymentHandler.cs`

## 概述

`BattleDeploymentHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `BattleDeploymentHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** **用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BattleDeploymentHandler 实例
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.OnRemoveBehavior();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleDeploymentHandler 实例
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.AfterStart();
```

### AutoDeployTeamUsingDeploymentPlan
`public override void AutoDeployTeamUsingDeploymentPlan(Team team)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AutoDeployTeamUsingDeploymentPlan 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleDeploymentHandler 实例
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.AutoDeployTeamUsingDeploymentPlan(team);
```

### ForceUpdateAllUnits
`public override void ForceUpdateAllUnits()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ForceUpdateAllUnits 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleDeploymentHandler 实例
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.ForceUpdateAllUnits();
```

### SetDefaultFormationOrders
`public void SetDefaultFormationOrders(OrderController orderController)`

**用途 / Purpose:** **用途 / Purpose:** 为 default formation orders 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BattleDeploymentHandler 实例
BattleDeploymentHandler battleDeploymentHandler = ...;
battleDeploymentHandler.SetDefaultFormationOrders(orderController);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleDeploymentHandler>();
```

## 参见

- [本区域目录](../)