---
title: "AlleyModel"
description: "Auto-generated class reference for AlleyModel."
---
# AlleyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AlleyModel : MBGameModel<AlleyModel> `
**Base:** MBGameModel<AlleyModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs

## Overview

Auto-generated stub for `AlleyModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetDailyXpGainForAssignedClanMember
`public abstract float GetDailyXpGainForAssignedClanMember(Hero assignedHero)`

### GetDailyXpGainForMainHero
`public abstract float GetDailyXpGainForMainHero()`

### GetInitialXpGainForMainHero
`public abstract float GetInitialXpGainForMainHero()`

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
`public abstract float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()`

### GetTroopsOfAIOwnedAlley
`public abstract TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)`

### GetTroopsOfAlleyForBattleMission
`public abstract TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)`

### GetDailyIncomeOfAlley
`public abstract int GetDailyIncomeOfAlley(Alley alley)`

### GetClanMembersAndAvailabilityDetailsForLeadingAnAlley
`public abstract List<ValueTuple<Hero,DefaultAlleyModel.AlleyMemberAvailabilityDetail>> GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)`

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
`public abstract TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley,float random)`

### GetDisabledReasonTextForHero
`public abstract TextObject GetDisabledReasonTextForHero(Hero hero,Alley alley,DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)`

### GetAlleyAttackResponseTimeInDays
`public abstract float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)`

## See Also

- [Section index](../)
