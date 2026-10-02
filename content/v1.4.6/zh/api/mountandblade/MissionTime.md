---
title: "MissionTime"
description: "MissionTime：TaleWorlds.MountAndBlade 的 public 结构体，继承 IComparable<MissionTime>；公开成员 38 个（方法 18、属性 14、字段 5）。源文件 TaleWorlds.MountAndBlade/MissionTime.cs。"
---
# MissionTime

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MissionTime : IComparable<MissionTime>`
**File:** `TaleWorlds.MountAndBlade/MissionTime.cs`

## 概述

MissionTime 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionTime.cs。它是一个 public 结构体，实现/继承 IComparable<MissionTime>，继承链为 MissionTime → IComparable。public/protected 成员共 38 个：18 方法、14 属性、5 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionTime 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionTime → IComparable。成员构成以方法为主（方法 18/38，属性 14/38），对外主要以操作入口暴露。继承链上的 IComparable 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionTime.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumberOfTicks` | `public long NumberOfTicks` | 属性 |
| `MissionTime` | `public MissionTime(long numberOfTicks)` | 构造函数 |
| `DeltaTime` | `public static MissionTime DeltaTime` | 属性 |
| `Now` | `public static MissionTime Now` | 属性 |
| `IsFuture` | `public bool IsFuture` | 属性 |
| `IsPast` | `public bool IsPast` | 属性 |
| `IsNow` | `public bool IsNow` | 属性 |
| `ElapsedHours` | `public float ElapsedHours` | 属性 |
| `ElapsedSeconds` | `public float ElapsedSeconds` | 属性 |
| `ElapsedMilliseconds` | `public float ElapsedMilliseconds` | 属性 |
| `ToHours` | `public double ToHours` | 属性 |
| `ToMinutes` | `public double ToMinutes` | 属性 |
| `ToSeconds` | `public double ToSeconds` | 属性 |
| `ToMilliseconds` | `public double ToMilliseconds` | 属性 |
| `MillisecondsFromNow` | `public static MissionTime MillisecondsFromNow(float valueInMilliseconds)` | 方法 |
| `SecondsFromNow` | `public static MissionTime SecondsFromNow(float valueInSeconds)` | 方法 |
| `Equals` | `public bool Equals(MissionTime other)` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `CompareTo` | `public int CompareTo(MissionTime other)` | 方法 |
| `operator` | `public static bool operator<(MissionTime x, MissionTime y)` | 运算符 |
| `operator>` | `public static bool operator>(MissionTime x, MissionTime y)` | 运算符 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `operator` | `public static bool operator<=(MissionTime x, MissionTime y)` | 运算符 |
| `operator>=` | `public static bool operator>=(MissionTime x, MissionTime y)` | 运算符 |
| `Milliseconds` | `public static MissionTime Milliseconds(float valueInMilliseconds)` | 方法 |
| `Seconds` | `public static MissionTime Seconds(float valueInSeconds)` | 方法 |
| `Minutes` | `public static MissionTime Minutes(float valueInMinutes)` | 方法 |
| `Hours` | `public static MissionTime Hours(float valueInHours)` | 方法 |
| `Zero` | `public static MissionTime Zero` | 属性 |
| `+` | `public static MissionTime operator +(MissionTime g1, MissionTime g2)` | 运算符 |
| `-` | `public static MissionTime operator -(MissionTime g1, MissionTime g2)` | 运算符 |
| `TimeTicksPerMilliSecond` | `public const long TimeTicksPerMilliSecond` | 字段 |
| `TimeTicksPerSecond` | `public const long TimeTicksPerSecond` | 字段 |
| `TimeTicksPerMinute` | `public const long TimeTicksPerMinute` | 字段 |
| `TimeTicksPerHour` | `public const long TimeTicksPerHour` | 字段 |
| `InvTimeTicksPerSecond` | `public const float InvTimeTicksPerSecond` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
