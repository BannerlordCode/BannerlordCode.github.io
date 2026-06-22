<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeMissionPreparationHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeMissionPreparationHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeMissionPreparationHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SiegeMissionPreparationHandler.cs`

## 概述

`SiegeMissionPreparationHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

## 使用示例

```csharp
// SiegeMissionPreparationHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new SiegeMissionPreparationHandler());
```

## 参见

- [完整类目录](../catalog)