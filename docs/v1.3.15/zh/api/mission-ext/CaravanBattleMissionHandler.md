<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CaravanBattleMissionHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CaravanBattleMissionHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CaravanBattleMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/CaravanBattleMissionHandler.cs`

## 概述

`CaravanBattleMissionHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### AfterStart
```csharp
public override void AfterStart()
```

## 使用示例

```csharp
// CaravanBattleMissionHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new CaravanBattleMissionHandler());
```

## 参见

- [完整类目录](../catalog)