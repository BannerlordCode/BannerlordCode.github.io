---
title: "ActivityManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ActivityManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `start activity` 相关逻辑。

### EndActivity
`public static bool EndActivity(string activityId, ActivityOutcome outcome)`

**用途 / Purpose:** 处理 `end activity` 相关逻辑。

### SetActivityAvailability
`public static bool SetActivityAvailability(string activityId, bool isAvailable)`

**用途 / Purpose:** 设置 `activity availability` 的值或状态。

### GetActivity
`public static Task<Activity> GetActivity(string activityId)`

**用途 / Purpose:** 获取 `activity` 的当前值。

### GetActivityTransition
`public static ActivityTransition GetActivityTransition(string activityId)`

**用途 / Purpose:** 获取 `activity transition` 的当前值。

## 使用示例

```csharp
var manager = ActivityManager.Current;
```

## 参见

- [完整类目录](../catalog)