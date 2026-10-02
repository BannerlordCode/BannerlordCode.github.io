---
title: "MissionReinforcementsHelper"
description: "MissionReinforcementsHelper：TaleWorlds.MountAndBlade 的 public 类；公开成员 9 个（方法 3、属性 3、字段 0）。源文件 TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs。"
---
# MissionReinforcementsHelper

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MissionReinforcementsHelper`
**File:** `TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs`

## 概述

MissionReinforcementsHelper 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs。它是一个 public 类，继承链为 MissionReinforcementsHelper。public/protected 成员共 9 个：3 方法、3 属性、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionReinforcementsHelper 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionReinforcementsHelper。成员构成以方法为主（方法 3/9，属性 3/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionReinforcementsHelper.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMissionStart` | `public static void OnMissionStart()` | 方法 |
| `int>>GetReinforcementAssignments` | `public unsafe static List<ValueTuple<IAgentOriginBase, int>>GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase>troopOrigins)` | 方法 |
| `OnMissionEnd` | `public static void OnMissionEnd()` | 方法 |
| `ReinforcementFormationPriority` | `public enum ReinforcementFormationPriority` | 属性 |
| `IComparer` | `public class ReinforcementFormationPreferenceComparer : IComparer<MissionReinforcementsHelper.ReinforcementFormationPriority>` | 属性 |
| `ReinforcementFormationData` | `public class ReinforcementFormationData` | 属性 |
| `ReinforcementFormationPriority` | `public enum ReinforcementFormationPriority` | 嵌套类型 |
| `IComparer` | `public class ReinforcementFormationPreferenceComparer : IComparer<MissionReinforcementsHelper.ReinforcementFormationPriority>` | 嵌套类型 |
| `ReinforcementFormationData` | `public class ReinforcementFormationData` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
