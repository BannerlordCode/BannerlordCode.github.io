<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DeploymentMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class DeploymentMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/DeploymentMissionController.cs`

## 概述

`DeploymentMissionController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要方法

### AfterStart
```csharp
public override void AfterStart()
```

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### FinishDeployment
```csharp
public void FinishDeployment()
```

### OnAgentControllerSetToPlayer
```csharp
public override void OnAgentControllerSetToPlayer(Agent agent)
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## 使用示例

```csharp
// DeploymentMissionController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<DeploymentMissionController>();
```

## 参见

- [完整类目录](../catalog)