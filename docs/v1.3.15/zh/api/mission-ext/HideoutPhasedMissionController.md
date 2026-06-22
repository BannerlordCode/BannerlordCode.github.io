<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HideoutPhasedMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HideoutPhasedMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HideoutPhasedMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/HideoutPhasedMissionController.cs`

## 概述

`HideoutPhasedMissionController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `BehaviorType` | `public override MissionBehaviorType BehaviorType { get; }` |

## 主要方法

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AfterStart
```csharp
public override void AfterStart()
```

## 使用示例

```csharp
// HideoutPhasedMissionController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<HideoutPhasedMissionController>();
```

## 参见

- [完整类目录](../catalog)