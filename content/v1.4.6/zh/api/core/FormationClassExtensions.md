---
title: "FormationClassExtensions"
description: "FormationClassExtensions：TaleWorlds.Core 的 public 类；公开成员 12 个（方法 7、属性 0、字段 5）。源文件 TaleWorlds.Core/FormationClassExtensions.cs。"
---
# FormationClassExtensions

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class FormationClassExtensions`
**File:** `TaleWorlds.Core/FormationClassExtensions.cs`

## 概述

FormationClassExtensions 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/FormationClassExtensions.cs。它是一个 public 类，继承链为 FormationClassExtensions。public/protected 成员共 12 个：7 方法、5 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FormationClassExtensions 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 FormationClassExtensions。成员构成以方法为主（方法 7/12，属性 0/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/FormationClassExtensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetName` | `public static string GetName(this FormationClass formationClass)` | 方法 |
| `GetLocalizedName` | `public static TextObject GetLocalizedName(this FormationClass formationClass)` | 方法 |
| `GetTroopUsageFlags` | `public static TroopUsageFlags GetTroopUsageFlags(this FormationClass troopClass)` | 方法 |
| `GetTroopTypeForRegularFormation` | `public static TroopType GetTroopTypeForRegularFormation(this FormationClass formationClass)` | 方法 |
| `IsDefaultFormationClass` | `public static bool IsDefaultFormationClass(this FormationClass formationClass)` | 方法 |
| `IsRegularFormationClass` | `public static bool IsRegularFormationClass(this FormationClass formationClass)` | 方法 |
| `FallbackClass` | `public static FormationClass FallbackClass(this FormationClass formationClass)` | 方法 |
| `DefaultInfantryTroopUsageFlags` | `public const TroopUsageFlags DefaultInfantryTroopUsageFlags` | 字段 |
| `DefaultRangedTroopUsageFlags` | `public const TroopUsageFlags DefaultRangedTroopUsageFlags` | 字段 |
| `DefaultCavalryTroopUsageFlags` | `public const TroopUsageFlags DefaultCavalryTroopUsageFlags` | 字段 |
| `DefaultHorseArcherTroopUsageFlags` | `public const TroopUsageFlags DefaultHorseArcherTroopUsageFlags` | 字段 |
| `FormationClass[]FormationClassValues` | `public static FormationClass[]FormationClassValues` | 字段 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
