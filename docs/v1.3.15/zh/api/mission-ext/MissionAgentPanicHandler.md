<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentPanicHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionAgentPanicHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentPanicHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionAgentPanicHandler.cs`

## 概述

`MissionAgentPanicHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### OnAgentPanicked
```csharp
public override void OnAgentPanicked(Agent agent)
```

### OnPreMissionTick
```csharp
public override void OnPreMissionTick(float dt)
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

## 使用示例

```csharp
// MissionAgentPanicHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new MissionAgentPanicHandler());
```

## 参见

- [完整类目录](../catalog)