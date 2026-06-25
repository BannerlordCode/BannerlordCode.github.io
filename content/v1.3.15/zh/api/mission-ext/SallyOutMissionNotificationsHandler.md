---
title: "SallyOutMissionNotificationsHandler"
description: "SallyOutMissionNotificationsHandler 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 在 besieged side fallsback to keep 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SallyOutMissionNotificationsHandler 实例
SallyOutMissionNotificationsHandler sallyOutMissionNotificationsHandler = ...;
sallyOutMissionNotificationsHandler.OnBesiegedSideFallsbackToKeep();
```

### OnAfterStart
`public void OnAfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 在 after start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SallyOutMissionNotificationsHandler 实例
SallyOutMissionNotificationsHandler sallyOutMissionNotificationsHandler = ...;
sallyOutMissionNotificationsHandler.OnAfterStart();
```

### OnMissionEnd
`public void OnMissionEnd()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SallyOutMissionNotificationsHandler 实例
SallyOutMissionNotificationsHandler sallyOutMissionNotificationsHandler = ...;
sallyOutMissionNotificationsHandler.OnMissionEnd();
```

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SallyOutMissionNotificationsHandler 实例
SallyOutMissionNotificationsHandler sallyOutMissionNotificationsHandler = ...;
sallyOutMissionNotificationsHandler.OnDeploymentFinished();
```

### OnMissionTick
`public void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SallyOutMissionNotificationsHandler 实例
SallyOutMissionNotificationsHandler sallyOutMissionNotificationsHandler = ...;
sallyOutMissionNotificationsHandler.OnMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<SallyOutMissionNotificationsHandler>();
```

## 参见

- [本区域目录](../)