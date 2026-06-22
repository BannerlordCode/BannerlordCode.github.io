<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleReinforcementsSpawnController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleReinforcementsSpawnController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleReinforcementsSpawnController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleReinforcementsSpawnController.cs`

## 概述

`BattleReinforcementsSpawnController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## 使用示例

```csharp
// BattleReinforcementsSpawnController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<BattleReinforcementsSpawnController>();
```

## 参见

- [完整类目录](../catalog)