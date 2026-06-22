<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomSallyOutMissionController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomSallyOutMissionController

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomSallyOutMissionController : SallyOutMissionController`
**Base:** `SallyOutMissionController`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSallyOutMissionController.cs`

## 概述

`CustomSallyOutMissionController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 使用示例

```csharp
// CustomSallyOutMissionController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<CustomSallyOutMissionController>();
```

## 参见

- [完整类目录](../catalog)