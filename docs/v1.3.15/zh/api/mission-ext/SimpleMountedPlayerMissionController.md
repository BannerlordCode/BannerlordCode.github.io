<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SimpleMountedPlayerMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SimpleMountedPlayerMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SimpleMountedPlayerMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/SimpleMountedPlayerMissionController.cs`

## 概述

`SimpleMountedPlayerMissionController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要方法

### AfterStart
```csharp
public override void AfterStart()
```

### MissionEnded
```csharp
public override bool MissionEnded(ref MissionResult missionResult)
```

## 使用示例

```csharp
// SimpleMountedPlayerMissionController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<SimpleMountedPlayerMissionController>();
```

## 参见

- [完整类目录](../catalog)