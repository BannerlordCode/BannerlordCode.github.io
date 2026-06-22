<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomSiegeMissionSpawnHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomSiegeMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomSiegeMissionSpawnHandler : CustomMissionSpawnHandler`
**Base:** `CustomMissionSpawnHandler`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomSiegeMissionSpawnHandler.cs`

## 概述

`CustomSiegeMissionSpawnHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### AfterStart
```csharp
public override void AfterStart()
```

## 使用示例

```csharp
// CustomSiegeMissionSpawnHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new CustomSiegeMissionSpawnHandler());
```

## 参见

- [完整类目录](../catalog)