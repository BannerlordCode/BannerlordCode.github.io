---
title: "NameGenerator"
description: "NameGenerator：TaleWorlds.CampaignSystem 的 public 类；公开成员 8 个（方法 6、属性 1、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/NameGenerator.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NameGenerator

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class NameGenerator`
**File:** `TaleWorlds.CampaignSystem/NameGenerator.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

NameGenerator 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/NameGenerator.cs。它是一个 public 类，继承链为 NameGenerator。public/protected 成员共 8 个：6 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NameGenerator 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem`，继承链 NameGenerator。成员构成以方法为主（方法 6/8，属性 1/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/NameGenerator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static NameGenerator Current` | 属性 |
| `NameGenerator` | `public NameGenerator()` | 构造函数 |
| `GenerateHeroNameAndHeroFullName` | `public void GenerateHeroNameAndHeroFullName(Hero hero, out TextObject firstName, out TextObject fullName, bool useDeterministicValues = true)` | 方法 |
| `GenerateHeroFirstName` | `public TextObject GenerateHeroFirstName(Hero hero)` | 方法 |
| `GenerateFirstNameForPlayer` | `public TextObject GenerateFirstNameForPlayer(CultureObject culture, bool isFemale)` | 方法 |
| `GenerateClanName` | `public TextObject GenerateClanName(CultureObject culture, Settlement clanOriginSettlement)` | 方法 |
| `MBReadOnlyList` | `public MBReadOnlyList<TextObject>GetNameListForCulture(CultureObject npcCulture, bool isFemale)` | 方法 |
| `AddName` | `public void AddName(TextObject name)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionNotes](../ActionNotes/)
- [同命名空间 AIBehaviorData](../AIBehaviorData/)
- [同命名空间 Army](../Army/)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid/)
