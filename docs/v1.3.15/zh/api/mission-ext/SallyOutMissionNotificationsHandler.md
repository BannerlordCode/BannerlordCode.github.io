<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SallyOutMissionNotificationsHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SallyOutMissionNotificationsHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SallyOutMissionNotificationsHandler`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SallyOutMissionNotificationsHandler.cs`

## 概述

`SallyOutMissionNotificationsHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### OnBesiegedSideFallsbackToKeep
```csharp
public void OnBesiegedSideFallsbackToKeep()
```

### OnAfterStart
```csharp
public void OnAfterStart()
```

### OnMissionEnd
```csharp
public void OnMissionEnd()
```

### OnDeploymentFinished
```csharp
public void OnDeploymentFinished()
```

### OnMissionTick
```csharp
public void OnMissionTick(float dt)
```

## 使用示例

```csharp
// SallyOutMissionNotificationsHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new SallyOutMissionNotificationsHandler());
```

## 参见

- [完整类目录](../catalog)