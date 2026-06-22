<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EquipmentTestMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EquipmentTestMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentTestMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/EquipmentTestMissionController.cs`

## 概述

`EquipmentTestMissionController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要方法

### AfterStart
```csharp
public override void AfterStart()
```

## 使用示例

```csharp
// EquipmentTestMissionController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<EquipmentTestMissionController>();
```

## 参见

- [完整类目录](../catalog)