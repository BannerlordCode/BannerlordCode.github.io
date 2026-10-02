---
title: "Badge"
description: "Badge：TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges 的 public 类；公开成员 13 个（方法 1、属性 11、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/Badge.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Badge

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class Badge`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/Badge.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

Badge 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/Badge.cs。它是一个 public 类，继承链为 Badge。public/protected 成员共 13 个：1 方法、11 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Badge 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`，继承链 Badge。成员构成以属性为主（属性 11/13，方法 1/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/Badge.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Index` | `public int Index` | 属性 |
| `Type` | `public BadgeType Type` | 属性 |
| `StringId` | `public string StringId` | 属性 |
| `GroupId` | `public string GroupId` | 属性 |
| `Name` | `public TextObject Name` | 属性 |
| `Description` | `public TextObject Description` | 属性 |
| `IsVisibleOnlyWhenEarned` | `public bool IsVisibleOnlyWhenEarned` | 属性 |
| `PeriodStart` | `public DateTime PeriodStart` | 属性 |
| `PeriodEnd` | `public DateTime PeriodEnd` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `IsTimed` | `public bool IsTimed` | 属性 |
| `Badge` | `public Badge(int index, BadgeType badgeType)` | 构造函数 |
| `Deserialize` | `public virtual void Deserialize(XmlNode node)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 BadgeCondition](../BadgeCondition/)
- [同命名空间 BadgeManager](../BadgeManager/)
- [同命名空间 BadgeOwnerKillTracker](../BadgeOwnerKillTracker/)
- [同命名空间 BadgeType](../BadgeType/)
