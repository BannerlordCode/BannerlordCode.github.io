<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionFacialAnimationHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionFacialAnimationHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFacialAnimationHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/MissionFacialAnimationHandler.cs`

## 概述

`MissionFacialAnimationHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### EarlyStart
```csharp
public override void EarlyStart()
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## 使用示例

```csharp
// MissionFacialAnimationHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new MissionFacialAnimationHandler());
```

## 参见

- [完整类目录](../catalog)