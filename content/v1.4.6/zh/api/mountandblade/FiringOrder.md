---
title: "FiringOrder"
description: "FiringOrder：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 9 个（方法 4、属性 2、字段 2）。源文件 TaleWorlds.MountAndBlade/FiringOrder.cs。"
---
# FiringOrder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct FiringOrder`
**File:** `TaleWorlds.MountAndBlade/FiringOrder.cs`

## 概述

FiringOrder 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/FiringOrder.cs。它是一个 public 结构体，继承链为 FiringOrder。public/protected 成员共 9 个：4 方法、2 属性、2 字段、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FiringOrder 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 FiringOrder。成员构成以方法为主（方法 4/9，属性 2/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/FiringOrder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OrderType` | `public OrderType OrderType` | 属性 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `!` | `public static bool operator !` | 运算符 |
| `operator` | `public static bool operator` | 运算符 |
| `FiringOrderFireAtWill` | `public static readonly FiringOrder FiringOrderFireAtWill` | 字段 |
| `FiringOrderHoldYourFire` | `public static readonly FiringOrder FiringOrderHoldYourFire` | 字段 |
| `RangedWeaponUsageOrderEnum` | `public enum RangedWeaponUsageOrderEnum` | 属性 |
| `RangedWeaponUsageOrderEnum` | `public enum RangedWeaponUsageOrderEnum` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
