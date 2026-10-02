---
title: "ActivityManager"
description: "ActivityManager：TaleWorlds.ActivitySystem 的 public 类；公开成员 6 个（方法 5、属性 1、字段 0）。源文件 TaleWorlds.ActivitySystem/ActivityManager.cs。"
---
# ActivityManager

**Namespace:** `TaleWorlds.ActivitySystem`
**Module:** `TaleWorlds.ActivitySystem`
**Type:** `public class ActivityManager`
**File:** `TaleWorlds.ActivitySystem/ActivityManager.cs`

## 概述

ActivityManager 位于 TaleWorlds.ActivitySystem 模块，源文件 TaleWorlds.ActivitySystem/ActivityManager.cs。它是一个 public 类，继承链为 ActivityManager。public/protected 成员共 6 个：5 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ActivityManager 是 TaleWorlds.ActivitySystem 的顶层类型，命名空间与模块目录一致，继承链 ActivityManager。成员构成以方法为主（方法 5/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.ActivitySystem/ActivityManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ActivityService` | `public static IActivityService ActivityService` | 属性 |
| `StartActivity` | `public static bool StartActivity(string activityId)` | 方法 |
| `EndActivity` | `public static bool EndActivity(string activityId, ActivityOutcome outcome)` | 方法 |
| `SetActivityAvailability` | `public static bool SetActivityAvailability(string activityId, bool isAvailable)` | 方法 |
| `Task` | `public static Task<Activity>GetActivity(string activityId)` | 方法 |
| `GetActivityTransition` | `public static ActivityTransition GetActivityTransition(string activityId)` | 方法 |

## 参见

- [↑ activitysystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 Activity](../Activity)
- [同命名空间 ActivityOutcome](../ActivityOutcome)
- [同命名空间 ActivityTransition](../ActivityTransition)
- [同命名空间 IActivityService](../IActivityService)
