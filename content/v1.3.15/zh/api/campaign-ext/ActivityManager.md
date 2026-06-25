---
title: "ActivityManager"
description: "ActivityManager 的自动生成类参考。"
---
# ActivityManager

**Namespace:** TaleWorlds.ActivitySystem
**Module:** TaleWorlds.ActivitySystem
**Type:** `public class ActivityManager`
**Base:** 无
**File:** `TaleWorlds.ActivitySystem/ActivityManager.cs`

## 概述

`ActivityManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `ActivityManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActivityService` | `public static IActivityService ActivityService { get; set; }` |

## 主要方法

### StartActivity
`public static bool StartActivity(string activityId)`

**用途 / Purpose:** 启动「activity」流程或状态机。

```csharp
// 静态调用，不需要实例
ActivityManager.StartActivity("example");
```

### EndActivity
`public static bool EndActivity(string activityId, ActivityOutcome outcome)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ActivityManager.EndActivity("example", outcome);
```

### SetActivityAvailability
`public static bool SetActivityAvailability(string activityId, bool isAvailable)`

**用途 / Purpose:** 为 「activity availability」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
ActivityManager.SetActivityAvailability("example", false);
```

### GetActivity
`public static Task<Activity> GetActivity(string activityId)`

**用途 / Purpose:** 读取并返回当前对象中 「activity」 的结果。

```csharp
// 静态调用，不需要实例
ActivityManager.GetActivity("example");
```

### GetActivityTransition
`public static ActivityTransition GetActivityTransition(string activityId)`

**用途 / Purpose:** 读取并返回当前对象中 「activity transition」 的结果。

```csharp
// 静态调用，不需要实例
ActivityManager.GetActivityTransition("example");
```

## 使用示例

```csharp
var manager = ActivityManager.Current;
```

## 参见

- [本区域目录](../)