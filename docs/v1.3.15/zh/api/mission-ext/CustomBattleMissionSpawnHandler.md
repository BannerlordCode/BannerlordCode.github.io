<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleMissionSpawnHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleMissionSpawnHandler : CustomMissionSpawnHandler`
**Base:** `CustomMissionSpawnHandler`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomBattleMissionSpawnHandler.cs`

## 概述

`CustomBattleMissionSpawnHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### AfterStart
```csharp
public override void AfterStart()
```

## 使用示例

```csharp
// CustomBattleMissionSpawnHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new CustomBattleMissionSpawnHandler());
```

## 参见

- [完整类目录](../catalog)