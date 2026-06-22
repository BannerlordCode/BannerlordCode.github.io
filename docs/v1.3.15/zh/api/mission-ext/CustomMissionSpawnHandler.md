<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomMissionSpawnHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomMissionSpawnHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomMissionSpawnHandler.cs`

## 概述

`CustomMissionSpawnHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

## 使用示例

```csharp
// CustomMissionSpawnHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new CustomMissionSpawnHandler());
```

## 参见

- [完整类目录](../catalog)