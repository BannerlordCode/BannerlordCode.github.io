---
title: "HeroCreator"
description: "TaleWorlds.CampaignSystem.HeroCreator —— 命名空间 TaleWorlds.CampaignSystem 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# HeroCreator

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class HeroCreator`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.CampaignSystem/HeroCreator.cs`

## 概述

`HeroCreator` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.CampaignSystem` 下的类，声明于模块目录 `TaleWorlds.CampaignSystem` 的 `TaleWorlds.CampaignSystem/HeroCreator.cs`（第 12 行声明）。该声明访问级别为public（公开），修饰为静态，源码中未显式声明基类型；解析到的成员共 113 项，其中 35 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public Hero Hero { get; }` — 属性，get，类型 Hero
- `public TextObject Name { get; private set; }` — 属性，get/set，类型 TextObject
- `public TextObject FirstName { get; private set; }` — 属性，get/set，类型 TextObject
- `public Hero Mother { get; private set; }` — 属性，get/set，类型 Hero
- `public Hero Father { get; private set; }` — 属性，get/set，类型 Hero
- `public bool IsFemale { get; private set; }` — 属性，get/set，类型 bool
- `public Settlement BornSettlement { get; private set; }` — 属性，get/set，类型 Settlement
- `public int Level { get; private set; }` — 属性，get/set，类型 int
- `public float Weight { get; private set; }` — 属性，get/set，类型 float
- `public float Build { get; private set; }` — 属性，get/set，类型 float
- `public StaticBodyProperties? StaticBodyProperties { get; private set; }` — 属性，get/set，类型 StaticBodyProperties?
- `public FormationClass? PreferredUpgradeFormation { get; private set; }` — 属性，get/set，类型 FormationClass?
- `public Clan Clan { get; private set; }` — 属性，get/set，类型 Clan
- `public CultureObject Culture { get; private set; }` — 属性，get/set，类型 CultureObject
- `public Clan SupporterOf { get; private set; }` — 属性，get/set，类型 Clan
- `public Occupation Occupation { get; private set; }` — 属性，get/set，类型 Occupation
- `public bool IsOffspring { get; private set; }` — 属性，get/set，类型 bool
- `public bool GenerateFirstAndFullName { get; private set; }` — 属性，get/set，类型 bool
- `public bool HasBornSettlementBeenSet { get; private set; }` — 属性，get/set，类型 bool
- `public bool HasClanBeenSet { get; private set; }` — 属性，get/set，类型 bool
- `public HeroInitializationArgs(Hero hero, bool isOffspring)` — 方法，2 个参数，返回 H
- `public HeroCreator.HeroInitializationArgs SetGenerateFirstAndFullName(bool value)` — 方法，1 个参数，返回 HeroCreator.HeroInitializationArgs
- `public HeroCreator.HeroInitializationArgs SetName(TextObject name)` — 方法，1 个参数，返回 HeroCreator.HeroInitializationArgs
- `public HeroCreator.HeroInitializationArgs SetFirstName(TextObject firstName)` — 方法，1 个参数，返回 HeroCreator.HeroInitializationArgs
- `public HeroCreator.HeroInitializationArgs SetMother(Hero mother)` — 方法，1 个参数，返回 HeroCreator.HeroInitializationArgs
- `public HeroCreator.HeroInitializationArgs SetFather(Hero father)` — 方法，1 个参数，返回 HeroCreator.HeroInitializationArgs
- `public HeroCreator.HeroInitializationArgs SetIsFemale(bool isFemale)` — 方法，1 个参数，返回 HeroCreator.HeroInitializationArgs
- `public HeroCreator.HeroInitializationArgs SetBornSettlement(Settlement bornSettlement)` — 方法，1 个参数，返回 HeroCreator.HeroInitializationArgs
- `public HeroCreator.HeroInitializationArgs SetLevel(int level)` — 方法，1 个参数，返回 HeroCreator.HeroInitializationArgs
- `public HeroCreator.HeroInitializationArgs SetAppearance(StaticBodyProperties? staticBodyProperties, float weight = -1f, float build = -1f, int hair = -1, int beard = -1, int tattoo = -1)` — 方法，6 个参数，返回 HeroCreator.HeroInitializationArgs

- 其余 5 个 public/protected 成员未在此列出。

## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 35 条成员记录全部来自 `TaleWorlds.CampaignSystem/HeroCreator.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public static class HeroCreator` 这一行的访问级别与修饰（当前为public（公开）、静态）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`campaign` API](../)
- [AcceptCallToWarAgreementDecision（同命名空间）](../AcceptCallToWarAgreementDecision)
- [AcceptCallToWarOfferMapNotification（同命名空间）](../AcceptCallToWarOfferMapNotification)
- [AccompanyingCharacter（同命名空间）](../AccompanyingCharacter)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
- [CustomBattleSubModule（custombattle 桶）](../../custombattle/CustomBattleSubModule)
