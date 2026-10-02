---
title: "FacingOrder"
description: "FacingOrder：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 10 个（方法 6、属性 2、字段 1）。源文件 TaleWorlds.MountAndBlade/FacingOrder.cs。"
---
# FacingOrder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct FacingOrder`
**File:** `TaleWorlds.MountAndBlade/FacingOrder.cs`

## 概述

FacingOrder 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/FacingOrder.cs。它是一个 public 结构体，继承链为 FacingOrder。public/protected 成员共 10 个：6 方法、2 属性、1 字段、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FacingOrder 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 FacingOrder。成员构成以方法为主（方法 6/10，属性 2/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/FacingOrder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FacingOrderLookAtDirection` | `public static FacingOrder FacingOrderLookAtDirection(Vec2 direction)` | 方法 |
| `OrderType` | `public OrderType OrderType` | 属性 |
| `GetDirection` | `public Vec2 GetDirection(Formation f, Agent targetAgent = null)` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `!` | `public static bool operator !` | 运算符 |
| `operator` | `public static bool operator` | 运算符 |
| `FacingOrderLookAtEnemy` | `public static readonly FacingOrder FacingOrderLookAtEnemy` | 字段 |
| `FacingOrderEnum` | `public enum FacingOrderEnum` | 属性 |
| `FacingOrderEnum` | `public enum FacingOrderEnum` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
