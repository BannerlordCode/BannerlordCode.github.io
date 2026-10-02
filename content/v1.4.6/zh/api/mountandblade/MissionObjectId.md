---
title: "MissionObjectId"
description: "MissionObjectId：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 7 个（方法 5、属性 0、字段 1）。源文件 TaleWorlds.MountAndBlade/MissionObjectId.cs。"
---
# MissionObjectId

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MissionObjectId`
**File:** `TaleWorlds.MountAndBlade/MissionObjectId.cs`

## 概述

MissionObjectId 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionObjectId.cs。它是一个 public 结构体，继承链为 MissionObjectId。public/protected 成员共 7 个：5 方法、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionObjectId 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionObjectId。成员构成以方法为主（方法 5/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionObjectId.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionObjectId` | `public MissionObjectId(int id, bool createdAtRuntime = false)` | 构造函数 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `Invalid` | `public static readonly MissionObjectId Invalid` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
