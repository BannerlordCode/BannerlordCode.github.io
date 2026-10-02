---
title: "ConditionalBadge"
description: "ConditionalBadge：TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges 的 public 类，继承 Badge；公开成员 3 个（方法 1、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/ConditionalBadge.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConditionalBadge

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class ConditionalBadge : Badge`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/ConditionalBadge.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ConditionalBadge 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/ConditionalBadge.cs。它是一个 public 类，实现/继承 Badge，继承链为 ConditionalBadge → Badge。public/protected 成员共 3 个：1 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ConditionalBadge 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`，继承链 ConditionalBadge → Badge。成员构成以方法为主（方法 1/3，属性 1/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/ConditionalBadge.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IReadOnlyList` | `public IReadOnlyList<BadgeCondition>BadgeConditions` | 属性 |
| `ConditionalBadge` | `public ConditionalBadge(int index, BadgeType badgeType) : base(index, badgeType)` | 构造函数 |
| `Deserialize` | `public override void Deserialize(XmlNode node)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Badge](../Badge/)
- [同命名空间 Badge](../Badge/)
- [同命名空间 BadgeCondition](../BadgeCondition/)
- [同命名空间 BadgeManager](../BadgeManager/)
- [同命名空间 BadgeOwnerKillTracker](../BadgeOwnerKillTracker/)
