---
title: "DeploymentHandler"
description: "DeploymentHandler 的自动生成类参考。"
---
# DeploymentHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DeploymentHandler.cs`

## 概述

`DeploymentHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `DeploymentHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DeploymentHandler 实例
DeploymentHandler deploymentHandler = ...;
deploymentHandler.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DeploymentHandler 实例
DeploymentHandler deploymentHandler = ...;
deploymentHandler.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DeploymentHandler 实例
DeploymentHandler deploymentHandler = ...;
deploymentHandler.AfterStart();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 「remove behavior」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DeploymentHandler 实例
DeploymentHandler deploymentHandler = ...;
deploymentHandler.OnRemoveBehavior();
```

### OnBattleSideDeployed
`public override void OnBattleSideDeployed(BattleSideEnum side)`

**用途 / Purpose:** 在 「battle side deployed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DeploymentHandler 实例
DeploymentHandler deploymentHandler = ...;
deploymentHandler.OnBattleSideDeployed(side);
```

### AutoDeployTeamUsingDeploymentPlan
`public abstract void AutoDeployTeamUsingDeploymentPlan(Team playerTeam)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DeploymentHandler 实例
DeploymentHandler deploymentHandler = ...;
deploymentHandler.AutoDeployTeamUsingDeploymentPlan(playerTeam);
```

### ForceUpdateAllUnits
`public abstract void ForceUpdateAllUnits()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DeploymentHandler 实例
DeploymentHandler deploymentHandler = ...;
deploymentHandler.ForceUpdateAllUnits();
```

### FinishDeployment
`public virtual void FinishDeployment()`

**用途 / Purpose:** 结束「deployment」流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 DeploymentHandler 实例
DeploymentHandler deploymentHandler = ...;
deploymentHandler.FinishDeployment();
```

### InitializeDeploymentPoints
`public void InitializeDeploymentPoints()`

**用途 / Purpose:** 为 「deployment points」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 DeploymentHandler 实例
DeploymentHandler deploymentHandler = ...;
deploymentHandler.InitializeDeploymentPoints();
```

### OrderController_OnOrderIssued_Aux
`public static void OrderController_OnOrderIssued_Aux(OrderType orderType, MBReadOnlyList<Formation> appliedFormations, OrderController orderController = null, params object delegateParams)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
DeploymentHandler.OrderController_OnOrderIssued_Aux(orderType, appliedFormations, null, delegateParams);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
DeploymentHandler instance = ...;
```

## 参见

- [本区域目录](../)