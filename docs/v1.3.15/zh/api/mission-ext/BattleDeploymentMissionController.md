<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleDeploymentMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleDeploymentMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleDeploymentMissionController : DeploymentMissionController`
**Base:** `DeploymentMissionController`
**File:** `TaleWorlds.MountAndBlade/BattleDeploymentMissionController.cs`

## 概述

`BattleDeploymentMissionController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

## 使用示例

```csharp
// BattleDeploymentMissionController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<BattleDeploymentMissionController>();
```

## 参见

- [完整类目录](../catalog)