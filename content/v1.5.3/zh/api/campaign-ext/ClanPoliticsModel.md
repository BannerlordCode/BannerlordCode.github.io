---
title: "ClanPoliticsModel"
description: "ClanPoliticsModel 的自动生成类参考。"
---
# ClanPoliticsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanPoliticsModel : MBGameModel<ClanPoliticsModel> `
**Base:** MBGameModel<ClanPoliticsModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs

## 概述

`ClanPoliticsModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanPoliticsModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CalculateInfluenceChange
`public abstract ExplainedNumber CalculateInfluenceChange(Clan clan,bool includeDescriptions = false)`

### CalculateSupportForPolicyInClan
`public abstract float CalculateSupportForPolicyInClan(Clan clan,PolicyObject policy)`

### CalculateRelationshipChangeWithSponsor
`public abstract float CalculateRelationshipChangeWithSponsor(Clan clan,Clan sponsorClan)`

### GetInfluenceRequiredToOverrideKingdomDecision
`public abstract int GetInfluenceRequiredToOverrideKingdomDecision(DecisionOutcome popularOption,DecisionOutcome overridingOption,KingdomDecision decision)`

### CanHeroBeGovernor
`public abstract bool CanHeroBeGovernor(Hero hero)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
