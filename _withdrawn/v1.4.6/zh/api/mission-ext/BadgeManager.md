---
title: "BadgeManager"
description: "BadgeManager：TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges 的 public 类；公开成员 14 个（方法 7、属性 2、字段 5）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BadgeManager

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public static class BadgeManager`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BadgeManager 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs。它是一个 public 类，继承链为 BadgeManager。public/protected 成员共 14 个：7 方法、2 属性、5 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BadgeManager 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`，继承链 BadgeManager。成员构成以方法为主（方法 7/14，属性 2/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<Badge>Badges` | 属性 |
| `IsInitialized` | `public static bool IsInitialized` | 属性 |
| `InitializeWithXML` | `public static void InitializeWithXML(string xmlPath)` | 方法 |
| `OnFinalize` | `public static void OnFinalize()` | 方法 |
| `GetByIndex` | `public static Badge GetByIndex(int index)` | 方法 |
| `GetById` | `public static Badge GetById(string id)` | 方法 |
| `List` | `public static List<Badge>GetByType(BadgeType type)` | 方法 |
| `GetBadgeConditionValue` | `public static string GetBadgeConditionValue(this PlayerData playerData, BadgeCondition condition)` | 方法 |
| `GetBadgeConditionNumericValue` | `public static int GetBadgeConditionNumericValue(this PlayerData playerData, BadgeCondition condition)` | 方法 |
| `PropertyParameterName` | `public const string PropertyParameterName` | 字段 |
| `ValueParameterName` | `public const string ValueParameterName` | 字段 |
| `MinValueParameterName` | `public const string MinValueParameterName` | 字段 |
| `MaxValueParameterName` | `public const string MaxValueParameterName` | 字段 |
| `IsBestParameterName` | `public const string IsBestParameterName` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Badge](../Badge/)
- [同命名空间 BadgeCondition](../BadgeCondition/)
- [同命名空间 BadgeOwnerKillTracker](../BadgeOwnerKillTracker/)
- [同命名空间 BadgeType](../BadgeType/)
