<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SallyOutMissionNotificationsHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SallyOutMissionNotificationsHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SallyOutMissionNotificationsHandler`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SallyOutMissionNotificationsHandler.cs`

## 概述

`SallyOutMissionNotificationsHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `SallyOutMissionNotificationsHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBesiegedSideFallsbackToKeep
`public void OnBesiegedSideFallsbackToKeep()`

**用途 / Purpose:** 当 `besieged side fallsback to keep` 事件触发时调用此方法。

### OnAfterStart
`public void OnAfterStart()`

**用途 / Purpose:** 当 `after start` 事件触发时调用此方法。

### OnMissionEnd
`public void OnMissionEnd()`

**用途 / Purpose:** 当 `mission end` 事件触发时调用此方法。

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### OnMissionTick
`public void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new SallyOutMissionNotificationsHandler());
```

## 参见

- [完整类目录](../catalog)