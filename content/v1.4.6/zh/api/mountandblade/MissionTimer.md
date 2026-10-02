---
title: "MissionTimer"
description: "MissionTimer：TaleWorlds.MountAndBlade 的 public 类；公开成员 9 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/MissionTimer.cs。"
---
# MissionTimer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionTimer`
**File:** `TaleWorlds.MountAndBlade/MissionTimer.cs`

## 概述

MissionTimer 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionTimer.cs。它是一个 public 类，继承链为 MissionTimer。public/protected 成员共 9 个：8 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionTimer 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionTimer。成员构成以方法为主（方法 8/9，属性 0/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionTimer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionTimer` | `public MissionTimer(float duration)` | 构造函数 |
| `GetStartTime` | `public MissionTime GetStartTime()` | 方法 |
| `GetTimerDuration` | `public float GetTimerDuration()` | 方法 |
| `GetRemainingTimeInSeconds` | `public float GetRemainingTimeInSeconds(bool synched = false)` | 方法 |
| `Check` | `public bool Check(bool reset = false)` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `Set` | `public void Set(float timeInSeconds)` | 方法 |
| `SetDuration` | `public void SetDuration(float duration)` | 方法 |
| `CreateSynchedTimerClient` | `public static MissionTimer CreateSynchedTimerClient(float startTimeInSeconds, float duration)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
