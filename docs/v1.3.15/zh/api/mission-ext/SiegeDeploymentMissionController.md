<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeDeploymentMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeDeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeDeploymentMissionController : DeploymentMissionController`
**Base:** `DeploymentMissionController`
**File:** `TaleWorlds.MountAndBlade/SiegeDeploymentMissionController.cs`

## 概述

`SiegeDeploymentMissionController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### GetSiegeMissiles
```csharp
public List<ItemObject> GetSiegeMissiles()
```

## 使用示例

```csharp
// SiegeDeploymentMissionController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<SiegeDeploymentMissionController>();
```

## 参见

- [完整类目录](../catalog)