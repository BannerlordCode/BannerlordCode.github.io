---
title: "ArrangementOrder"
description: "ArrangementOrder：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 34 个（方法 22、属性 2、字段 8）。源文件 TaleWorlds.MountAndBlade/ArrangementOrder.cs。"
---
# ArrangementOrder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct ArrangementOrder`
**File:** `TaleWorlds.MountAndBlade/ArrangementOrder.cs`

## 概述

ArrangementOrder 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ArrangementOrder.cs。它是一个 public 结构体，继承链为 ArrangementOrder。public/protected 成员共 34 个：22 方法、2 属性、8 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArrangementOrder 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ArrangementOrder。成员构成以方法为主（方法 22/34，属性 2/34），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ArrangementOrder.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetUnitSpacingOf` | `public static int GetUnitSpacingOf(ArrangementOrder.ArrangementOrderEnum a)` | 方法 |
| `GetUnitLooseness` | `public static bool GetUnitLooseness(ArrangementOrder.ArrangementOrderEnum a)` | 方法 |
| `ArrangementOrder` | `public ArrangementOrder(ArrangementOrder.ArrangementOrderEnum orderEnum)` | 构造函数 |
| `GetMovementSpeedRestriction` | `public void GetMovementSpeedRestriction(out float? runRestriction, out float? walkRestriction)` | 方法 |
| `GetArrangement` | `public IFormationArrangement GetArrangement(Formation formation)` | 方法 |
| `OnApply` | `public unsafe void OnApply(Formation formation)` | 方法 |
| `SoftUpdate` | `public void SoftUpdate(Formation formation)` | 方法 |
| `GetShieldDirectionOfUnit` | `public static Agent.UsageDirection GetShieldDirectionOfUnit(Formation formation, Agent unit, ArrangementOrder.ArrangementOrderEnum orderEnum)` | 方法 |
| `GetUnitSpacing` | `public int GetUnitSpacing()` | 方法 |
| `Rearrange` | `public void Rearrange(Formation formation)` | 方法 |
| `RearrangeAux` | `public void RearrangeAux(Formation formation, bool isDirectly)` | 方法 |
| `TransposeLineFormation` | `public unsafe static void TransposeLineFormation(Formation formation)` | 方法 |
| `OnCancel` | `public void OnCancel(Formation formation)` | 方法 |
| `TickOccasionally` | `public void TickOccasionally(Formation formation)` | 方法 |
| `OrderType` | `public OrderType OrderType` | 属性 |
| `GetNativeEnum` | `public ArrangementOrder.ArrangementOrderEnum GetNativeEnum()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `!` | `public static bool operator !` | 运算符 |
| `operator` | `public static bool operator` | 运算符 |
| `OnOrderPositionChanged` | `public void OnOrderPositionChanged(Formation formation, Vec2 previousOrderPosition)` | 方法 |
| `GetArrangementOrderDefensiveness` | `public static int GetArrangementOrderDefensiveness(ArrangementOrder.ArrangementOrderEnum orderEnum)` | 方法 |
| `GetArrangementOrderDefensivenessChange` | `public static int GetArrangementOrderDefensivenessChange(ArrangementOrder.ArrangementOrderEnum previousOrderEnum, ArrangementOrder.ArrangementOrderEnum nextOrderEnum)` | 方法 |
| `CalculateFormationDirectionEnforcingFactorForRank` | `public float CalculateFormationDirectionEnforcingFactorForRank(int formationRankIndex, int rankCount)` | 方法 |
| `ArrangementOrderCircle` | `public static readonly ArrangementOrder ArrangementOrderCircle` | 字段 |
| `ArrangementOrderColumn` | `public static readonly ArrangementOrder ArrangementOrderColumn` | 字段 |
| `ArrangementOrderLine` | `public static readonly ArrangementOrder ArrangementOrderLine` | 字段 |
| `ArrangementOrderLoose` | `public static readonly ArrangementOrder ArrangementOrderLoose` | 字段 |
| `ArrangementOrderScatter` | `public static readonly ArrangementOrder ArrangementOrderScatter` | 字段 |
| `ArrangementOrderShieldWall` | `public static readonly ArrangementOrder ArrangementOrderShieldWall` | 字段 |
| `ArrangementOrderSkein` | `public static readonly ArrangementOrder ArrangementOrderSkein` | 字段 |
| `ArrangementOrderSquare` | `public static readonly ArrangementOrder ArrangementOrderSquare` | 字段 |
| `ArrangementOrderEnum` | `public enum ArrangementOrderEnum` | 属性 |
| `ArrangementOrderEnum` | `public enum ArrangementOrderEnum` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
