---
title: "PartySizeLimitModel"
description: "Auto-generated class reference for PartySizeLimitModel."
---
# PartySizeLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel> `
**Base:** MBGameModel<PartySizeLimitModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs

## Overview

Auto-generated stub for `PartySizeLimitModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
