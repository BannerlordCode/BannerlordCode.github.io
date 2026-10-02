---
title: "ClanTierModel"
description: "ClanTierModel 的自动生成类参考。"
---
# ClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanTierModel : MBGameModel<ClanTierModel> `
**Base:** MBGameModel<ClanTierModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs

## 概述

`ClanTierModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CalculateInitialRenown
`public abstract int CalculateInitialRenown(Clan clan)`

### CalculateInitialInfluence
`public abstract int CalculateInitialInfluence(Clan clan)`

### CalculateTier
`public abstract int CalculateTier(Clan clan)`

### HasUpcomingTier
`public abstract ValueTuple<ExplainedNumber,bool> HasUpcomingTier(Clan clan,out TextObject extraExplanation,bool includeDescriptions = false)`

### GetRequiredRenownForTier
`public abstract int GetRequiredRenownForTier(int tier)`

### GetPartyLimitForTier
`public abstract int GetPartyLimitForTier(Clan clan,int clanTierToCheck)`

### GetCompanionLimit
`public abstract int GetCompanionLimit(Clan clan)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
