<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BasicLeaveMissionLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BasicLeaveMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicLeaveMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BasicLeaveMissionLogic.cs`

## 概述

`BasicLeaveMissionLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new BasicLeaveMissionLogic())` 添加；继承它可定制。

## 主要方法

### MissionEnded
```csharp
public override bool MissionEnded(ref MissionResult missionResult)
```

### OnEndMissionRequest
```csharp
public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)
```

## 使用示例

```csharp
// BasicLeaveMissionLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new BasicLeaveMissionLogic());
```

## 参见

- [完整类目录](../catalog)