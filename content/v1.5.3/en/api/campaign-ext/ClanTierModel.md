---
title: "ClanTierModel"
description: "Auto-generated class reference for ClanTierModel."
---
# ClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanTierModel : MBGameModel<ClanTierModel> `
**Base:** MBGameModel<ClanTierModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs

## Overview

Auto-generated stub for `ClanTierModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
