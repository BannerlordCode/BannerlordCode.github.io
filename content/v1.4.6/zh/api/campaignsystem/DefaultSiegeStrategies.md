---
title: "DefaultSiegeStrategies"
description: "DefaultSiegeStrategies：TaleWorlds.CampaignSystem 的 public 类；公开成员 10 个（方法 0、属性 9、字段 0）。源文件 TaleWorlds.CampaignSystem/Siege/DefaultSiegeStrategies.cs。"
---
# DefaultSiegeStrategies

**Namespace:** `TaleWorlds.CampaignSystem.Siege`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSiegeStrategies`
**File:** `TaleWorlds.CampaignSystem/Siege/DefaultSiegeStrategies.cs`

## 概述

DefaultSiegeStrategies 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Siege/DefaultSiegeStrategies.cs。它是一个 public 类，继承链为 DefaultSiegeStrategies。public/protected 成员共 10 个：9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSiegeStrategies 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Siege），继承链 DefaultSiegeStrategies。成员构成以属性为主（属性 9/10，方法 0/10），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Siege/DefaultSiegeStrategies.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PreserveStrength` | `public static SiegeStrategy PreserveStrength` | 属性 |
| `PrepareAgainstAssault` | `public static SiegeStrategy PrepareAgainstAssault` | 属性 |
| `CounterBombardment` | `public static SiegeStrategy CounterBombardment` | 属性 |
| `PrepareAssault` | `public static SiegeStrategy PrepareAssault` | 属性 |
| `BreachWalls` | `public static SiegeStrategy BreachWalls` | 属性 |
| `WearOutDefenders` | `public static SiegeStrategy WearOutDefenders` | 属性 |
| `Custom` | `public static SiegeStrategy Custom` | 属性 |
| `IEnumerable` | `public static IEnumerable<SiegeStrategy>AllAttackerStrategies` | 属性 |
| `IEnumerable` | `public static IEnumerable<SiegeStrategy>AllDefenderStrategies` | 属性 |
| `DefaultSiegeStrategies` | `public DefaultSiegeStrategies()` | 构造函数 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BesiegerCamp](../BesiegerCamp)
- [同命名空间 ISiegeEventSide](../ISiegeEventSide)
- [同命名空间 ISiegeEventVisual](../ISiegeEventVisual)
- [同命名空间 PlayerSiege](../PlayerSiege)
