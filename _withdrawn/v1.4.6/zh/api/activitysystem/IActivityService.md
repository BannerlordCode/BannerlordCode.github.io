---
title: "IActivityService"
description: "IActivityService：TaleWorlds.ActivitySystem 的 public 接口；公开成员 6 个（方法 6、属性 0、字段 0）。canonical 桶 activitysystem。源文件 TaleWorlds.ActivitySystem/IActivityService.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IActivityService

**Namespace:** `TaleWorlds.ActivitySystem`
**Module:** `TaleWorlds.ActivitySystem`
**Type:** `public interface IActivityService`
**File:** `TaleWorlds.ActivitySystem/IActivityService.cs`
**Bucket:** `activitysystem` (rule:TaleWorlds.ActivitySystem)

## 概述

IActivityService 位于 TaleWorlds.ActivitySystem 模块，源文件 TaleWorlds.ActivitySystem/IActivityService.cs。它是一个 public 接口，继承链为 IActivityService。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IActivityService 落在 canonical 桶 `activitysystem`（命中规则 `rule:TaleWorlds.ActivitySystem`），命名空间 `TaleWorlds.ActivitySystem`，继承链 IActivityService。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.ActivitySystem/IActivityService.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StartActivity` | `bool StartActivity(string activityId);` | 方法 |
| `EndActivity` | `bool EndActivity(string activityId, ActivityOutcome outcome);` | 方法 |
| `Task` | `Task<Activity>GetActivity(string activityId);` | 方法 |
| `SetAvailability` | `bool SetAvailability(string activityId, bool isAvailable);` | 方法 |
| `IsInitializationCompleted` | `bool IsInitializationCompleted();` | 方法 |
| `GetActivityTransition` | `ActivityTransition GetActivityTransition(string activityId);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Activity](../Activity/)
- [同命名空间 ActivityManager](../ActivityManager/)
- [同命名空间 ActivityOutcome](../ActivityOutcome/)
- [同命名空间 ActivityTransition](../ActivityTransition/)
