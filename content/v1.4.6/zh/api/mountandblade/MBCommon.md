---
title: "MBCommon"
description: "MBCommon：TaleWorlds.MountAndBlade 的 public 类；公开成员 14 个（方法 7、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade/MBCommon.cs。"
---
# MBCommon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MBCommon`
**File:** `TaleWorlds.MountAndBlade/MBCommon.cs`

## 概述

MBCommon 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MBCommon.cs。它是一个 public 类，继承链为 MBCommon。public/protected 成员共 14 个：7 方法、5 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBCommon 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MBCommon。成员构成以方法为主（方法 7/14，属性 5/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MBCommon.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentGameType` | `public static MBCommon.GameType CurrentGameType` | 属性 |
| `PauseGameEngine` | `public static void PauseGameEngine()` | 方法 |
| `UnPauseGameEngine` | `public static void UnPauseGameEngine()` | 方法 |
| `GetApplicationTime` | `public static float GetApplicationTime()` | 方法 |
| `GetTotalMissionTime` | `public static float GetTotalMissionTime()` | 方法 |
| `IsDebugMode` | `public static bool IsDebugMode` | 属性 |
| `FixSkeletons` | `public static void FixSkeletons()` | 方法 |
| `IsPaused` | `public static bool IsPaused` | 属性 |
| `CheckResourceModifications` | `public static void CheckResourceModifications()` | 方法 |
| `Hash` | `public static int Hash(int i, object o)` | 方法 |
| `GameType` | `public enum GameType` | 属性 |
| `TimeType` | `public enum TimeType` | 属性 |
| `GameType` | `public enum GameType` | 嵌套类型 |
| `TimeType` | `public enum TimeType` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
