---
title: "DeploymentMissionController"
description: "DeploymentMissionController 的自动生成类参考。"
---
# DeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DeploymentMissionController.cs`

## 概述

`DeploymentMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `DeploymentMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TeamSetupOver` | `public bool TeamSetupOver { get; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DeploymentMissionController 实例
DeploymentMissionController deploymentMissionController = ...;
deploymentMissionController.AfterStart();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DeploymentMissionController 实例
DeploymentMissionController deploymentMissionController = ...;
deploymentMissionController.OnBehaviorInitialize();
```

### FinishDeployment
`public void FinishDeployment()`

**用途 / Purpose:** 结束「deployment」流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 DeploymentMissionController 实例
DeploymentMissionController deploymentMissionController = ...;
deploymentMissionController.FinishDeployment();
```

### OnAgentControllerSetToPlayer
`public override void OnAgentControllerSetToPlayer(Agent agent)`

**用途 / Purpose:** 在 「agent controller set to player」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DeploymentMissionController 实例
DeploymentMissionController deploymentMissionController = ...;
deploymentMissionController.OnAgentControllerSetToPlayer(agent);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DeploymentMissionController 实例
DeploymentMissionController deploymentMissionController = ...;
deploymentMissionController.OnMissionTick(0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
DeploymentMissionController instance = ...;
```

## 参见

- [本区域目录](../)