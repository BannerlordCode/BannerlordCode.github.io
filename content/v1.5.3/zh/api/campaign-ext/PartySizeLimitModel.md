---
title: "PartySizeLimitModel"
description: "PartySizeLimitModel 的自动生成类参考。"
---
# PartySizeLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel> `
**Base:** MBGameModel<PartySizeLimitModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs

## 概述

`PartySizeLimitModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetPartyMemberSizeLimit
`public abstract ExplainedNumber GetPartyMemberSizeLimit(PartyBase party,bool includeDescriptions = false)`

### GetPartyPrisonerSizeLimit
`public abstract ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party,bool includeDescriptions = false)`

### CalculateGarrisonPartySizeLimit
`public abstract ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement,bool includeDescriptions = false)`

### GetClanTierPartySizeEffectForHero
`public abstract int GetClanTierPartySizeEffectForHero(Hero hero)`

### GetNextClanTierPartySizeEffectChangeForHero
`public abstract int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`

### GetAssumedPartySizeForLordParty
`public abstract int GetAssumedPartySizeForLordParty(Hero leaderHero,IFaction partyMapFaction,Clan actualClan)`

### GetIdealVillagerPartySize
`public abstract int GetIdealVillagerPartySize(Village village)`

### FindAppropriateInitialRosterForMobileParty
`public abstract TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party,PartyTemplateObject partyTemplate)`

### FindAppropriateInitialShipsForMobileParty
`public abstract List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party,PartyTemplateObject partyTemplate)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
