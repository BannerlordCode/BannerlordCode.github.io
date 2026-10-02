---
title: "TroopFilteringUtilities"
description: "TroopFilteringUtilities：TaleWorlds.MountAndBlade 的 public 类；公开成员 11 个（方法 7、属性 0、字段 4）。源文件 TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs。"
---
# TroopFilteringUtilities

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class TroopFilteringUtilities`
**File:** `TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs`

## 概述

TroopFilteringUtilities 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs。它是一个 public 类，继承链为 TroopFilteringUtilities。public/protected 成员共 11 个：7 方法、4 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TroopFilteringUtilities 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 TroopFilteringUtilities。成员构成以方法为主（方法 7/11，属性 0/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetFilter` | `public static TroopTraitsMask GetFilter(bool isMounted, bool isRanged, bool isMelee, bool hasHeavyArmor, bool hasThrown, bool hasSpear, bool hasShield)` | 方法 |
| `GetFilter` | `public static TroopTraitsMask GetFilter(params FormationClass[]formationClasses)` | 方法 |
| `GetFilter` | `public static TroopTraitsMask GetFilter(params FormationFilterType[]filterTypes)` | 方法 |
| `GetPriorityFunction` | `public static void GetPriorityFunction(TroopTraitsMask filter, out Func<Agent, int>priorityFunc)` | 方法 |
| `GetPriorityFunction` | `public static void GetPriorityFunction(TroopTraitsMask filter, out Func<IAgentOriginBase, int>priorityFunc)` | 方法 |
| `GetTroopPriority` | `public static int GetTroopPriority(TroopTraitsMask troopMask, int battleTier, TroopTraitsMask filter)` | 方法 |
| `GetMaxPriority` | `public static int GetMaxPriority(TroopTraitsMask filter)` | 方法 |
| `MinPriority` | `public const int MinPriority` | 字段 |
| `EquipmentPriority` | `public const int EquipmentPriority` | 字段 |
| `EngagementTypePriority` | `public const int EngagementTypePriority` | 字段 |
| `MountedPriority` | `public const int MountedPriority` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
