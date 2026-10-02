---
title: "HeroCreator"
description: "HeroCreator：TaleWorlds.CampaignSystem 的 public 类；公开成员 6 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/HeroCreator.cs。"
---
# HeroCreator

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class HeroCreator`
**File:** `TaleWorlds.CampaignSystem/HeroCreator.cs`

## 概述

HeroCreator 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/HeroCreator.cs。它是一个 public 类，继承链为 HeroCreator。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：HeroCreator 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 HeroCreator。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/HeroCreator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateNotable` | `public static Hero CreateNotable(Occupation occupation, Settlement settlement = null)` | 方法 |
| `CreateSpecialHero` | `public static Hero CreateSpecialHero(CharacterObject template, Settlement bornSettlement = null, Clan faction = null, Clan supporterOfClan = null, int age = -1)` | 方法 |
| `CreateChild` | `public static Hero CreateChild(CharacterObject template, Settlement bornSettlement, Clan clan, int age)` | 方法 |
| `CreateRelativeNotableHero` | `public static Hero CreateRelativeNotableHero(Hero relative)` | 方法 |
| `CreateBasicHero` | `public static bool CreateBasicHero(string stringId, CharacterObject character, out Hero hero, bool isAlive = true)` | 方法 |
| `DeliverOffSpring` | `public static Hero DeliverOffSpring(Hero mother, Hero father, bool isOffspringFemale)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)
