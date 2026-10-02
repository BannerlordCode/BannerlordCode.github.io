---
title: "BadgeCondition"
description: "BadgeCondition：TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges 的 public 类；公开成员 8 个（方法 2、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeCondition.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BadgeCondition

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class BadgeCondition`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeCondition.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BadgeCondition 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeCondition.cs。它是一个 public 类，继承链为 BadgeCondition。public/protected 成员共 8 个：2 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BadgeCondition 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`，继承链 BadgeCondition。成员构成以属性为主（属性 5/8，方法 2/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/BadgeCondition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Type` | `public ConditionType Type` | 属性 |
| `GroupType` | `public ConditionGroupType GroupType` | 属性 |
| `Description` | `public TextObject Description` | 属性 |
| `StringId` | `public string StringId` | 属性 |
| `string>Parameters` | `public IReadOnlyDictionary<string, string>Parameters` | 属性 |
| `BadgeCondition` | `public BadgeCondition(int index, XmlNode node)` | 构造函数 |
| `Check` | `public bool Check(string value)` | 方法 |
| `Check` | `public bool Check(int value)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Badge](../Badge/)
- [同命名空间 BadgeManager](../BadgeManager/)
- [同命名空间 BadgeOwnerKillTracker](../BadgeOwnerKillTracker/)
- [同命名空间 BadgeType](../BadgeType/)
