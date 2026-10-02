---
title: "PartySizeLimitModel"
description: "PartySizeLimitModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<PartySizeLimitModel>；公开成员 10 个（方法 9、属性 1、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartySizeLimitModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

PartySizeLimitModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<PartySizeLimitModel>，继承链为 PartySizeLimitModel → MBGameModel → GameModel。public/protected 成员共 10 个：9 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartySizeLimitModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 PartySizeLimitModel → MBGameModel → GameModel。成员构成以方法为主（方法 9/10，属性 1/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPartyMemberSizeLimit` | `public abstract ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false);` | 方法 |
| `GetPartyPrisonerSizeLimit` | `public abstract ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false);` | 方法 |
| `CalculateGarrisonPartySizeLimit` | `public abstract ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false);` | 方法 |
| `GetClanTierPartySizeEffectForHero` | `public abstract int GetClanTierPartySizeEffectForHero(Hero hero);` | 方法 |
| `GetNextClanTierPartySizeEffectChangeForHero` | `public abstract int GetNextClanTierPartySizeEffectChangeForHero(Hero hero);` | 方法 |
| `GetAssumedPartySizeForLordParty` | `public abstract int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan);` | 方法 |
| `MinimumNumberOfVillagersAtVillagerParty` | `public abstract int MinimumNumberOfVillagersAtVillagerParty` | 属性 |
| `GetIdealVillagerPartySize` | `public abstract int GetIdealVillagerPartySize(Village village);` | 方法 |
| `FindAppropriateInitialRosterForMobileParty` | `public abstract TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate);` | 方法 |
| `List` | `public abstract List<Ship>FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
